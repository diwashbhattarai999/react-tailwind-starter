import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { FormErrorMessage } from "@/components/shared/form-message";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/configs/routes";

import { useForgotPassword } from "../hooks/use-forgot-password";
import {
    type ForgotPasswordFormData,
    forgotPasswordSchema,
} from "../schema/forgot-password-schema";

export const ForgotPasswordForm = () => {
    const form = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "all",
    });

    const { mutate: forgotPassword, isPending } = useForgotPassword();

    const onSubmit = (data: ForgotPasswordFormData) => {
        forgotPassword(data, {
            onError: (error) => {
                form.setError("root", {
                    message:
                        error.message ||
                        "Something went wrong. Please try again later.",
                });
            },
        });
    };

    return (
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Email Address */}
            <Field>
                <FieldLabel className="mb-1" htmlFor="email">
                    Email Address
                </FieldLabel>
                <Input
                    aria-invalid={Boolean(form.formState.errors.email)}
                    className="h-14 rounded-full bg-background/20 px-4"
                    id="email"
                    placeholder="e.g. johndoe2025@gmail.com"
                    type="email"
                    {...form.register("email")}
                />
                <FieldError errors={[form.formState.errors.email]} />
            </Field>

            {/* Error Message */}
            <FormErrorMessage error={form.formState.errors?.root?.message} />

            {/* Submit Button */}
            <Button
                className="h-14 w-full gap-4 rounded-full"
                disabled={isPending}
                type="submit"
            >
                <Mail />
                {isPending ? "Sending reset link..." : "Send Reset Link"}
            </Button>

            {/* Back to Login Link */}
            <div className="text-center">
                <Link
                    className="inline-flex items-center gap-2 font-semibold text-primary text-sm hover:underline"
                    to={ROUTES.AUTH.LOGIN}
                >
                    <ArrowLeft size={16} />
                    Back to Login
                </Link>
            </div>
        </form>
    );
};
