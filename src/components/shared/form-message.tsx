import { CircleCheck, CircleX } from "lucide-react";

import { cn } from "@/lib/utils";

// Interface for the FormErrorMessage component props
interface FormErrorProps {
    className?: string;
    error?: string | null;
}

/**
 * FormErrorMessage component to display error messages in forms, specifically for api error responses.
 *
 * This component renders an error message with a specific style, including an icon and a message.
 * It is designed to be used in forms to provide feedback to users when an error occurs.
 */
const FormErrorMessage = ({ error, className }: FormErrorProps) => {
    if (!error) return null;

    const message = error || "Something went wrong. Please try again later.";

    return (
        <div
            className={cn(
                "flex items-center gap-2 rounded-lg border border-destructive/5 bg-destructive/10 p-4 font-medium text-destructive text-sm",
                className
            )}
        >
            <CircleX size={16} />
            <span>{message}</span>
        </div>
    );
};

// Interface for the FormSuccessMessage component props
interface FormSuccessProps {
    children: React.ReactNode;
}

/**
 * FormSuccessMessage component to display success messages in forms, specifically for api success responses.
 *
 * This component renders a success message with a specific style, including an icon and a message.
 * It is designed to be used in forms to provide feedback to users when an action is successful.
 */
const FormSuccessMessage = ({ children }: FormSuccessProps) => (
    <div className="flex items-center gap-2 rounded-md bg-success p-4 font-medium text-sm text-success-foreground">
        <CircleCheck size={16} />
        <span>{children}</span>
    </div>
);

export { FormErrorMessage, FormSuccessMessage };
