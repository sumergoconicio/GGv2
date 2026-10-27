/**
 * Vlak design tokens: the single source of truth for the design system.
 * CSS custom properties, the token JSON, and the docs site all generate
 * from this file. Tokens ship in @noorddev/vlak and `npx @noorddev/vlak-cli tokens`.
 */
declare const vlakTokens: {
    readonly meta: {
        readonly name: "Vlak";
        readonly description: "A minimal design system for product exploration, built on a 204px module.";
        readonly url: "https://vlak.dev";
    };
    readonly color: {
        readonly light: {
            readonly paper: "#FAF8F2";
            readonly ink: "#1A1A1A";
            readonly gray: "#6B6B6B";
            /** Stronger of two grid inks: Home / About 1px cell-edge cage.
                Same family as --grid-line; not a third hue. */
            readonly divider: "rgba(0,0,0,0.08)";
            /** Fills only (hover, skeleton, muted). Not a gridline. */
            readonly dividerSubtle: "rgba(0,0,0,0.06)";
            /** Quieter of two grid inks: inner-page 204 + Home / About L/R
                box margins. 0.08 caged inner pages; 0.025 was invisible.
                0.04 still reads on paper. */
            readonly gridLine: "rgba(0,0,0,0.04)";
            readonly tableAlt: "rgba(0,0,0,0.02)";
            /** Boundary of a form control. 3:1 against paper (WCAG 1.4.11); hairlines stay decorative. */
            readonly controlBorder: "rgba(0,0,0,0.42)";
            /** Hover fill of a ghost control: paper with 10% ink, solid so edge and fill match. */
            readonly controlFill: "#E4E2DC";
        };
        readonly dark: {
            readonly black: "#0E0C0A";
            readonly white: "#E8E8E8";
            readonly gray: "#949494";
            readonly divider: "rgba(255,255,255,0.10)";
            readonly dividerSubtle: "rgba(255,255,255,0.07)";
            /** Quieter of two grid inks. 0.05 still reads on dark. */
            readonly gridLine: "rgba(255,255,255,0.05)";
            readonly tableAlt: "rgba(255,255,255,0.03)";
            /** 3:1 against black. */
            readonly controlBorder: "rgba(255,255,255,0.38)";
            /** Black with 10% white. */
            readonly controlFill: "#242220";
        };
        /** Ink → paper, the in-between steps. Monochrome: there is no accent. */
        readonly neutralScale: readonly ["#1A1A1A", "#3D3D3D", "#6B6B6B", "#949494", "#C4C2BD", "#E8E8E8", "#FAF8F2"];
        readonly accent: "none; emphasis comes from weight, size, and spacing";
    };
    readonly type: {
        readonly family: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";
        readonly foundry: {
            readonly typeface: "Inter";
            readonly designer: "Rasmus Andersson";
            readonly license: "SIL OFL 1.1";
            readonly url: "https://rsms.me/inter/";
        };
        readonly weights: {
            readonly body: 500;
            readonly heading: 600;
            readonly label: 600;
        };
        readonly bodyLineHeight: 1.45;
        readonly lineHeight: {
            readonly min: 1.2;
            readonly max: 1.45;
        };
        readonly measure: {
            readonly columns: 3;
            readonly px: 592;
            readonly characters: 66;
            readonly minCharacters: 45;
            readonly maxCharacters: 90;
        };
        readonly caseRule: "Never all caps; labels and eyebrows are sentence case.";
        readonly textScale: {
            readonly default: 1;
            readonly steps: readonly [0.9, 1, 1.1, 1.25, 1.4];
            readonly rule: "Reading type only; chrome stays put.";
        };
        readonly scale: readonly [{
            readonly name: "displayXl";
            readonly px: 52;
            readonly weight: 600;
            readonly tracking: "-0.035em";
            readonly lineHeight: 1.05;
        }, {
            readonly name: "display";
            readonly px: 38;
            readonly weight: 600;
            readonly tracking: "-0.03em";
            readonly lineHeight: 1.15;
        }, {
            readonly name: "title";
            readonly px: 22;
            readonly weight: 600;
            readonly tracking: "-0.02em";
            readonly lineHeight: 1.3;
        }, {
            readonly name: "subhead";
            readonly px: 17;
            readonly weight: 500;
            readonly tracking: "-0.01em";
            readonly lineHeight: 1.45;
        }, {
            readonly name: "body";
            readonly px: 15;
            readonly weight: 500;
            readonly tracking: "-0.01em";
            readonly lineHeight: 1.45;
        }, {
            readonly name: "label";
            readonly px: 13;
            readonly weight: 600;
            readonly tracking: "-0.01em";
            readonly lineHeight: 1.3;
        }];
    };
    readonly grid: {
        readonly module: 204;
        readonly column: 184;
        readonly gutter: 20;
        readonly pad: 20;
        readonly snap: "content boxes span whole 204px modules; edges step from grid line to grid line";
        readonly maxModules: 6;
        readonly maxWidth: 1244;
        readonly anchors: {
            readonly rail: 1024;
            readonly wide: 1440;
        };
        readonly mobile: {
            readonly breakpoint: 480;
            readonly columns: 2;
            readonly gutter: 25;
            readonly pad: 25;
            readonly columnWidth: "50vw − 37.5px";
        };
    };
    readonly radius: {
        /**
         * Slight Vlak radius. Same token as the standalone button (`--radius-sm`).
         * Buttons, toggles, boxes, dialogs, sheets, and drawers share this 4px.
         * Not 8–12. Cards are a typography stack (no frame, radius 0). Callouts are
         * hairline, radius 0. `--radius` aliases the button token.
         */
        readonly small: 4;
        /** Alias of `small`. Surfaces that already read `--radius` stay on this family. */
        readonly base: 4;
        /** Page chrome, cards, icon marks, empty, and charts stay square. */
        readonly chrome: 0;
        /** Steve Ruiz innerRadius (circular-corner fit), clamped at 0. */
        readonly concentric: "Steve Ruiz innerRadius, clamped at 0";
        readonly rule: "One token: --radius-sm (4px), the standalone button radius. Toggles share it. Cards are chrome-square (no frame, 0). Callouts are hairline, radius 0. Nested inners follow Steve Ruiz. Chrome stays 0.";
    };
    readonly icons: {
        readonly sizes: readonly [12, 16, 24];
        readonly variants: readonly ["line", "filled"];
        readonly stroke: 1.25;
        readonly strokes: {
            readonly 12: 1;
            readonly 16: 1.25;
            readonly 24: 1.5;
        };
        readonly viewBox: 16;
        readonly center: readonly [8, 8];
        readonly rule: "Line: currentColor strokes use 1px at 12, 1.25px at 16, and 1.5px at 24, with round caps and joins. Filled: solid silhouettes with transparent detail cuts. Draw at 12, 16, or 24; 12px uses simplified fine detail";
    };
    readonly motion: {
        readonly duration: "0.1–0.4s";
        readonly response: "0.1s";
        readonly snappy: "0.2s";
        readonly deliberate: "0.4s";
        /** Compatibility alias for response. */
        readonly snap: "0.1s";
        /** Compatibility alias for snappy transitions. */
        readonly ease: "0.2s";
        /** Confirmation entrances should read as deliberate, at the low end of the range. */
        readonly confirm: "0.3s";
        readonly easing: "cubic-bezier(0.3, 0, 0.2, 1)";
        readonly rule: "A state the user caused may ease, snap with a short curve, or confirm. Entry is not a show. Color and opacity name the change; nothing bounces.";
        readonly reducedMotion: "looping demos and unsolicited entry disabled under prefers-reduced-motion";
    };
    readonly performance: {
        readonly frame: {
            readonly hz120: 8.3;
            readonly hz60: 16.7;
            readonly unit: "ms";
        };
        readonly responseInstant: {
            readonly max: 100;
            readonly unit: "ms";
        };
        readonly thoughtInterruption: {
            readonly at: 1000;
            readonly unit: "ms";
        };
        readonly attentionLoss: {
            readonly at: 10000;
            readonly unit: "ms";
        };
        readonly rule: "A response lands within 100ms. Keep each frame under its refresh-rate budget. At 1s show progress without stealing focus; before 10s explain the wait and preserve the user's place.";
    };
    readonly accessibility: {
        readonly contrast: {
            readonly ordinaryText: 4.5;
            readonly largeText: 3;
            readonly controls: 3;
        };
        readonly touchTarget: {
            readonly width: 44;
            readonly height: 44;
            readonly unit: "px";
        };
        readonly rule: "Ordinary text is at least 4.5:1, large text and control boundaries are at least 3:1, and interactive targets are at least 44px by 44px.";
    };
    readonly breakpoints: {
        readonly mobileGrid: 480;
        readonly mobileLayout: 640;
        readonly rail: 1024;
        readonly wide: 1440;
        readonly cap: 1700;
    };
    /** Stacking scale. Native <dialog> and popover live in the top layer and need none of it. */
    readonly z: {
        readonly raised: 10;
        readonly sticky: 100;
        readonly float: 200;
        readonly overlay: 300;
        readonly toast: 400;
        readonly rule: "raised: a handle or thumb over its track. sticky: pinned chrome. float: menus, tooltips, hover cards, chart tooltips. overlay: the fixed fallback of a panel that has no top layer. toast: above everything.";
    };
    /** A 44px minimum on every viewport. Phone increases field type to avoid zoom. */
    readonly control: {
        readonly desktop: {
            readonly hit: 44;
            readonly height: 44;
            readonly font: 14;
            readonly label: 12;
        };
        readonly phone: {
            readonly hit: 44;
            readonly height: 44;
            readonly font: 16;
            readonly label: 15;
        };
        readonly breakpoint: 640;
    };
};
type VlakTokens = typeof vlakTokens;

