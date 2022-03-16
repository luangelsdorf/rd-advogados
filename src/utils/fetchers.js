import * as queries from "./queries";

export async function fetchAPI(endpoint = '', param = '') {
  if (process.env.ENV === 'dev') {
    const data = require(`../../src/data/${param}.json`);
    return data;
  } else {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}?${queries[param]}`);
    const result = await response.json();
    return result;
  }
}