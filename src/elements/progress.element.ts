import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("progress-element")
export class ProgressElement extends LitElement {
  @property()
  progress!: number;

  render() {
    const offset = 360 - (this.progress / 100) * 360;
    return html`<svg>
      <circle class="bg" cx="57" cy="57" r="52" />
      <circle
        class="meter"
        cx="57"
        cy="57"
        r="52"
        style="stroke-dashoffset: ${offset}"
      />
    </svg> `;
  }

  static styles = css`
    svg {
      width: 114px;
      height: 114px;
      margin: 1em;
    }

    .bg {
      fill: none;
      stroke-width: 10px;
      stroke: #1a2c34;
    }

    [class^="meter"] {
      fill: none;
      stroke-width: 10px;
      stroke-linecap: round;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
    }

    .meter {
      stroke: lime;
      stroke-dasharray: 360;
      animation: progress 0.75s ease-out;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "progress-element": ProgressElement;
  }
}
