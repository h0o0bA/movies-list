async function fetchData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json"
  );

  return await response.json();
}

export { fetchData };
