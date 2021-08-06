async function artistApi(link) {
  const result = await fetch(link)
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

export default artistApi;
