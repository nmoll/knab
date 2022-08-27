import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { listBudgets } from "./ynab/api";
import { ListBudgetsResponse } from "./ynab/models";

@customElement("app-element")
export class AppElement extends LitElement {
  @state()
  budgets: ListBudgetsResponse | null = null;

  constructor() {
    super();

    this.initBudgets();
  }

  async initBudgets() {
    this.budgets = await listBudgets();
  }

  render() {
    if (!this.budgets) {
      return "";
    }

    const category = this.budgets.data.category_groups.find(
      (group) => group.name === "Rowan"
    );

    if (!category) {
      return html`No category found for Rowan`;
    }

    return html`<div>
      ${category.categories.map(
        (category) =>
          html`
            <h2>${category.name}</h2>
            <div class="progress">
              <div class="progress-label">
                ${this.formatCurrency(category.balance)} /
                ${this.formatCurrency(category.goal_target)}
              </div>
              <div class="progress-remaining"></div>
              <div
                class="progress-complete"
                style="height: ${category.goal_percentage_complete}%"
              ></div>
            </div>
          `
      )}
    </div>`;
  }

  private formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount / 1000);
  }

  static styles = css`
    :host {
      text-align: center;
    }

    .progress {
      margin: 1em;
      height: 400px;
      border: 1px solid green;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      position: relative;
    }

    .progress-complete {
      background-color: green;
    }

    .progress-remaining {
      flex: 1;
    }

    .progress-label {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }

    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": AppElement;
  }
}
