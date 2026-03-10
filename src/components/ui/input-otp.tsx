"use client";

import { IconMinus } from "@tabler/icons-react";
import { OTPInput, OTPInputContext } from "input-otp";
import { useContext } from "react";

import { cn } from "@/lib/utils";

function InputOTP({
    className,
    containerClassName,
    ...props
}: React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}) {
    return (
        <OTPInput
            className={cn("disabled:cursor-not-allowed", className)}
            containerClassName={cn(
                "cn-input-otp flex items-center has-disabled:opacity-50",
                containerClassName
            )}
            data-slot="input-otp"
            spellCheck={false}
            {...props}
        />
    );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn(
                "flex items-center rounded-md has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
                className
            )}
            data-slot="input-otp-group"
            {...props}
        />
    );
}

function InputOTPSlot({
    index,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    index: number;
}) {
    const inputOTPContext = useContext(OTPInputContext);
    const { char, hasFakeCaret, isActive } =
        inputOTPContext?.slots[index] ?? {};

    return (
        <div
            className={cn(
                "relative flex size-9 items-center justify-center border-input border-y border-r text-sm shadow-xs outline-none transition-all first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
                className
            )}
            data-active={isActive}
            data-slot="input-otp-slot"
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
                </div>
            )}
        </div>
    );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
    return (
        // biome-ignore lint/a11y/useFocusableInteractive: The role attribute is set to "separator" to indicate that this is a separator between the OTP input slots, and the data-slot attribute is used for styling purposes. The aria-hidden attribute is set to "true" to indicate that this element is not interactive and should be ignored by assistive technologies.
        // biome-ignore lint/a11y/useSemanticElements: The role attribute is set to "separator" to indicate that this is a separator between the OTP input slots, and the data-slot attribute is used for styling purposes. The aria-hidden attribute is set to "true" to indicate that this element is not interactive and should be ignored by assistive technologies.
        <div
            className="flex items-center [&_svg:not([class*='size-'])]:size-4"
            data-slot="input-otp-separator"
            // biome-ignore lint/a11y/useAriaPropsForRole: The role attribute is set to "separator" to indicate that this is a separator between the OTP input slots, and the data-slot attribute is used for styling purposes. The aria-hidden attribute is set to "true" to indicate that this element is not interactive and should be ignored by assistive technologies.
            role="separator"
            {...props}
        >
            <IconMinus />
        </div>
    );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
