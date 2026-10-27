import * as React from "react";
export interface ModelOption {
    id: string;
    name: string;
    provider?: string;
    description?: string;
    capabilities?: readonly string[];
    contextWindow?: number;
    priceLabel?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface ModelSelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
    models: readonly ModelOption[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (modelId: string) => void;
    label?: string;
    disabled?: boolean;
}
/** Search and select models from an application-supplied catalog, without provider lookups. */
export declare const ModelSelector: React.ForwardRefExoticComponent<ModelSelectorProps & React.RefAttributes<HTMLDivElement>>;
