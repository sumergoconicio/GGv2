import * as stylex from "@stylexjs/stylex";
/** Screen-reader only. Matches .rs-sr */
export declare const hidden: Readonly<{
    readonly sr: Readonly<{
        readonly position: stylex.StyleXClassNameFor<"position", "absolute">;
        readonly width: stylex.StyleXClassNameFor<"width", 1>;
        readonly height: stylex.StyleXClassNameFor<"height", 1>;
        readonly padding: stylex.StyleXClassNameFor<"padding", 0>;
        readonly margin: stylex.StyleXClassNameFor<"margin", -1>;
        readonly overflow: stylex.StyleXClassNameFor<"overflow", "hidden">;
        readonly clip: stylex.StyleXClassNameFor<"clip", "rect(0, 0, 0, 0)">;
        readonly whiteSpace: stylex.StyleXClassNameFor<"whiteSpace", "nowrap">;
        readonly borderWidth: stylex.StyleXClassNameFor<"borderWidth", 0>;
    }>;
    readonly srFocusMark: Readonly<{
        readonly outlineWidth: stylex.StyleXClassNameFor<"outlineWidth", 1.5 | null>;
        readonly outlineStyle: stylex.StyleXClassNameFor<"outlineStyle", "solid" | null>;
        readonly outlineColor: stylex.StyleXClassNameFor<"outlineColor", string | null>;
        readonly outlineOffset: stylex.StyleXClassNameFor<"outlineOffset", 2 | null>;
    }>;
}>;
