import type { ModalConfig } from "../../../types/modal";
import { inicializarModal } from "./modales";
const admin: ModalConfig = {
  idModal: "modal-admin",
  idAbrir: "abrir-modalAdmin",
  idCerrar: "cerrar-modalAdmin",
  claseEntrada: "block",
  claseSalida: "hidden",
  claseFondo: "bg-black/40",
};
inicializarModal(admin);
