import * as React from "react";
export interface ConversationProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Accessible name of the scrollable message history. */
    label?: string;
    /** Maximum height of the message history, before it scrolls. */
    maxHeight?: React.CSSProperties["maxHeight"];
    /** Follow new content while the reader is at the end. */
    autoScroll?: boolean;
    latestLabel?: string;
}
/** A message history that follows new content without taking the reader away from earlier messages. */
export declare const Conversation: React.ForwardRefExoticComponent<ConversationProps & React.RefAttributes<HTMLDivElement>>;
