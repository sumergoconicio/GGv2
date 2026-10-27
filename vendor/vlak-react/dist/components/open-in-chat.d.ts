import * as React from "react";
export type OpenInChatProvider = "chatgpt" | "claude" | "cursor" | "scira" | "t3" | "v0" | "github";
export interface OpenInChatProps extends Omit<React.DetailsHTMLAttributes<HTMLDetailsElement>, "title"> {
    prompt: string;
    providers?: readonly OpenInChatProvider[];
    githubUrl?: string;
    label?: string;
    defaultOpen?: boolean;
}
/** Builds provider handoff links without contacting providers or submitting a conversation. */
export declare function openInChatHref(provider: OpenInChatProvider, prompt: string, githubUrl?: string): string | undefined;
/** Explicit provider links for a supplied prompt. Nothing leaves the page until a link is activated. */
export declare const OpenInChat: React.ForwardRefExoticComponent<OpenInChatProps & React.RefAttributes<HTMLDetailsElement>>;
