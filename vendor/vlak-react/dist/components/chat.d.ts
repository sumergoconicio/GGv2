import * as React from "react";
export interface ChatProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
    /** Visible name of this chat and its region. */
    title: React.ReactNode;
    /** Context or status below the title. */
    description?: React.ReactNode;
    /** Application-owned controls in the header. */
    actions?: React.ReactNode;
    /** Messages rendered inside the conversation history. */
    children?: React.ReactNode;
    /** An application-owned message composer, outside the scrolling history. */
    composer: React.ReactNode;
    /** Supporting text below the composer. */
    footer?: React.ReactNode;
    /** Accessible name of the scrollable message history. */
    conversationLabel?: string;
    /** Height reserved for the message history, including its jump control. */
    historyHeight?: React.CSSProperties["height"];
    /** Follow new content while the reader is at the end. */
    autoScroll?: boolean;
}
/** A chat frame with a named history and a composer that stays outside its scroll area. */
export declare const Chat: React.ForwardRefExoticComponent<ChatProps & React.RefAttributes<HTMLElement>>;
