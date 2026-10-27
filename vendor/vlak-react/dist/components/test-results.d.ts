import * as React from "react";
export type TestResultStatus = "passed" | "failed" | "skipped" | "running" | "pending";
export interface TestResultItem {
    id: string;
    name: string;
    status: TestResultStatus;
    duration?: number;
    error?: string;
    stack?: string;
}
export interface TestResultSuite {
    id: string;
    name: string;
    tests: TestResultItem[];
    duration?: number;
}
export interface TestResultsProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    suites: TestResultSuite[];
    title?: React.ReactNode;
    /** Total elapsed time in milliseconds, when measured by the runner. */
    duration?: number;
    defaultOpen?: boolean;
    /** Requests a retry; only new supplied test data changes the displayed result. */
    onRetry?: (test: TestResultItem, suite: TestResultSuite) => void | Promise<void>;
}
/** Test hierarchy and derived totals, with runner-owned status and retry results. */
export declare const TestResults: React.ForwardRefExoticComponent<TestResultsProps & React.RefAttributes<HTMLElement>>;
