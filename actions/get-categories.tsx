import { Category } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  try {
    const res = await fetch(URL);

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to fetch categories: ${res.status} - ${errorText}`
      );
    }
    return res.json();
  } catch (error) {
    console.error("getCategories error:", error);
    return [];
  }
};

export default getCategories;
