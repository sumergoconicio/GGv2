import * as React from "react";
export type DesignRuleSeverity = "error" | "warning" | "info";
export type DesignRuleStatus = "open" | "resolved" | "excluded";
export interface DesignRuleLocation {
    x: number | null;
    y: number | null;
    unit: string | null;
}
export interface DesignRuleViolation {
    id: string;
    title: string;
    severity: DesignRuleSeverity | null;
    status: DesignRuleStatus | null;
    rule?: string | null;
    layer?: string | null;
    net?: string | null;
    location?: DesignRuleLocation | null;
    objects?: readonly string[];
    description?: React.ReactNode;
    canResolve?: boolean;
    pending?: boolean;
    disabled?: boolean;
}
export interface DesignRuleFilter {
    severity: DesignRuleSeverity | "all" | "unknown";
    status: DesignRuleStatus | "all" | "unknown";
}
export interface DesignRuleResultsProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "onSelect"> {
    label: React.ReactNode;
    violations: readonly DesignRuleViolation[];
    filter?: DesignRuleFilter;
    defaultFilter?: DesignRuleFilter;
    onFilterChange?: (filter: DesignRuleFilter) => void;
    selectedId?: string | null;
    /** Requests selection in the host board viewer; selectedId remains host-owned. */
    onSelect?: (id: string) => void;
    /** Requests resolution of an open result. Confirmed status never changes locally. */
    onResolve?: (id: string) => void;
    runLabel?: React.ReactNode;
    description?: React.ReactNode;
}
/** Supplied rule-check outcomes with local or controlled filters and host-confirmed actions. */
export declare const DesignRuleResults: React.ForwardRefExoticComponent<DesignRuleResultsProps & React.RefAttributes<HTMLFieldSetElement>>;
