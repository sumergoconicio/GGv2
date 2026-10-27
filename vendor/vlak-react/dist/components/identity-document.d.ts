import * as React from "react";
export interface IdentityDocumentProps extends React.HTMLAttributes<HTMLDivElement> {
    documentTitle: string;
    holderName: React.ReactNode;
    /** A display-safe, already-masked identifier. This component does not mask raw data. */
    maskedIdentifier?: string | null;
    identifierLabel?: string;
    issuer?: React.ReactNode;
    issuedLabel?: React.ReactNode;
    expiresLabel?: React.ReactNode;
    /** Supplied record or verification status. Expiry is never calculated. */
    status: React.ReactNode;
    statusDetail?: React.ReactNode;
    /** Working links or application-owned actions. No reveal or copy action is generated. */
    children?: React.ReactNode;
}
/** A credential record using only the supplied, display-safe identity information. */
export declare const IdentityDocument: React.ForwardRefExoticComponent<IdentityDocumentProps & React.RefAttributes<HTMLDivElement>>;
