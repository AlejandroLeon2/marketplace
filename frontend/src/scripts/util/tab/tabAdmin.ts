import { iniciarNavegacion } from "./tabsBotones";
import type { NavegacionTab } from "../../../types/tabs";

const navConfig: NavegacionTab = {
  attrBtn: "data-section",
  idInicial: "perfil",
  claseVista: "seccion-cuenta",
  claseOculta: "hidden",
};

document.addEventListener("DOMContentLoaded", () => {
  iniciarNavegacion(navConfig);
});