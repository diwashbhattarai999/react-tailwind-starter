import {
    IconChevronLeft,
    IconChevronRight,
    IconDots,
} from "@tabler/icons-react";
import type * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
    return (
        // biome-ignore lint/a11y/useSemanticElements: The nav element is used here to provide a landmark for pagination, which is appropriate for accessibility. The aria-label attribute is used to describe the purpose of the navigation region, making it clear to assistive technologies that this nav is specifically for pagination.
        <nav
            aria-label="pagination"
            className={cn("mx-auto flex w-full justify-center", className)}
            data-slot="pagination"
            // biome-ignore lint/a11y/noRedundantRoles: The role="navigation" is intentionally included here to explicitly define the purpose of this element as a navigation landmark, which can enhance accessibility for assistive technologies. While the nav element is already a landmark, adding the role can provide additional clarity and support for older assistive technologies that may not fully recognize HTML5 elements.
            role="navigation"
            {...props}
        />
    );
}

function PaginationContent({
    className,
    ...props
}: React.ComponentProps<"ul">) {
    return (
        <ul
            className={cn("flex items-center gap-1", className)}
            data-slot="pagination-content"
            {...props}
        />
    );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
    return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
    React.ComponentProps<"a">;

function PaginationLink({
    className,
    isActive,
    size = "icon",
    ...props
}: PaginationLinkProps) {
    return (
        <Button
            className={cn(className)}
            nativeButton={false}
            render={
                <a
                    aria-current={isActive ? "page" : undefined}
                    data-active={isActive}
                    data-slot="pagination-link"
                    {...props}
                />
            }
            size={size}
            variant={isActive ? "outline" : "ghost"}
        />
    );
}

function PaginationPrevious({
    className,
    text = "Previous",
    ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
    return (
        <PaginationLink
            aria-label="Go to previous page"
            className={cn("pl-2!", className)}
            size="default"
            {...props}
        >
            <IconChevronLeft data-icon="inline-start" />
            <span className="hidden sm:block">{text}</span>
        </PaginationLink>
    );
}

function PaginationNext({
    className,
    text = "Next",
    ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
    return (
        <PaginationLink
            aria-label="Go to next page"
            className={cn("pr-2!", className)}
            size="default"
            {...props}
        >
            <span className="hidden sm:block">{text}</span>
            <IconChevronRight data-icon="inline-end" />
        </PaginationLink>
    );
}

function PaginationEllipsis({
    className,
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            aria-hidden
            className={cn(
                "flex size-9 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            data-slot="pagination-ellipsis"
            {...props}
        >
            <IconDots />
            <span className="sr-only">More pages</span>
        </span>
    );
}

export {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
};
