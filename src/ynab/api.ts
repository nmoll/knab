import { ListBudgetsResponse } from "./models";

const accessToken = import.meta.env["VITE_YNAB_ACCESS_TOKEN"];

const API_BASE_URL = "https://api.youneedabudget.com/v1";
const headers = {
  Authorization: `Bearer ${accessToken}`,
};

export const listBudgets = (): Promise<ListBudgetsResponse> =>
  fetch(`${API_BASE_URL}/budgets/last-used/categories`, {
    headers,
  }).then((res) => res.json());