/** Shared guidance for people and agents composing specialised software. */
declare const domainCollections: readonly [{
    readonly name: "civic";
    readonly title: "Civic";
    readonly description: "Components for public services, identity records, tax summaries, benefits, and applications.";
    readonly groups: readonly [{
        readonly title: "Identity and obligations";
        readonly description: "Keep the record holder, issuer, reporting period, and supplied status together.";
        readonly components: readonly ["identity-document", "tax-summary"];
    }, {
        readonly title: "Access to services";
        readonly description: "Explain a programme, follow an application, and collect the required evidence with explicit submission states.";
        readonly components: readonly ["benefit-program", "application-status", "evidence-checklist"];
    }];
    readonly contracts: readonly [{
        readonly title: "Supply policy decisions";
        readonly description: "The service supplies eligibility assessments, amounts, deadlines, and decisions. Components do not calculate tax or determine entitlement to a subsidy.";
    }, {
        readonly title: "Display only the identity detail needed";
        readonly description: "Pass a display-safe masked identifier. Keep full identity records, document verification, and access rules in the host application.";
    }, {
        readonly title: "Separate a request from its result";
        readonly description: "Evidence actions request work from the application. Show pending while saving, confirmed receipt after success, and an actionable error when it fails.";
    }, {
        readonly title: "Preserve the public record";
        readonly description: "Supply the authority, reference, period, dates, and reasons that belong to the record. Missing, unavailable, and zero amounts retain distinct meanings. Examples use fictional services and records.";
    }];
}, {
    readonly name: "science";
    readonly title: "Science";
    readonly description: "Components for measurements, physical quantities, microscopy acquisition, sequence inspection, experimental procedures, and spectra.";
    readonly groups: readonly [{
        readonly title: "Measurements and quantities";
        readonly description: "Keep a measured value with its unit, uncertainty, and source. Capture quantities without silently converting them.";
        readonly components: readonly ["measurement-value", "quantity-field"];
    }, {
        readonly title: "Experimental work";
        readonly description: "Select a sample position, follow an experimental run, and inspect a spectrum alongside the underlying values.";
        readonly components: readonly ["experiment-run", "spectrum-plot"];
    }, {
        readonly title: "Microscopy";
        readonly description: "Review named stage positions in an explicit coordinate frame, navigate supplied stacks and edit acquisition sequences with declared units.";
        readonly components: readonly ["stage-position-list", "stack-navigator", "acquisition-sequencer"];
    }, {
        readonly title: "Genomics";
        readonly description: "Enter a genomic region, inspect supplied sequence alignments and compare exact coverage counts.";
        readonly components: readonly ["genomic-region-field", "sequence-alignment", "coverage-inspector"];
    }];
    readonly contracts: readonly [{
        readonly title: "Keep coordinate conventions explicit";
        readonly description: "Genomic regions and supplied loci use 1-based inclusive coordinates. Alignment selections use 1-based aligned columns, including supplied gap columns. Stack values are zero-based indexes into supplied positions; the displayed ordinal starts at one. Stage positions retain immutable identifiers, supplied frame identity and per-axis units; missing coordinates are not zero. The host owns coordinate conversion and reference identity.";
    }, {
        readonly title: "Preserve measurement meaning";
        readonly description: "Supply the unit, uncertainty label, precision, and provenance that belong to the measurement. A missing value is distinct from zero. The application owns significant-figure rules and scientific interpretation.";
    }, {
        readonly title: "Convert explicitly";
        readonly description: "QuantityField changes the selected unit and amount independently. It does not convert units. Perform validated conversion in the application and update the complete controlled value together.";
    }, {
        readonly title: "Keep instrument work outside the view";
        readonly description: "Stage selection requires controlled value and onValueChange props. Inclusion, order, removal and experiment actions request changes; the host supplies accepted records. Selection never confirms stage motion or acquired frames. The application controls instrument access, execution, persistence and confirmed step status.";
    }, {
        readonly title: "Show the evidence behind a plot";
        readonly description: "Supply finite points, axis labels, units, and any peak annotations. SpectrumPlot provides a data table and does not identify substances, fit peaks, or infer scientific conclusions.";
    }];
}, {
    readonly name: "creative";
    readonly title: "Creative tools";
    readonly description: "Controls for professional audio, video, and design workspaces.";
    readonly groups: readonly [{
        readonly title: "Audio";
        readonly description: "Read channel levels, adjust gain and pan, and control a named parameter with native keyboard input.";
        readonly components: readonly ["audio-meter", "channel-strip", "parameter-knob", "patchbay"];
    }, {
        readonly title: "Video";
        readonly description: "Enter a timecode, select a clip, seek through a sequence, and manage render jobs.";
        readonly components: readonly ["timecode-field", "clip-timeline", "render-queue"];
    }, {
        readonly title: "Design";
        readonly description: "Select, hide, and lock layers; inspect a colour; and edit independent or linked spacing values.";
        readonly components: readonly ["layer-stack", "color-inspector", "spacing-control"];
    }, {
        readonly title: "Typography";
        readonly description: "Compare supplied baseline kerning with per-pair draft offsets in declared font units.";
        readonly components: readonly ["kerning-pair-editor"];
    }];
    readonly contracts: readonly [{
        readonly title: "Respect routing and typography context";
        readonly description: "Patchbay edits a matrix of compatible supplied source and destination ports; the host supplies additional block reasons and confirmed routing. KerningPairEditor keeps missing baseline values distinct from zero and previews only the supplied glyph pair with an additional offset, without rewriting the font or its shaping tables.";
    }, {
        readonly title: "Connect controls to an engine";
        readonly description: "Callbacks express edits and requested actions. The host application owns audio processing, playback, timeline editing, undo history, and render execution. Demo controls update local state.";
    }, {
        readonly title: "Declare units and time bases";
        readonly description: "Audio meter levels use the supplied decibel scale. ClipTimeline uses an explicit seconds or frames unit. TimecodeField supports integer non-drop frame rates from 1 to 99; fractional and drop-frame workflows require a different timecode implementation.";
    }, {
        readonly title: "Keep missing data visible";
        readonly description: "Missing meter levels, unknown job progress, unset colours, and empty spacing values remain distinct from zero. Pass confirmed render status back after cancel or retry actions complete.";
    }, {
        readonly title: "Support precise keyboard edits";
        readonly description: "Parameter controls retain native input semantics. Timeline clips have separate accessible selection controls, and layer visibility and locking use named buttons. Geometry and swatches accompany readable values.";
    }];
}, {
    readonly name: "engineering";
    readonly title: "Industrial";
    readonly description: "Controls for operator alarms and machining coordinate records.";
    readonly groups: readonly [{
        readonly title: "Industrial operations";
        readonly description: "Review alarm lifecycle fields and prepare fixture offsets alongside actual controller readings.";
        readonly components: readonly ["alarm-panel", "work-offset-panel"];
    }];
    readonly contracts: readonly [{
        readonly title: "Preserve independent states";
        readonly description: "Alarm condition, acknowledgement and shelving are independent. Unknown states remain distinct from inactive states.";
    }, {
        readonly title: "Separate drafts from controller readings";
        readonly description: "WorkOffsetPanel shows host-supplied machine and work coordinates, active system and offset state. Changing a draft does not infer new positions, activate another system or zero suspended offsets. The host supplies offsets for each selected system.";
    }, {
        readonly title: "Confirm actions in the host";
        readonly description: "Callbacks request alarm actions or an offset update. The application owns permissions, controller access, machine interlocks, audit records, persistence and confirmed results. These examples use local state and supplied fictional readings.";
    }];
}, {
    readonly name: "geospatial";
    readonly title: "Geospatial";
    readonly description: "Controls for coordinate reference assignment, datum transformation selection and raster band configuration.";
    readonly groups: readonly [{
        readonly title: "Coordinates and transformations";
        readonly description: "Keep coordinate values, axis order and reference identity together; select a supplied transformation with its accuracy and grid availability.";
        readonly components: readonly ["coordinate-reference-field", "datum-transform-picker"];
    }, {
        readonly title: "Raster display";
        readonly description: "Assign source bands to display channels and edit explicit stretch bounds without modifying source pixels.";
        readonly components: readonly ["raster-band-mixer"];
    }];
    readonly contracts: readonly [{
        readonly title: "Assignment is distinct from reprojection";
        readonly description: "Changing the selected reference leaves entered coordinates unchanged. The host owns validated reprojection, axis-order conversion, reference lookup and any transformation grid files.";
    }, {
        readonly title: "Explain unavailable transformations";
        readonly description: "Supply source and destination references, candidate operations, accuracy labels, area-of-use context and grid availability. Missing prerequisites remain visible with reasons rather than silently selecting a fallback.";
    }, {
        readonly title: "Keep rendering in the host";
        readonly description: "RasterBandMixer emits band and stretch configuration. The application loads pixels, handles no-data values, computes statistics and renders the image. Unit changes and displayed limits never imply a conversion of source values.";
    }];
}, {
    readonly name: "robotics";
    readonly title: "Robotics";
    readonly description: "Controls for robot joint targets, recorded poses and mission plans.";
    readonly groups: readonly [{
        readonly title: "State and targets";
        readonly description: "Inspect independently reported poses and joint readings while editing explicit target values.";
        readonly components: readonly ["joint-panel", "robot-pose"];
    }, {
        readonly title: "Mission planning";
        readonly description: "Order supplied mission steps and request actions without inventing execution status.";
        readonly components: readonly ["robot-mission-queue"];
    }];
    readonly contracts: readonly [{
        readonly title: "Keep coordinate frames explicit";
        readonly description: "Every pose belongs to a supplied frame, timestamp and orientation representation. Components display exact values and do not transform frames, normalize quaternions or infer an orientation convention.";
    }, {
        readonly title: "Keep reported state separate from targets";
        readonly description: "Joint targets do not update reported positions. The application supplies joint limits, accepts or rejects target requests and returns confirmed state. Missing limits or readings remain visible.";
    }, {
        readonly title: "Execute in the controller";
        readonly description: "The host owns robot connectivity, permissions, motion planning, collision checks, interlocks and mission execution. Reordering a plan or requesting an action is not evidence that a robot moved.";
    }];
}, {
    readonly name: "electronics";
    readonly title: "Circuitry";
    readonly description: "Controls for board pad inspection, design-rule results and assembly variants.";
    readonly groups: readonly [{
        readonly title: "Board inspection";
        readonly description: "Keep pad identity, nets, layers and geometry together; inspect supplied rule violations with their recorded status.";
        readonly components: readonly ["pad-inspector", "design-rule-results"];
    }, {
        readonly title: "Assembly variants";
        readonly description: "Inspect population, bill-of-materials inclusion and placement inclusion independently for every reference and variant.";
        readonly components: readonly ["assembly-variant-matrix"];
    }];
    readonly contracts: readonly [{
        readonly title: "Preserve independent assembly flags";
        readonly description: "Population, bill-of-materials inclusion and placement inclusion are separate supplied flags. An unspecified state is not false and no flag silently rewrites another.";
    }, {
        readonly title: "Read geometry without inferring connectivity";
        readonly description: "Pad numbers, net assignments, layer names, shapes and dimensions come from the board model. Missing data remains explicit; these views do not run a netlist, router or geometry engine.";
    }, {
        readonly title: "Keep rule results tied to their source";
        readonly description: "The host provides violation severity, status, location and available resolution actions. A resolve request does not establish that a board passes its rules; return confirmed results after the board model changes and checks rerun.";
    }];
}, {
    readonly name: "microbiology";
    readonly title: "Microbiology";
    readonly description: "Components for well plates, supplied colony annotations and culture observation records.";
    readonly groups: readonly [{
        readonly title: "Plates and annotations";
        readonly description: "Select a supplied well or colony marker while retaining exact recorded sample and source-count context.";
        readonly components: readonly ["well-plate", "colony-plate"];
    }, {
        readonly title: "Culture observations";
        readonly description: "Keep sample identity, supplied medium and condition labels, dated observations and recording actions together.";
        readonly components: readonly ["culture-log"];
    }];
    readonly contracts: readonly [{
        readonly title: "Distinguish annotations from source counts";
        readonly description: "A colony marker is an annotation, not a detected organism. The supplied source count remains separate from marker totals. Missing coordinates or counts are not zero, and no segmentation or colony detection runs in the view.";
    }, {
        readonly title: "Preserve observation provenance";
        readonly description: "The host supplies sample and culture identity, observation timestamps, status and conditions. Sorting requires explicit timestamp offsets; unknown times remain explicit. These components do not infer contamination, species or culture outcomes.";
    }, {
        readonly title: "Record through the host";
        readonly description: "Actions request application work. The host owns recording, audit history and confirmed status. Example cultures and conditions are supplied display records, not laboratory procedures or recommendations.";
    }];
}];

