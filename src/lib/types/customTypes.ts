export type User = {
    id: number,
    email: string,
    password: string,
    full_name: string,
    team_name: string,
    role_name: string
};

export type UserWithPassword = User & { password: string };

export type Holiday = {
    id: number,
    description: string,
    start_date: Date,
    end_date: Date,
    time_of_day: string,
    team_name: string,
    user_id: number,
    full_name: string   
    approved: boolean
}
