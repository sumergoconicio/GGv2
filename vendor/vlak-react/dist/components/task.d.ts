import * as React from "react";
import { type ReasoningProps } from "./reasoning.js";
export interface TaskItem {
    id: string;
    content: React.ReactNode;
    file?: React.ReactNode;
    state?: "pending" | "active" | "complete";
}
export interface TaskProps extends ReasoningProps {
    items?: readonly TaskItem[];
}
/** A default-open task disclosure with supplied rows and file references. */
export declare const Task: React.ForwardRefExoticComponent<TaskProps & React.RefAttributes<HTMLDetailsElement>>;
