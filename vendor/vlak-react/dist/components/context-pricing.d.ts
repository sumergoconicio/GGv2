import type { TokenPricing } from "./context-usage.js";
/** Tokenlens/models.dev catalog rates are USD per one million tokens. */
export interface ContextModelCost {
    input?: number;
    output?: number;
    reasoning?: number;
    cache_read?: number;
}
export interface ContextModelPricing {
    id?: string;
    name?: string;
    cost?: ContextModelCost & {
        tiers?: readonly (ContextModelCost & {
            tier: {
                type?: "context";
                size: number;
            };
        })[];
        context_over_200k?: ContextModelCost;
    };
    limit?: {
        context?: number;
        input?: number;
        output?: number;
    };
}
/** Structurally accepts a supplied Tokenlens or models.dev provider catalog. */
export type ContextPricingCatalog = Readonly<Record<string, {
    id?: string;
    models: Readonly<Record<string, ContextModelPricing>>;
}>>;
export interface ResolvedContextPricing {
    modelId: string;
    model: string;
    maxTokens?: number;
    pricing?: TokenPricing;
}
export interface ContextPricingOptions {
    inputTokens?: number;
}
/**
 * Resolve cached catalog metadata without fetching, timers, or a bundled pricing snapshot.
 * Qualified provider/model ids select the provider's prices; providerless ids must be unique.
 * Catalogs may be obtained with Tokenlens or models.dev in application/server code.
 */
export declare function resolveContextPricing(modelId: string, catalog: ContextPricingCatalog, options?: ContextPricingOptions): ResolvedContextPricing | undefined;
