/**
 * @name         FancyFont
 * @description  Aplica una fuente cursiva elegante a casi todo el cliente
 * @version      1.0.0
 */

(() => {
  const STYLE_ID = "fancy-font-theme";

  function injectFont() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      /* Fuente cursiva elegante para casi todo */
      body,
      .ember-view,
      span,
      div,
      p,
      label,
      button,
      input,
      textarea,
      .lol-uikit-flat-button,
      .basic-button,
      .play-button-container,
      .chat-input,
      .friend-row,
      .roster-item {
        font-family: "Segoe Script", "Brush Script MT", "Lucida Handwriting", "Apple Chancery", cursive !important;
        letter-spacing: 0.4px !important;
      }

      /* Hacer el texto un poco más legible */
      body, span, div, p, label {
        font-size: 14.5px !important;
        font-weight: 500 !important;
      }

      /* Botones un poco más grandes para que se lea mejor */
      button, .basic-button, .lol-uikit-flat-button {
        font-size: 15px !important;
        font-weight: 600 !important;
      }

      /* Evitar que se vea mal en números y textos pequeños */
      .currency, .rp-amount, .be-amount, .level, .time {
        font-family: "Segoe UI", Arial, sans-serif !important;
      }
    `;

    document.head.appendChild(style);
    console.log("%c[FancyFont] Fuente cursiva aplicada", "color: #e63946; font-weight: bold;");
  }

  function start() {
    injectFont();

    const observer = new MutationObserver(() => {
      injectFont();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === "loading") {
    window.addEventListener("load", () => setTimeout(start, 1800));
  } else {
    setTimeout(start, 1800);
  }
})();
