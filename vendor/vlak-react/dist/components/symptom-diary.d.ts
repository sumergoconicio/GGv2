import * as React from "react";
export interface SymptomEntry {
    id: string;
    symptom: string;
    /** ISO timestamp with an explicit offset. Invalid dates sort after dated entries. */
    dateTime: string;
    timeLabel?: string;
    /** A supplied description, such as the person's own intensity scale. */
    intensity?: string;
    notes?: React.ReactNode;
    details?: React.ReactNode;
    /** Unique accessible disclosure name; defaults to symptom and display time. */
    detailsLabel?: string;
    actions?: React.ReactNode;
}
export interface SymptomDiaryProps extends React.HTMLAttributes<HTMLOListElement> {
    entries: readonly SymptomEntry[];
    emptyLabel?: string;
    /** Sorts a copy of entries. Equal timestamps retain their supplied order. */
    order?: "newest" | "oldest";
}
/** A time-ordered record of supplied symptoms, descriptions and native detail disclosures. */
export declare const SymptomDiary: React.ForwardRefExoticComponent<SymptomDiaryProps & React.RefAttributes<HTMLOListElement>>;
