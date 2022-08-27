import { LitElement } from "lit";
import { ListBudgetsResponse } from "./ynab/models";
export declare class AppElement extends LitElement {
    budgets: ListBudgetsResponse | null;
    constructor();
    initBudgets(): Promise<void>;
    render(): "Loading" | import("lit-html").TemplateResult<1>;
    private formatCurrency;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "app-element": AppElement;
    }
}