/** Shared composition guidance for the health docs and agent-readable guide. */
declare const healthWorkflows: readonly [{
    readonly title: "Readings and observations";
    readonly description: "Keep a reading with its unit, source, collection time, and result status. Compare only against the reference interval supplied with that result.";
    readonly components: readonly ["health-metric", "reference-range", "lab-results", "symptom-diary"];
}, {
    readonly title: "Daily wellbeing";
    readonly description: "Collect a check-in, record a routine, review a sleep period, and follow personal goals as a bar or concentric rings. Keep unrecorded days and gaps visible.";
    readonly components: readonly ["check-in", "habit-tracker", "sleep-timeline", "activity-goal", "activity-rings"];
}, {
    readonly title: "Care workflows";
    readonly description: "Keep patient identity and recorded context together. Show the supplied medication schedule, appointment details, and care tasks with explicit action states.";
    readonly components: readonly ["patient-banner", "medication-schedule", "appointment-card", "care-plan"];
}];
declare const healthDataContract: readonly [{
    readonly title: "Preserve missing information";
    readonly description: "Zero is a reading. Missing, pending, unavailable, skipped, and not recorded describe different states. Pass the state explicitly and retain the original value.";
}, {
    readonly title: "Keep context with a value";
    readonly description: "Supply units, source, collection time, display labels, and the relevant time zone. Format dates in the application so the server and browser show the same appointment or measurement time.";
}, {
    readonly title: "Supply clinical meaning";
    readonly description: "The application supplies result flags, reference intervals, medication instructions, and care priorities. These components present that information; they do not calculate diagnoses, recommend doses, or classify a person from a reading.";
}, {
    readonly title: "Confirm recorded actions";
    readonly description: "Medication and care-plan callbacks express a requested action. Keep the item pending while saving, show the confirmed state after success, and preserve the prior record when saving fails.";
}, {
    readonly title: "Use text as well as geometry";
    readonly description: "Status is written in words. Ranges and timelines include text equivalents. Check-ins use named native choices, and controls retain keyboard access and 44px targets.";
}, {
    readonly title: "Connect the product boundary";
    readonly description: "The host application owns identity, access control, persistence, audit history, and any health-record integration. Examples use fictional records and local demonstration state.";
}];

