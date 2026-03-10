import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import NotFoundImg from "@/assets/not-found/page-not-found.svg";
import { BackgroundGlow } from "@/components/shared/background-glow";
import { buttonVariants } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

// Interface for the NotFound component props
interface NotFoundProps {
    className?: string;
    showBackgroundGlow?: boolean;
}

/**
 * NotFound component to display a 404 page when a route is not found.
 * It includes a background glow, an illustration, and a button to navigate back.
 *
 * @param {boolean} [props.showBackgroundGlow=true] - Whether to show the background glow effect. Default is true.
 * @param {string} [props.className] - Additional class names for styling.
 */
export const NotFound = ({
    showBackgroundGlow = true,
    className,
}: NotFoundProps) => {
    const { t } = useTranslation("notfound");

    return (
        <div className={cn("flex size-full flex-col bg-background", className)}>
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
                {/* Background glow effect */}
                {showBackgroundGlow && <BackgroundGlow className="z-0" />}

                {/* Main content area */}
                <div className="flex w-full flex-col items-center justify-center text-center">
                    {/* SVG Illustration */}
                    <div className="flex size-[30rem] justify-center">
                        <Image
                            alt={t("imgAlt")}
                            className="size-full object-contain"
                            src={NotFoundImg}
                        />
                    </div>

                    {/* Title and description */}
                    <h1 className="mb-3 font-medium text-4xl text-foreground tracking-tight">
                        {t("title")}
                    </h1>
                    <p className="mb-6 max-w-xl font-medium text-muted-foreground text-sm">
                        {t("description")}
                    </p>

                    {/* Back to previous page button */}
                    <Link
                        className={cn(
                            buttonVariants({ variant: "default", size: "lg" }),
                            "group w-48 gap-2"
                        )}
                        relative="path"
                        to=".." // Navigate back to the previous page
                    >
                        <ArrowLeft
                            className="transition-transform duration-500 group-hover:-translate-x-2"
                            size={16}
                        />
                        {t("goBack")}
                    </Link>
                </div>
            </div>
        </div>
    );
};
