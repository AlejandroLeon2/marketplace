import { getInformation } from "./services";
import { checkData } from "./logic";
import { boxLists, RenderList } from "./dom";

export async function showList (){
    const data:any = await getInformation();
    const lists = checkData(data);

    if(boxLists instanceof HTMLElement){
        RenderList(lists, boxLists);
    }
}