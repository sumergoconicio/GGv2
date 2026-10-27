/** Completes simple open tags while preserving quoted attributes and expression boundaries. */
export declare function completePreviewJSX(source: string): string;
/** Validate a data-expression subset before react-jsx-parser can interpret expressions. */
export declare function validatePreviewJSX(source: string, componentNames: ReadonlySet<string>): void;
/** Copy plain data without invoking getters or exposing prototype members. */
export declare function previewBindings(bindings?: Record<string, unknown>): Record<string, unknown>;
