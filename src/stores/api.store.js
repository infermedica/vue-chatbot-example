import { defineStore } from "pinia";
import api from "@/utils/api.js";
import { useFlowStore } from "./flow.store.js";
import { v4 as uuidv4 } from "uuid";

const useApiStore = defineStore("api-store", {
  state: () => ({
    apiState: {
      interviewId: null,
      age: null,
      sex: {
        value: null,
      },
      evidence: [],
    },
    mentions: [],
    should_stop: false,
    conditions: {},
    question: {},
    isLoading: false,
    triageLevel: null,
    alarmingSymptoms: null,
  }),
  actions: {
    addEvidence(symptom) {
      this.apiState.evidence.push(symptom);
    },

    generateInterviewId() {
      this.apiState.interviewId = uuidv4();
    },

    async getDiagnosis() {
      this.isLoading = true;

      return api(
        "diagnosis",
        this.apiState.age,
        this.apiState.sex.value,
        this.apiState.evidence,
        this.apiState.interviewId,
        "POST"
      )
        .then((response) => response.json())
        .then(async (response) => {
          this.should_stop = this.diagnosis;

          this.should_stop = response.should_stop;
          this.conditions = response.conditions;
          this.question = response?.question;
          this.isLoading = false;

          if (this.should_stop) {
            await this.getTriage();
            const flow = useFlowStore();

            flow.insertResultsToFlow();
          }
        });
    },

    async getTriage() {
      this.isLoading = true;

      return api(
        "triage",
        this.apiState.age,
        this.apiState.sex.value,
        this.apiState.evidence,
        this.apiState.interviewId,
        "POST"
      )
        .then((response) => response.json())
        .then((response) => {
          this.triageLevel = response.triage_level;
          this.alarmingSymptoms = response.serious;
        });
    },

    async getRiskFactors() {
      this.isLoading = true;

      return api(
        "suggest",
        this.apiState.age,
        this.apiState.sex.value,
        this.apiState.evidence,
        this.apiState.interviewId,
        "POST",
        { suggest_method: "demographic_risk_factors" }
      );
    },

    async NLP(text) {
      this.isLoading = true;

      return api(
        "parse",
        this.apiState.age,
        this.apiState.sex.value,
        this.apiState.evidence,
        this.apiState.interviewId,
        "POST",
        { text: text }
      )
        .then((response) => response.json())
        .then(async (response) => {
          const flow = useFlowStore();

          if (response.mentions.length !== 0) {
            if (response.obvious === true) {
              response.mentions.forEach((mention) => {
                this.apiState.evidence.push({
                  id: mention.id,
                  choice_id: mention.choice_id,
                  source: "initial",
                });
              });
              await flow.push("ObviousAnswer");
            } else {
              this.mentions = response.mentions;

              await flow.push("PlainMessage", {
                message: "I didn't get that properly. Is this correct?:",
              });

              await flow.push("NotObviousAnswer", {
                mention: this.mentions[0],
              });
            }
          } else {
            await flow.push("IncomprehensibleAnswer");
          }
        });
    },
  },
});

export default useApiStore;
