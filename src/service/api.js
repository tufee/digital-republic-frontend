export async function fetchData(payload, setPinturaData, url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    setPinturaData(result)
  } catch (error) {
    console.error("Error:", error);
  }
}
