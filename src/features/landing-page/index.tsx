import { useTranslation } from "react-i18next";

import { BackgroundGlow } from "@/components/shared/background-glow";
import LanguageSwitcher from "@/components/shared/language-switcher";
import { Logo } from "@/components/shared/logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCounterStore } from "@/store/counter-store";

export default function LandingPage() {
    const { t } = useTranslation("translation");

    const count = useCounterStore((state) => state.value);
    const decrement = useCounterStore((state) => state.decrement);
    const increment = useCounterStore((state) => state.increment);
    const incrementByAmount = useCounterStore(
        (state) => state.incrementByAmount
    );

    return (
        <main className="relative flex min-h-screen items-center justify-center px-4">
            <BackgroundGlow />

            <div className="flex flex-col items-center justify-center gap-y-10 text-center">
                <Logo />

                <LanguageSwitcher />

                <ThemeToggle className="w-fit" />

                <div className="space-y-4">
                    <h1 className="font-bold text-4xl">{t("title")}</h1>
                    <p className="text-lg text-muted-foreground">
                        {t("description")}
                    </p>
                </div>

                <Card>
                    <CardContent className="space-y-10">
                        <h1 className="text-2xl tracking-wider">
                            Count: {count}
                        </h1>

                        <div className="flex items-center justify-center gap-x-4">
                            <Button
                                className="h-12 w-24 text-xl"
                                onClick={decrement}
                            >
                                -
                            </Button>
                            <Button
                                className="h-12 w-24 text-xl"
                                onClick={increment}
                            >
                                +
                            </Button>
                            <Button
                                className="h-12 w-24"
                                onClick={() => incrementByAmount(5)}
                            >
                                Add 5
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
