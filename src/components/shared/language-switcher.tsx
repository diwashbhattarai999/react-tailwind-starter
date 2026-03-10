import { ChevronDown, Languages } from "lucide-react";

import { cn } from "@/lib/utils";

import { useLanguage } from "../../contexts/language-context";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

/**
 * LanguageSwitcher component to switch between different languages.
 *
 * This component uses the Select component to allow users to choose a language.
 * It utilizes the useLanguage hook to access the current language and a function to change it.
 */
export default function LanguageSwitcher() {
    // Get the current language, function to set language, available languages, and display names from the context
    const { language, setLanguage, getAvailableLanguages, getDisplayName } =
        useLanguage();

    return (
        <div className="flex items-end">
            <Popover>
                {/* PopoverTrigger is the button that opens the language selection menu */}
                <PopoverTrigger className="flex cursor-pointer items-center gap-1 rounded-md border bg-accent px-4 py-2 text-accent-foreground text-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary">
                    <Languages size={18} />
                    {getDisplayName(language)}
                    <ChevronDown size={12} />
                </PopoverTrigger>

                {/* PopoverContent contains the list of available languages */}
                <PopoverContent className="flex flex-col gap-1 p-1 text-sm">
                    {getAvailableLanguages().map(({ locale, name }) => {
                        const isSelected = language === locale;
                        return (
                            <button
                                className={cn(
                                    "w-full cursor-pointer select-none rounded-md px-4 py-2 text-left hover:bg-accent",
                                    isSelected && "bg-accent text-primary"
                                )}
                                key={locale}
                                onClick={() => setLanguage(locale)}
                                type="button"
                            >
                                <span className="block truncate">{name}</span>
                            </button>
                        );
                    })}
                </PopoverContent>
            </Popover>
        </div>
    );
}
