import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop Component
 *
 * Automatically scrolls to the top of the page on route change.
 */
export function ScrollToTop() {
    const { pathname } = useLocation();

    // biome-ignore lint/correctness/useExhaustiveDependencies: The useEffect hook is intentionally set to only depend on the pathname, as we want to scroll to the top of the page whenever the pathname changes. Adding other dependencies could cause unintended side effects or unnecessary re-renders.
    useEffect(() => {
        // Scrolls to top of the window on pathname change
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}
