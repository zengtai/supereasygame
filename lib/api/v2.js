async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.PUBLIC_NEXT_API}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PUBLIC_NEXT_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Fail to fetch API");
  }

  return json.data;
}
