import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const NetworkStatus = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [type, setType] = useState<"success" | "error" | null>(null);
    const [visible, setVisible] = useState(false);
    const [wasOffline, setWasOffline] = useState(navigator.onLine === false);

    useEffect(() => {
        const show = (msg: string, t: "success" | "error") => {
            setMessage(msg);
            setType(t);
            setVisible(true);
        };

        const hide = () => {
            setVisible(false);
            setTimeout(() => {
                setMessage(null);
                setType(null);
            }, 400);
        };

        const handleOnline = () => {
            if (wasOffline) {
                show("Back online", "success");
                setWasOffline(false);
                setTimeout(hide, 3000);
            }
        };

        const handleOffline = () => {
            show("No internet connection", "error");
            setWasOffline(true);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        if (!navigator.onLine) handleOffline();

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, [wasOffline]);

    if (!message) return null;

    return (
        <div
            className={cn(
                "fixed bottom-6 left-1/2 z-[9999] flex -translate-x-1/2 select-none items-center gap-2.5 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-4 py-2.5 pl-3 font-medium font-poppins text-[13.5px] text-white shadow-sm backdrop-blur-lg transition-all duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
            )}
        >
            <span
                className={cn(
                    "h-2 w-2 shrink-0 rounded-full",
                    type === "success"
                        ? "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"
                        : "animate-pulse bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.6)]"
                )}
            />

            {message}
        </div>
    );
};
