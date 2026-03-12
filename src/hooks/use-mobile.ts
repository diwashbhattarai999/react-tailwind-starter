import { useEffect, useState } from "react";

/**
 * Mobile viewport breakpoint in pixels.
 * Any screen width below this value will be considered mobile.
 */
const MOBILE_BREAKPOINT = 768;

/**
 * React hook to determine whether the current viewport width
 * is considered a **mobile screen**.
 *
 * It listens to viewport size changes using `window.matchMedia`
 * and updates the state whenever the screen crosses the defined
 * mobile breakpoint.
 *
 * @returns {boolean} `true` if the viewport width is smaller than
 * `MOBILE_BREAKPOINT`, otherwise `false`.
 *
 * @example
 * ```tsx
 * const isMobile = useIsMobile();
 *
 * if (isMobile) {
 *   return <MobileNavigation />;
 * }
 *
 * return <DesktopNavigation />;
 * ```
 *
 * @remarks
 * - Uses `window.matchMedia` to efficiently track viewport changes.
 * - Safe for client-side rendering. Should not be used during SSR
 *   without guarding against `window` usage.
 * - Initial state is `undefined` to avoid incorrect value before
 *   the first effect runs.
 */
export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        /**
         * Media query list for the mobile breakpoint.
         */
        const mql = window.matchMedia(
            `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
        );

        /**
         * Handles viewport size changes.
         * Updates the `isMobile` state based on current width.
         */
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };

        mql.addEventListener("change", onChange);

        // Set initial state on mount
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

        return () => mql.removeEventListener("change", onChange);
    }, []);

    return !!isMobile;
}
