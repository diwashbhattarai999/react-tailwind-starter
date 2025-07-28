export interface SuccessResponse<T = unknown> {
  success: boolean;
  status: number;
  message: string;
  data?: T;
}

export interface ErrorResponse {
  success: boolean;
  status: number;
  message: string;
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
}
