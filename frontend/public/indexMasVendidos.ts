
import { showMasVendidos } from "../src/components/MasVendidos/Script/core";
import { eventoMasVendido } from "../src/components/MasVendidos/Script/listener";


export function indexMasVendidos():void{

    showMasVendidos();
    eventoMasVendido();
}