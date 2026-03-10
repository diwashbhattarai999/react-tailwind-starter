import type { UserConfig } from "@commitlint/types";

const commitLintConfig: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    ignores: [
        (commit: string) =>
            commit.startsWith("Merge") ||
            commit === "Initial commit" ||
            commit.includes("[skip ci]"), // Common bot-related commit
    ],
};

export default commitLintConfig;

/**
 * All the common scopes enum values are listed here:
 */

// const SCOPE_ENUM = [
//     "client",
//     "common",
//     "config",
//     "scripts",
//     "deps",
//     "ci",
//     "docs",
//     "test",
// ];

/**
 * All the supported type enum values are listed here:
 */

// const TYPE_ENUM = [
//     "feat", // A new feature
//     "fix", // A bug fix
//     "docs", // Documentation updates
//     "chore", // Miscellaneous tasks
//     "style", // Code style changes (non-functional)
//     "refactor", // Code restructuring without behavior change
//     "ci", // Continuous Integration
//     "test", // Adding or updating tests
//     "revert", // Reverting previous changes
//     "perf", // Performance improvements
// ];