/** The exact inner circle shares its outer circle's center. No iterative fitting is needed. */
interface InnerRadiusOptions {
    /** @deprecated Retained for source compatibility; the exact solution needs no learning rate. */
    lr?: number;
    /** @deprecated Retained for source compatibility; the exact solution needs no iterations. */
    epochs?: number;
}
declare function innerRadius(outerRadius: number, padding: number, _options?: InnerRadiusOptions): number;
/** Nested inner radius: Steve’s innerRadius, clamped at 0. */
declare function concentricInner(outer: number, padding: number): number;
/** Outer radius that keeps `inner` concentric across `padding`. */
declare function concentricOuter(inner: number, padding: number): number;
/**
 * CSS closed form of innerRadius for a circular corner: the fit converges
 * to max(0, outer − padding). Surfaces set --rs-out and --rs-gap.
 */
declare const concentricInnerCss = "max(0px, calc(var(--rs-out) - var(--rs-gap)))";

/**
 * Vlak registry schema: the typed contract every component entry
 * satisfies. The registry drives everything downstream: the docs site,
 * the CLI, the generated registry JSON, and the integrity tests.
 */
declare const vlakCategories: readonly ["actions", "forms", "navigation", "feedback", "surfaces", "content", "icons", "charts", "patterns", "ios", "android", "ai", "health", "civic", "science", "creative", "engineering", "geospatial", "robotics", "electronics", "microbiology"];
type VlakCategory = (typeof vlakCategories)[number];
interface VlakComponent {
    /** Kebab-case identifier, unique across the registry. */
    name: string;
    /** Sentence-case display name. */
    title: string;
    description: string;
    category: VlakCategory;
    /** Every CSS class this component introduces (canonical rs- names). */
    classes: string[];
    /** CSS source files, relative to packages/core/css/. Empty when StyleX owns the leaf. */
    css: string[];
    /** React source file, relative to packages/react/src/. Absent for CSS-only entries. */
    react?: string;
    /** Optional renderer entry point. Omitted for components available from the root React package. */
    reactImport?: string;
    /** Additional npm packages required by this optional renderer or adapter. */
    dependencies?: string[];
    /** Additional stylesheets required by an optional rendering engine. */
    styles?: string[];
    /** Other registry components this one's snippet or styles rely on. */
    registryDependencies?: string[];
    /** Minimal HTML snippet in the house style. */
    snippet: string;
    /** Omit from the public catalog, docs rail, and home kit count. Keep CSS, Nest, and math. */
    hidden?: boolean;
    /** React usage example: imports from "@noorddev/vlak-react" plus the JSX. Shown on the docs page, by the CLI, and to agents. */
    example?: string;
    /** When to reach for it, and when not to. One short sentence per item. */
    usage?: {
        use: string[];
        avoid: string[];
    };
    /** Keyboard interactions, in the order a user meets them. */
    keyboard?: {
        keys: string;
        does: string;
    }[];
    /** Accessibility notes: roles, names, focus, what the platform provides. */
    a11y?: string[];
    /** Names other systems use for the same thing (shadcn/ui, Radix, Material), for search and agents. */
    aliases?: string[];
}
/** One prop of an exported React component, extracted from its types. */
interface VlakProp {
    name: string;
    type: string;
    required: boolean;
    default?: string;
    description?: string;
}
/** One exported React symbol of a registry component. */
interface VlakExport {
    name: string;
    kind: "component" | "hook" | "function" | "type";
    description?: string;
    /** Native element or attribute set the props extend, e.g. "ButtonHTMLAttributes<HTMLButtonElement>". */
    extends?: string;
    /** Element a forwarded ref resolves to, e.g. "HTMLButtonElement". Absent when the component forwards no ref. */
    ref?: string;
    props: VlakProp[];
}
/** Shape of packages/core/props/props.json, generated from the React sources. */
interface VlakPropsJson {
    version: string;
    components: Record<string, {
        exports: VlakExport[];
    }>;
}
/**
 * Structural validation of a registry. Returns a list of problems;
 * an empty list means the registry is well-formed. File-existence and
 * CSS-parity checks live in the core test suite, which can touch disk.
 */
declare function validateRegistry(components: readonly VlakComponent[]): string[];

/**
 * Vlak component registry: the interface kit as data. This is the
 * single source the docs site, the CLI, the generated registry JSON,
 * and the integrity tests all read from. Each entry names the CSS
 * classes involved, the source files that implement it, and carries a
 * minimal markup snippet in the house style.
 */

declare const vlakComponents: VlakComponent[];
/** Public catalog. Hidden entries stay in `vlakComponents` for CSS, Nest, and math. */
declare const catalogComponents: VlakComponent[];

export { type InnerRadiusOptions, type VlakCategory, type VlakComponent, type VlakExport, type VlakProp, type VlakPropsJson, type VlakTokens, catalogComponents, concentricInner, concentricInnerCss, concentricOuter, domainCollections, healthDataContract, healthWorkflows, innerRadius, validateRegistry, vlakCategories, vlakComponents, vlakTokens };
