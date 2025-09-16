const apiKey = import.meta.env.VITE_API_KEY;

export async function getData(dataType: string) {
  const url = "https://s1112388.smrtp.ru/krtl/api/content/items/" + dataType;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "api-key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {}
}
