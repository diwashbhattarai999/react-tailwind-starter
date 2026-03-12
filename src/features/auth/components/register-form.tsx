import { zodResolver } from "@hookform/resolvers/zod";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

import { FormErrorMessage } from "@/components/shared/form-message";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/configs/routes";

import { useRegister } from "../hooks/use-register";
import {
    type RegisterFormData,
    registerSchema,
} from "../schema/register-schema";

export const RegisterForm = () => {
    const form = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "all",
    });

    const { mutate: registerUser, isPending } = useRegister();

    const onSubmit = (data: RegisterFormData) => {
        registerUser(data, {
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
            {/* First Name & Last Name */}
            <div className="grid grid-cols-2 gap-4">
                <Field>
                    <FieldLabel className="mb-1" htmlFor="firstName">
                        First Name
                    </FieldLabel>
                    <Input
                        aria-invalid={Boolean(form.formState.errors.firstName)}
                        className="h-14 rounded-full bg-background/20 px-4"
                        id="firstName"
                        placeholder="John"
                        type="text"
                        {...form.register("firstName")}
                    />
                    <FieldError errors={[form.formState.errors.firstName]} />
                </Field>

                <Field>
                    <FieldLabel className="mb-1" htmlFor="lastName">
                        Last Name
                    </FieldLabel>
                    <Input
                        aria-invalid={Boolean(form.formState.errors.lastName)}
                        className="h-14 rounded-full bg-background/20 px-4"
                        id="lastName"
                        placeholder="Doe"
                        type="text"
                        {...form.register("lastName")}
                    />
                    <FieldError errors={[form.formState.errors.lastName]} />
                </Field>
            </div>

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

            {/* Confirm Password */}
            <Field>
                <FieldLabel className="mb-1" htmlFor="confirmPassword">
                    Confirm Password
                </FieldLabel>
                <Input
                    aria-invalid={Boolean(
                        form.formState.errors.confirmPassword
                    )}
                    className="h-14 rounded-full bg-background/20 px-4"
                    id="confirmPassword"
                    placeholder="**********"
                    type="password"
                    {...form.register("confirmPassword")}
                />
                <FieldError errors={[form.formState.errors.confirmPassword]} />
            </Field>

            {/* Error Message */}
            <FormErrorMessage error={form.formState.errors?.root?.message} />

            {/* Submit Button */}
            <Button
                className="h-14 w-full gap-4 rounded-full"
                disabled={isPending}
                type="submit"
            >
                <UserPlus />
                {isPending ? "Creating account..." : "Create Account"}
            </Button>

            {/* Login Link */}
            <div className="text-center">
                <p className="text-foreground/70 text-sm">
                    Already have an account?{" "}
                    <Link
                        className="font-semibold text-primary hover:underline"
                        to={ROUTES.AUTH.LOGIN}
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </form>
    );
};
