export async function fetchAPI(endpoint = '') {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${endpoint}?populate=deep`);
  const result = await response.json();
  return result;
}