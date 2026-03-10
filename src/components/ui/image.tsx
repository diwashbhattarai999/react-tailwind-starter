import { forwardRef } from "react";

import { cn } from "@/lib/utils";

/**
 * Props for the Image component.
 */
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    /**
     * Optional fallback image if the main src fails
     */
    fallbackSrc?: string;
}

/**
 * Image component that wraps the native HTML img element with additional features
 * like lazy loading, error handling with fallback image, and custom styling.
 *
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alt text for the image, used for accessibility.
 * @param {string} [props.className] - Optional class name for custom styling.
 * @param {string} [props.loading="lazy"] - Loading behavior of the image, defaults to "lazy".
 * @param {string} [props.decoding="async"] - Decoding behavior of the image, defaults to "async".
 * @param {string} [props.fallbackSrc] - Optional fallback image source if the main image fails to load.
 * @param {function} [props.onError] - Optional error handler function that is called when the image fails to load.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
    (
        {
            src,
            alt,
            className,
            loading = "lazy",
            decoding = "async",
            fallbackSrc,
            height,
            onError,
            width,
            ...props
        },
        ref
    ) => {
        const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
            if (fallbackSrc) {
                event.currentTarget.src = fallbackSrc;
            }

            onError?.(event);
        };

        return (
            <>
                {/** biome-ignore lint/a11y/noNoninteractiveElementInteractions: The image uses the native onError event only to swap to a fallback source. This does not make the element user-interactive. */}
                {/** biome-ignore lint/performance/noImgElement: This project runs on Vite, so next/image is not available. This shared primitive intentionally wraps the native img element for framework-agnostic usage. */}
                <img
                    alt={alt}
                    className={cn("object-cover", className)}
                    decoding={decoding}
                    height={height}
                    loading={loading}
                    onError={handleError}
                    ref={ref}
                    src={src}
                    width={width}
                    {...props}
                />
            </>
        );
    }
);

Image.displayName = "Image";
