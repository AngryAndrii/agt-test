export const fetchData = async () => {
  let response = await fetch('https://catfact.ninja/fact');
  let result = await response.json();
  return result.fact;
};
