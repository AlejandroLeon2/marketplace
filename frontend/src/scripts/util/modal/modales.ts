import type { ModalConfig } from "../../../types/modal";
function mostrarModal(
  modal: HTMLElement | null,
  claseEntrada: string,
  claseSalida: string,
  claseFondo?: string
): void {
  modal?.classList.remove(claseSalida);
  modal?.classList.add(claseEntrada);
  if (claseFondo) modal?.classList.add(claseFondo);
}

function ocultarModal(
  modal: HTMLElement | null,
  claseEntrada: string,
  claseSalida: string,
  claseFondo?: string
): void {
  modal?.classList.remove(claseEntrada);
  modal?.classList.add(claseSalida);
  if (claseFondo) modal?.classList.remove(claseFondo);
}

export function inicializarModal({
  idModal,
  idAbrir,
  idCerrar,
  claseEntrada,
  claseSalida,
  claseFondo,
}: ModalConfig) {
  const modal: HTMLElement | null = document.getElementById(idModal);
  const btnAbrir: HTMLElement | null = document.getElementById(idAbrir);
  const btnCerrar: HTMLElement | null = document.getElementById(idCerrar);

  btnAbrir?.addEventListener("click", () =>
    mostrarModal(modal, claseEntrada, claseSalida, claseFondo)
  );

  btnCerrar?.addEventListener("click", () =>
    ocultarModal(modal, claseEntrada, claseSalida, claseFondo)
  );

  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      ocultarModal(modal, claseEntrada, claseSalida, claseFondo);
    }
  });
}
