export async function getData(dataType: string) {
  const url = "https://s1112388.smrtp.ru/krtl/api/content/items/" + dataType;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "api-key": "API-3db20fa9a7c6318f1acdd670583342782170f725",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {}
}
