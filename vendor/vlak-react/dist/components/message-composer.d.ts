import * as React from "react";
import { type AttachmentData } from "./attachments.js";
import { type FileSelectionRejection } from "../file-selection.js";
export interface ComposedMessage {
    text: string;
    files: File[];
}
export type MessageAttachmentRejection = FileSelectionRejection;
export interface MessageComposerAttachmentActions {
    remove: (id: string) => void;
    openFileDialog: () => void;
    disabled: boolean;
}
export interface MessageComposerState {
    value: string;
    files: readonly File[];
    attachments: readonly AttachmentData[];
    /** Changes the draft unless submission or the composer is disabled. */
    setValue: (value: string) => void;
    /** Uses the same validation as the file picker, paste, and drop. */
    addFiles: (files: readonly File[] | FileList) => boolean;
    removeAttachment: (id: string) => void;
    clearAttachments: () => void;
    openFileDialog: () => void;
    captureScreenshot: () => Promise<void>;
    focus: () => void;
    /** Returns false when blocked, invalid, or sending fails. */
    submit: () => Promise<boolean>;
    stop: () => void;
    disabled: boolean;
    pending: boolean;
    generating: boolean;
    canSubmit: boolean;
    canAttach: boolean;
    canCapture: boolean;
    capturing: boolean;
    status: string;
    failed: boolean;
}
export interface MessageComposerParts {
    /** Render once; owns the merged ref, shortcuts, and compact auto sizing. */
    input: React.ReactNode;
    submit: React.ReactNode;
    attach: React.ReactNode;
    screenshot: React.ReactNode;
    attachments: React.ReactNode;
    tools: React.ReactNode;
}
export type MessageComposerTextareaProps = Omit<React.ComponentPropsWithRef<"textarea">, "value" | "defaultValue" | "disabled" | "placeholder" | "maxLength" | "rows" | "children">;
/** Reads the nearest composer's draft and validated commands from a custom child or tool. */
export declare function useMessageComposer(): MessageComposerState;
export interface MessageComposerProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "defaultValue" | "onSubmit"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (text: string) => void;
    onSend: (message: ComposedMessage) => void | Promise<void>;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    allowAttachments?: boolean;
    accept?: string;
    /** Controlled file selection, independent of the text draft. */
    files?: File[];
    defaultFiles?: File[];
    onFilesChange?: (files: File[]) => void;
    multiple?: boolean;
    maxFiles?: number;
    maxFileSize?: number;
    onAttachmentError?: (rejections: MessageAttachmentRejection[]) => void;
    /** Also accept file drops outside this composer. Enable on one composer per page. */
    globalDrop?: boolean;
    /** Shows a user-activated browser screen capture action when available. */
    allowScreenshot?: boolean;
    /** Application-owned model selectors, capability controls, or other tools. */
    tools?: React.ReactNode;
    renderAttachments?: (attachments: AttachmentData[], actions: MessageComposerAttachmentActions) => React.ReactNode;
    /** Rearranges the provided controls. Render input and submit once; feedback stays in the form. */
    renderLayout?: (parts: MessageComposerParts, state: MessageComposerState) => React.ReactNode;
    /** Native textarea attributes and handlers. Prevent a key's default to override its shortcut. */
    textareaProps?: MessageComposerTextareaProps;
    maxLength?: number;
    /** Enter submits, Shift+Enter inserts a line. Otherwise use Cmd/Ctrl+Enter. */
    sendOnEnter?: boolean;
    /** Application-owned response generation, separate from submission pending state. */
    generating?: boolean;
    /** Requests that the application stop generation; does not itself cancel a network request. */
    onStop?: () => void;
    /** A single-line draft with an inline icon action; grows as the message wraps. */
    compact?: boolean;
    /** Maximum visible draft lines in compact mode, clamped to 1–20. */
    maxRows?: number;
}
/** A message draft with attachments, IME-safe shortcuts, and retained text after send failures. */
export declare const MessageComposer: React.ForwardRefExoticComponent<MessageComposerProps & React.RefAttributes<HTMLTextAreaElement>>;
