import * as React from "react";
export interface BenefitProgramCriterion {
    id: string;
    label: React.ReactNode;
    /** A supplied assessment for this criterion. It does not determine overall eligibility. */
    status: React.ReactNode;
    description?: React.ReactNode;
}
export interface BenefitProgramProps extends React.HTMLAttributes<HTMLDivElement> {
    programName: string;
    provider?: React.ReactNode;
    /** Supplied programme availability, separate from a person's eligibility. */
    status: React.ReactNode;
    eligibility: React.ReactNode;
    awardLabel?: React.ReactNode;
    awardDetails?: React.ReactNode;
    deadlineLabel?: React.ReactNode;
    criteria: readonly BenefitProgramCriterion[];
    description?: React.ReactNode;
    criteriaEmptyLabel?: React.ReactNode;
}
/** Programme availability, supplied eligibility, and award terms kept as distinct facts. */
export declare const BenefitProgram: React.ForwardRefExoticComponent<BenefitProgramProps & React.RefAttributes<HTMLDivElement>>;
