export type user = {
    id: number,
    email: string,
    full_name: string,
    team_name: string,
    role_name: string
};

export type userWithPassword = user & { password: string };
