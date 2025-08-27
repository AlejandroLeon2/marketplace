
    export const boxLists = document.getElementById("box-lists");

    export function RenderList (array:string[], ubicacion:HTMLElement) :void{
        for (const list of array) {
            const lista:HTMLElement = document.createElement("li");
            lista.textContent = list
            lista.className = "text-[1.5rem] font-[400] m-[1vh_0]"

            ubicacion.appendChild(lista);
        }
    }