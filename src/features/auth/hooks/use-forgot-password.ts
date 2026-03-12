import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { ROUTES } from "@/configs/routes";
import { forgotPassword } from "@/services/auth.service";
import type { ErrorResponse } from "@/types/response.types";
import type { ForgotPasswordResponse } from "@/types/services/auth.types";

import type { ForgotPasswordFormData } from "../schema/forgot-password-schema";

export const useForgotPassword = () => {
    const navigate = useNavigate();

    return useMutation<
        ForgotPasswordResponse,
        AxiosError<ErrorResponse>,
        ForgotPasswordFormData
    >({
        mutationFn: forgotPassword,
        onSuccess: () => {
            navigate(ROUTES.AUTH.LOGIN, { replace: true });
        },
        onError: (error) => {
            toast.error(`Forgot password error: ${error.message}`);
        },
    });
};
