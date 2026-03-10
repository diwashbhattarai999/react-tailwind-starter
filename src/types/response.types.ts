export interface SuccessResponse<T = unknown> {
    data?: T;
    message: string;
    status: number;
    success: boolean;
}

export interface ErrorResponse {
    error: {
        errorId: string;
        name: string;
        code: string;
        details: string;
        suggestion: string;
        ip: string;
        url: string;
        method: string;
        timestamp: string;
        stack?: string;
    };
    message: string;
    status: number;
    success: boolean;
}
