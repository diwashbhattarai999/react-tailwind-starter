import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CounterStore {
    decrement: () => void;
    increment: () => void;
    incrementByAmount: (amount: number) => void;
    value: number;
}

export const useCounterStore = create<CounterStore>()(
    persist(
        (set) => ({
            value: 0,
            decrement: () => {
                set((state) => ({ value: state.value - 1 }));
            },
            increment: () => {
                set((state) => ({ value: state.value + 1 }));
            },
            incrementByAmount: (amount) => {
                set((state) => ({ value: state.value + amount }));
            },
        }),
        {
            name: "counter-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
