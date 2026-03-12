import { IconLoader, type IconProps } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

function Spinner({ className, ...props }: IconProps) {
    return (
        <IconLoader
            aria-label="Loading"
            className={cn("size-4 animate-spin", className)}
            role="status"
            {...props}
        />
    );
}

export { Spinner };
