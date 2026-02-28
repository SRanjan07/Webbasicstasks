interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function getProduct(): Promise<void> {
  try {
    const res: Response = await fetch("https://fakestoreapi.com/products/1");

    if (!res.ok) {
      throw new Error("HTTP error");
    }

    const data: Product = await res.json();
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error:", error.message);
    }
  } finally {
    console.log("Completed");
  }
}

getProduct();