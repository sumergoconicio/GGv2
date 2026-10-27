import * as React from "react";
import { Position, type ConnectionLineComponentProps, type Edge, type EdgeProps, type Node, type NodeToolbarProps, type PanelProps, type ReactFlowProps } from "@xyflow/react";
import { type ToolbarProps } from "./toolbar.js";
export type WorkflowNodeData = Record<string, unknown> & {
    title: string;
    description?: React.ReactNode;
    content?: React.ReactNode;
    footer?: React.ReactNode;
    source?: boolean;
    target?: boolean;
};
export type WorkflowGraphNode = Node<WorkflowNodeData, "vlak">;
export interface WorkflowNodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    actions?: React.ReactNode;
    source?: boolean;
    target?: boolean;
    sourcePosition?: Position;
    targetPosition?: Position;
    selected?: boolean;
    connectable?: boolean;
}
/** A graph node surface. Render inside React Flow so its handles use the graph's geometry. */
export declare const WorkflowNode: React.ForwardRefExoticComponent<WorkflowNodeProps & React.RefAttributes<HTMLDivElement>>;
/** Bezier edge with engine-managed hit testing and optional temporary or animated state. */
export declare function WorkflowEdge({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, markerStart, markerEnd, style, selected, animated, data, label, labelStyle, interactionWidth }: EdgeProps<Edge<{
    temporary?: boolean;
}>>): React.JSX.Element;
/** Pointer-following connection preview while creating an edge. */
export declare function WorkflowConnection({ fromX, fromY, toX, toY, fromPosition, toPosition, connectionStatus }: ConnectionLineComponentProps): React.JSX.Element;
/** Optional React Flow adapter. Supply a bounded height and controlled changes or defaultNodes/defaultEdges. */
export declare function WorkflowCanvas<N extends Node = WorkflowGraphNode, E extends Edge = Edge>({ children, className, style, ...props }: ReactFlowProps<N, E>): React.JSX.Element;
/** Overlay anchored to one of React Flow's six viewport positions. */
export declare function WorkflowPanel({ className, style, ...props }: PanelProps): React.JSX.Element;
export interface WorkflowControlsProps extends Omit<PanelProps, "children"> {
    label?: string;
}
/** Binds Vlak's canvas controls to the graph viewport and interaction lock. */
export declare function WorkflowControls({ label, position, ...props }: WorkflowControlsProps): React.JSX.Element;
export interface WorkflowToolbarProps extends Omit<NodeToolbarProps, "children"> {
    actions: ToolbarProps["actions"];
    label: string;
}
/** Node-anchored toolbar with Vlak's arrow-key action navigation. */
export declare function WorkflowToolbar({ actions, label, className, style, ...props }: WorkflowToolbarProps): React.JSX.Element;
