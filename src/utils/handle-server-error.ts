import { AxiosError } from "axios";
import { toast } from "sonner";

/**
 * Handles server/API errors and displays a user-friendly toast message.
 *
 * This utility:
 * - Logs the raw error for debugging.
 * - Extracts meaningful messages from Axios responses.
 * - Handles common HTTP status codes.
 * - Falls back to a default message when necessary.
 *
 * @param {unknown} error - The error thrown from an API request or async operation.
 * @param {string} [message] - Optional custom message to display instead of the default.
 * @returns {string} The resolved error message.
 *
 * @example
 * ```ts
 * try {
 *   await apiClient.get("/users");
 * } catch (error) {
 *   handleServerError(error, "Failed to fetch users.");
 * }
 * ```
 *
 * @remarks
 * - Designed primarily for handling Axios API errors.
 * - Uses `sonner` toast notifications to display messages.
 * - Safe to use with any unknown error type.
 */
export function handleServerError(error: unknown, message?: string): string {
    // Log the raw error for debugging purposes
    console.error("[Server Error]:", error);

    // Initialize a default error message
    let errorMessage = message || "Something went wrong. Please try again.";

    // Check if the error is an AxiosError to extract more specific information
    if (error instanceof AxiosError) {
        const status = error.response?.status;

        switch (status) {
            case 400:
                errorMessage = "Bad request.";
                break;

            case 401:
                errorMessage = "Unauthorized. Please login again.";
                break;

            case 403:
                errorMessage =
                    "You do not have permission to perform this action.";
                break;

            case 404:
                errorMessage = "Requested resource not found.";
                break;

            case 500:
                errorMessage = "Internal server error. Please try again later.";
                break;

            default:
                errorMessage =
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    error.message ||
                    errorMessage;
        }
    }

    // Display the error message using a toast notification
    toast.error(errorMessage);

    // Return the resolved error message for potential further use
    return errorMessage;
}
