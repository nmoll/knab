import { ListBudgetsResponse } from "./models";

const API_BASE_URL = "https://api.youneedabudget.com/v1";
const headers = {
  Authorization:
    "Bearer b3483dee96e0c83a725f2bf582b9d63722abe3c0e7820037eedc9a2f37e55602",
};

export const listBudgets = (): Promise<ListBudgetsResponse> =>
  fetch(`${API_BASE_URL}/budgets/last-used/categories`, {
    headers,
  }).then((res) => res.json());
