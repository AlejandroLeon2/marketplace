import type {NavegacionTab} from "../../../types/tabs";

function ocultarVistas(claseVista: string, claseOculta: string): void {
  document.querySelectorAll(`.${claseVista}`).forEach((el) => {
    el.classList.add(claseOculta);
  });
}

function mostrarVista(id: string, claseOculta: string): void {
  const vista = document.getElementById(id);
  if (vista) vista.classList.remove(claseOculta);
}

function activarBotones(config: NavegacionTab): void {
  const { attrBtn, claseVista, claseOculta } = config;

  document.querySelectorAll(`[${attrBtn}]`).forEach((btn) => {
    btn.addEventListener("click", () => {
      const idDestino = btn.getAttribute(attrBtn);
      if (!idDestino) return;
      ocultarVistas(claseVista, claseOculta);
      mostrarVista(idDestino, claseOculta);
    });
  });
};

export function iniciarNavegacion(config: NavegacionTab): void {
  activarBotones(config);
  mostrarVista(config.idInicial, config.claseOculta);
}

