import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { FormErrorMessage } from "@/components/shared/form-message";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
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

    const { mutate: forgotPassword, isPending } = useForgotPassword({
        setError: form.setError,
    });

    const errorMessage = form.formState.errors?.root?.message || "";

    const onSubmit = (data: ForgotPasswordFormData) => {
        forgotPassword(data);
    };

    return (
        <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                {/* Email Address */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="mb-1">
                                Email Address
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className="h-14 rounded-full bg-background/20 px-4"
                                    error={form.formState.errors.email?.message}
                                    placeholder="e.g. johndoe2025@gmail.com"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Error Message */}
                <FormErrorMessage error={errorMessage} />

                {/* Submit Button */}
                <Button
                    className="h-14 w-full gap-4 rounded-full"
                    isLoading={isPending}
                    loadingText="Sending reset link..."
                    type="submit"
                >
                    <Mail />
                    Send Reset Link
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
        </Form>
    );
};
