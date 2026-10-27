import * as React from "react";
export type PackageChangeType = "major" | "minor" | "patch" | "added" | "removed";
export interface PackageDependency {
    name: string;
    version: string;
    kind?: "runtime" | "development" | "peer" | "optional";
}
export interface PackageInfoProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    name: string;
    currentVersion?: string;
    newVersion?: string;
    changeType?: PackageChangeType;
    description?: React.ReactNode;
    dependencies?: PackageDependency[];
    actions?: React.ReactNode;
}
/** Supplied package changes and dependencies; never resolves or installs packages. */
export declare const PackageInfo: React.ForwardRefExoticComponent<PackageInfoProps & React.RefAttributes<HTMLElement>>;
