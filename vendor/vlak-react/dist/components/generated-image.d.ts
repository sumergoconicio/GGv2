import * as React from "react";
export interface GeneratedImageData {
    base64: string;
    mediaType: string;
}
export interface GeneratedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
    image: GeneratedImageData;
    alt: string;
}
/** Displays supplied image bytes; image generation remains application-owned. */
export declare const GeneratedImage: React.ForwardRefExoticComponent<GeneratedImageProps & React.RefAttributes<HTMLImageElement>>;
