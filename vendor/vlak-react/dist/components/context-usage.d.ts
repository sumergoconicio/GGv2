import * as React from "react";
import { type ContextPricingCatalog } from "./context-pricing.js";
export interface TokenUsage {
    inputTokens?: number;
    outputTokens?: number;
    reasoningTokens?: number;
    cachedInputTokens?: number;
}
export interface TokenPricing {
    inputPerMillion?: number;
    outputPerMillion?: number;
    reasoningPerMillion?: number;
    cacheReadPerMillion?: number;
    currency?: string;
}
export interface ContextUsageProps extends Omit<React.DetailsHTMLAttributes<HTMLDetailsElement>, "title"> {
    usedTokens: number;
    maxTokens?: number;
    usage?: TokenUsage;
    pricing?: TokenPricing;
    /** Optional metadata from an application-owned Tokenlens/models.dev catalog. Explicit limits and rates take precedence. */
    modelId?: string;
    catalog?: ContextPricingCatalog;
    model?: string;
    label?: string;
    defaultOpen?: boolean;
}
/** Context occupancy and caller-supplied token usage/pricing. No model catalog or prices are fetched. */
export declare const ContextUsage: React.ForwardRefExoticComponent<ContextUsageProps & React.RefAttributes<HTMLDetailsElement>>;
