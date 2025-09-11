import { doc } from "firebase/firestore/lite";
import type { ModalConfig } from "../../../types/modal";
import { inicializarModal } from "./modales";

const carrito: ModalConfig = {
  idModal: "modal-carrito",
  idAbrir: "open-modal-carrito",
  idCerrar: "cerrar-modal-carrito",
  claseEntrada: "translate-x-0",
  claseSalida: "translate-x-650",
  claseFondo: "bg-black/40",
};
document.addEventListener("DOMContentLoaded", () => {
  inicializarModal(carrito);
});


