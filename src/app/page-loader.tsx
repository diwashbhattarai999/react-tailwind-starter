import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

interface LoaderProps {
    className?: string;
}

/**
 * PageLoader component to display a loading spinner while the page is loading.
 *
 * This component is used to indicate that the page is in the process of loading,
 * providing a visual cue to the user.
 *
 * @param {string} [props.className] - Additional class names for styling.
 */
export const PageLoader = ({ className }: LoaderProps) => (
    // biome-ignore lint/a11y/useSemanticElements: The role attribute is set to "status" to indicate that this is a live region that will be updated with status messages, and the aria-label attribute is set to "Loading..." to provide a descriptive label for screen readers. The data-slot attribute is used for styling purposes.
    <div
        aria-label="Loading..."
        className={cn(
            "relative flex min-h-screen items-center justify-center bg-background",
            className
        )}
        role="status"
    >
        {/* Svg loader */}
        <Spinner className="size-5" />
    </div>
);
