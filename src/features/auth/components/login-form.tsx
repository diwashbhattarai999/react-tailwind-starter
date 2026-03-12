import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { FormErrorMessage } from "@/components/shared/form-message";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/configs/routes";

import { useLogin } from "../hooks/use-login";
import { type LoginFormData, loginSchema } from "../schema/login-schema";

export const LoginForm = () => {
    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "all",
    });

    const { mutate: loginUser, isPending } = useLogin();

    const onSubmit = (data: LoginFormData) => {
        loginUser(data, {
            onError: (error) => {
                form.setError("root", {
                    message:
                        error.response?.data.message ||
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

            {/* Password */}
            <Field>
                <FieldLabel className="mb-1" htmlFor="password">
                    Password
                </FieldLabel>
                <Input
                    aria-invalid={Boolean(form.formState.errors.password)}
                    className="h-14 rounded-full bg-background/20 px-4"
                    id="password"
                    placeholder="**********"
                    type="password"
                    {...form.register("password")}
                />
                <FieldError errors={[form.formState.errors.password]} />
            </Field>

            <div className="-mt-4 flex w-full items-center justify-between">
                <Link
                    className="font-semibold text-primary text-sm hover:underline"
                    to={ROUTES.AUTH.FORGOT_PASSWORD}
                >
                    Forgot Password?
                </Link>
            </div>

            {/* Error Message */}
            <FormErrorMessage error={form.formState.errors?.root?.message} />

            {/* Submit Button */}
            <Button
                className="h-14 w-full gap-4 rounded-full"
                disabled={isPending}
                type="submit"
            >
                <LogIn />
                {isPending ? "Logging in..." : "Login"}
            </Button>

            {/* Register Link */}
            <div className="text-center">
                <p className="text-foreground/70 text-sm">
                    Don't have an account?{" "}
                    <Link
                        className="font-semibold text-primary hover:underline"
                        to={ROUTES.AUTH.REGISTER}
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </form>
    );
};
