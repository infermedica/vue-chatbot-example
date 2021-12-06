/**
 * Makes a POST request to api with given endpoint and data
 * @param {string} endpoint - eg. "triage" or "diagnosis"
 * @param {number} age - Age of user
 * @param {string} sex - Value of user's gender
 * @param {evidence} evidence - gathered evidences.
 * @param {object} bodyAssign - object with properties spreaded and added to body
 */
const api = async (
  endpoint,
  age,
  sex,
  evidence,
  inderviewId,
  method,
  bodyAssign
) => {
  let options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "App-Id": import.meta.env.VITE_APP_ID,
      "App-Key": import.meta.env.VITE_APP_KEY,
      "Interview-Id": inderviewId,
    },
  };
  if (method !== "GET")
    Object.assign(options, {
      body: JSON.stringify({
        age: {
          value: age,
        },
        sex,
        evidence,
        ...bodyAssign,
      }),
    });
  return fetch(`https://api.infermedica.com/v3/${endpoint}`, options);
};

export default api;
