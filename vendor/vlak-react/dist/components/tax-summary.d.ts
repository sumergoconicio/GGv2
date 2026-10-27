import * as React from "react";
export interface TaxSummaryItem {
    id: string;
    label: React.ReactNode;
    /** A formatted amount including its currency/sign. No arithmetic is performed. */
    amount: React.ReactNode;
    detail?: React.ReactNode;
}
export interface TaxSummaryTotal {
    id: string;
    label: React.ReactNode;
    /** The host's assessed amount, not a sum of the displayed line items. */
    amount: React.ReactNode;
}
export interface TaxSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    periodLabel: React.ReactNode;
    reference?: React.ReactNode;
    status: React.ReactNode;
    items: readonly TaxSummaryItem[];
    totals: readonly TaxSummaryTotal[];
    dueLabel?: React.ReactNode;
    note?: React.ReactNode;
    itemsEmptyLabel?: React.ReactNode;
    totalsEmptyLabel?: React.ReactNode;
}
/** A supplied assessment with distinct line items and authoritative totals. */
export declare const TaxSummary: React.ForwardRefExoticComponent<TaxSummaryProps & React.RefAttributes<HTMLDivElement>>;
