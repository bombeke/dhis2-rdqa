export async function loadDataElements(fileUrl: any) {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const dataElements = await response.json();
      return dataElements;
    } catch (error) {
      console.error("Failed to load data elements:", error);
      return null;
    }
  }

  export function toISOStringFromDate(dateTimeString: string) {
    const date = new Date(dateTimeString);
    return date.toISOString();
  }