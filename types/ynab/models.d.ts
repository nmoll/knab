export interface ListBudgetsResponse {
    data: {
        category_groups: [
            {
                id: string;
                name: string;
                hidden: boolean;
                deleted: boolean;
                categories: [
                    {
                        id: string;
                        category_group_id: string;
                        name: string;
                        hidden: boolean;
                        original_category_group_id: string;
                        note: string;
                        budgeted: number;
                        activity: number;
                        balance: number;
                        goal_type: "TB";
                        goal_creation_month: string;
                        goal_target: number;
                        goal_target_month: string;
                        goal_percentage_complete: number;
                        goal_months_to_budget: number;
                        goal_under_funded: number;
                        goal_overall_funded: number;
                        goal_overall_left: number;
                        deleted: boolean;
                    }
                ];
            }
        ];
        server_knowledge: number;
    };
}
