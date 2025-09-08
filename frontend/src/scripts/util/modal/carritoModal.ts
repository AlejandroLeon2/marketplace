import type { ModalConfig } from "../../../types/modal";
import { inicializarModal } from "./modales";

const carrito: ModalConfig = {
  idModal: "modal-carrito",
  idAbrir: "open-modal",
  idCerrar: "cerrar-modal",
  claseEntrada: "translate-x-0",
  claseSalida: "translate-x-650",
  claseFondo: "bg-black/40",
};
inicializarModal(carrito);
