import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
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

import { useLogin } from "../hooks/use-login";
import { type LoginFormData, loginSchema } from "../schema/login-schema";

export const LoginForm = () => {
    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "all",
    });

    const { mutate: loginUser, isPending } = useLogin({
        setError: form.setError,
    });

    const errorMessage = form.formState.errors?.root?.message || "";

    const onSubmit = (data: LoginFormData) => {
        loginUser(data);
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

                {/* Password */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="mb-1">Password</FormLabel>
                            <FormControl>
                                <Input
                                    error={
                                        form.formState.errors.password?.message
                                    }
                                    placeholder="**********"
                                    type="password"
                                    {...field}
                                    className="h-14 rounded-full bg-background/20 px-4"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="-mt-4 flex w-full items-center justify-between">
                    <Link
                        className="font-semibold text-primary text-sm hover:underline"
                        to={ROUTES.AUTH.FORGOT_PASSWORD}
                    >
                        Forgot Password?
                    </Link>
                </div>

                {/* Error Message */}
                <FormErrorMessage error={errorMessage} />

                {/* Submit Button */}
                <Button
                    className="h-14 w-full gap-4 rounded-full"
                    isLoading={isPending}
                    loadingText="Logging in..."
                    type="submit"
                >
                    <LogIn />
                    Login
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
        </Form>
    );
};
