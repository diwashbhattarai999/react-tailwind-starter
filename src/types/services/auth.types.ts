import type { SuccessResponse } from "../response.types";

export type UserRole = "admin" | "user" | "guest";

export interface User {
    createdAt: string;
    email: string;
    id: string;
    role: UserRole;
    updatedAt: string;
    username: string;
}

export type LoginResponse = SuccessResponse<{
    user: User;
    accessToken: string;
}>;

export type RegisterResponse = SuccessResponse<{
    user: User;
    accessToken: string;
}>;

export type ForgotPasswordResponse = SuccessResponse;
export type ResetPasswordResponse = SuccessResponse;
