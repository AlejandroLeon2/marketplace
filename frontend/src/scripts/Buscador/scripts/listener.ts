import { inputBuscador } from "./dom";
import { searchProduct } from "./core";

export function eventoBuscar():void {

    inputBuscador.addEventListener('keyup', ()=>{

        const words:string = inputBuscador.value.toLocaleLowerCase();
        if(words.length > 1){
            
            console.log(`radar`);
            
            setTimeout(()=>{
                searchProduct(words)
            },300);
        };
    });
};