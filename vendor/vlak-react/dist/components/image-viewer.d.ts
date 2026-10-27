import * as React from "react";
export interface ViewerImage {
    src: string;
    alt: string;
    caption?: string;
}
export interface ImageViewerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    images: readonly ViewerImage[];
    value?: number;
    defaultValue?: number;
    onValueChange?: (index: number) => void;
    label?: string;
}
/** Inspect a labelled image collection inline or in a native lightbox. */
export declare const ImageViewer: React.ForwardRefExoticComponent<ImageViewerProps & React.RefAttributes<HTMLDivElement>>;
