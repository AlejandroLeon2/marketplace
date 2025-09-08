import { iniciarNavegacion } from "./tabsBotones";
import type { NavegacionTab } from "../../../types/tabs";

const navConfig: NavegacionTab = {
  attrBtn: "data-perfil",
  idInicial: "perfildatos",
  claseVista: "seccion-perfil",
  claseOculta: "hidden",
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarNavegacion(navConfig);
});