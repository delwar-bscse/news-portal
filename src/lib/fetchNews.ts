export const fetchNews = async (search: string = "") => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=12&title_like=${search}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news data", error);
    return [];
  }
};
