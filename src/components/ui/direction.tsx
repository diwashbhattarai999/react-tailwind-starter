"use client";

// biome-ignore lint/performance/noBarrelFile: This file is intentionally created to re-export the DirectionProvider and useDirection from the @base-ui/react/direction-provider package. This allows for a cleaner and more organized import structure in other parts of the application, as they can import these components directly from this file instead of having to specify the full path to the @base-ui/react/direction-provider package. This approach promotes better code organization and maintainability by centralizing the exports related to direction handling in one place.
export {
    DirectionProvider,
    useDirection,
} from "@base-ui/react/direction-provider";
