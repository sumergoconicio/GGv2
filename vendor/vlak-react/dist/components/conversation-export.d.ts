import * as React from "react";
import { type ButtonProps } from "./button.js";
export type ConversationExportPart = {
    type: "text";
    text: string;
} | {
    type: "file";
    filename: string;
    url?: string;
} | {
    type: "tool";
    name: string;
    input?: unknown;
    output?: unknown;
};
export interface ConversationExportMessage {
    role: string;
    content?: string;
    parts?: readonly ConversationExportPart[];
}
export interface ConversationExportOptions {
    title?: string;
    serializePart?: (part: ConversationExportPart, message: ConversationExportMessage) => string | undefined;
}
/** Serializes explicit text, file and tool parts; unsupported application objects are never stringified as messages. */
export declare function serializeConversation(messages: readonly ConversationExportMessage[], { title, serializePart }?: ConversationExportOptions): string;
export interface ConversationDownloadProps extends Omit<ButtonProps, "onClick" | "onError">, ConversationExportOptions {
    messages: readonly ConversationExportMessage[];
    filename?: string;
    onError?: (error: unknown) => void;
}
/** Downloads a Markdown snapshot using supplied message data, without reading rendered DOM. */
export declare const ConversationDownload: React.ForwardRefExoticComponent<ConversationDownloadProps & React.RefAttributes<HTMLButtonElement>>;
