export interface IAuthState {
    login: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    avatarUrl?: string;
    _id: string;
}

export interface IAuthStatePayload extends IAuthState {
    success: boolean;
}

export interface ILogin {
    email: string;
    password: string;
}
export interface IInitialState {
    data: IAuthState | null;
    isLogged: boolean;
    isLoading: boolean;
}
