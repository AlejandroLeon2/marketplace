import type { ItemsProducts } from "./logic";
import { getProducts } from "./services";
import { renderItems, boxResults } from "./dom";

export async function searchProduct(words:string):Promise<void> {
    const results:ItemsProducts[] = await getProducts(words);

    console.log(results);
    renderItems(boxResults, results)
}