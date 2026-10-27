/**
 * Vlak icon figures. 16×16 module, optical center 8,8.
 * Optical refinement, 11 Sep 2026. CurrentColor, open line geometry and
 * rounded terminals; displayed stroke weight is selected by the renderer.
 * Filled kinship fills closed geometry of the same figures. A small set of
 * asymmetric marks has a hand-cut filled silhouette so it keeps the same
 * optical weight as the rest of the family instead of looking half-filled.
 * Chevron left/right: +0.25y optical nudge toward center 8,8.
 * Arrow endpoints: balanced 90° heads with an uninterrupted wing–tip–wing
 * subpath. The shaft meets that apex in the same painted path; it never
 * turns into a head wing, which would create an acute miter spur.
 * Wi-Fi uses two concentric 90° waves at a 4-unit pitch, centered on a
 * solid source point. The line and filled families keep the same silhouette.
 */
export type MarkEl = ({
    t: "path";
    d: string;
} | {
    t: "rect";
    x: number;
    y: number;
    w: number;
    h: number;
} | {
    t: "circle";
    cx: number;
    cy: number;
    r: number;
    solid?: true;
} | {
    t: "line";
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}) & {
    strokeWidth?: number;
};
/** Element indexes that become transparent detail cuts in the filled mark. */
export type FilledCutouts = Partial<Record<DrawnName, readonly number[]>>;
export type IconRotate = 90 | 180 | 270;
/** Unique drawn marks. Aliases resolve elsewhere. */
export declare const iconNames: readonly ["copy", "copied", "chevron-left", "chevron-right", "close", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "menu", "more", "more-h", "external", "home", "chevrons-left", "chevrons-right", "plus", "minus", "search", "filter", "sort", "edit", "trash", "share", "download", "upload", "refresh", "undo", "redo", "save", "zoom-in", "zoom-out", "link", "image", "quote", "code", "list-ordered", "mail", "message", "bell", "send", "inbox", "reply", "user", "users", "user-plus", "user-minus", "file", "file-text", "folder", "folder-open", "clipboard", "archive", "attachment", "play", "pause", "stop", "skip-back", "skip-forward", "volume", "mic", "video", "camera", "music", "info", "warning", "error", "help", "ban", "calendar", "clock", "history", "timer", "sliders", "cog", "lock", "unlock", "key", "shield", "eye", "eye-off", "cart", "bag", "credit-card", "tag", "dollar", "package", "grid", "list", "columns", "rows", "sidebar", "table", "layout", "expand", "sun", "moon", "star", "bookmark", "flag", "map-pin", "globe", "phone", "printer", "terminal", "log-in", "log-out", "grip", "power", "cloud", "database", "wifi", "panel-right", "minimize", "cut", "paste", "duplicate", "move", "unlink", "crop", "at", "hash", "user-check", "file-plus", "folder-plus", "files", "volume-off", "mic-off", "headphones", "film", "receipt", "percent", "wallet", "monitor", "smartphone", "wifi-off", "layers", "window", "trending-up", "trending-down", "compass", "map", "building", "thumbs-up", "slash", "equal", "box", "truck", "car", "van", "bicycle", "activity", "crosshair", "pin"];
export type DrawnName = (typeof iconNames)[number];
export declare const marks: Record<DrawnName, MarkEl[]>;
/**
 * Optical filled cuts for figures whose line construction is intentionally
 * open. These are silhouettes of the same marks, not a second icon family.
 * Every other mark continues to derive its fill directly from `marks`.
 */
export declare const filledMarks: Partial<Record<DrawnName, MarkEl[]>>;
/** At 12px, two open slots survive rasterization better than three fine cuts. */
export declare const smallFilledMarks: Partial<Record<DrawnName, MarkEl[]>>;
export declare const smallFilledCutouts: FilledCutouts;
/**
 * Negative-space details for the filled family. These are punched through the
 * solid silhouette with an SVG mask, so the detail works on every background
 * and does not depend on light or dark theme colors.
 */
export declare const filledCutouts: FilledCutouts;
export declare const iconAliases: {
    readonly check: {
        readonly name: "copied";
    };
    readonly success: {
        readonly name: "copied";
    };
    readonly "chevron-down": {
        readonly name: "chevron-right";
        readonly rotate: 90;
    };
    readonly "chevron-up": {
        readonly name: "chevron-right";
        readonly rotate: 270;
    };
    readonly x: {
        readonly name: "close";
    };
    readonly settings: {
        readonly name: "sliders";
    };
    readonly gear: {
        readonly name: "cog";
    };
    readonly pencil: {
        readonly name: "edit";
    };
    readonly "panel-left": {
        readonly name: "sidebar";
    };
};
export type IconAlias = keyof typeof iconAliases;
export type IconName = DrawnName | IconAlias;
export type IconGroup = {
    title: string;
    names: IconName[];
};
export declare const iconGroups: IconGroup[];
export declare function resolveIcon(name: IconName): {
    mark: DrawnName;
    rotate?: IconRotate;
};
export declare function iconLabel(name: IconName): string;
