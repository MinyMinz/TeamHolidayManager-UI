export type User = {
    id: number,
    email: string,
    password: string,
    full_name: string,
    team_name: string,
    role_name: string
};

export type UserWithPassword = User & { password: string };
