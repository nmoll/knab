import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./elements/progress.element";
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
            <progress-element
              .progress="${category.goal_percentage_complete}"
            ></progress-element>
          `
      )}
    </div>`;
  }

  // private formatCurrency(amount: number) {
  //   return new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //   }).format(amount / 1000);
  // }

  static styles = css`
    :host {
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": AppElement;
  }
}
