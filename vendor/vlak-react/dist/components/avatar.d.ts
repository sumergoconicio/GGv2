import * as React from "react";
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    src?: string;
    /** Image text. Defaults to `name`, then `initials`; pass "" for a decorative avatar. */
    alt?: string;
    /** Who this is. Names the image, and the initials when there is no image. */
    name?: string;
    /** Shown when there is no image, or when it fails to load. */
    initials?: string;
    size?: "sm" | "md" | "lg";
}
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
/** Overlapping row with paper seams. */
export declare const AvatarRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
