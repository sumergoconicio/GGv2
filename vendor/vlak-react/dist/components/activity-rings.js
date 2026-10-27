"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const defaultEncouragement = ["Small steps still count.", "Find a rhythm that feels like you.", "A little care goes a long way.", "There is room to move at your own pace.", "Every day can look a little different."];
const ringBuild = "xe9a81w-B";
const encouragementIn = "x1ogady4-B";
const styles = {
  root: {
    kogj98: "x1ghz6dp",
    kzqmXN: "xh8yej3",
    k7Eaqz: "xeuugli",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  caption: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x1pha0wt",
    kjj79g: "x1qughib",
    kOIVth: "x4upkte",
    k1K539: "xyi6m4r",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    $$css: true
  },
  body: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kGNEyG: "x6s0dn4",
    kOIVth: "xnv70s6",
    $$css: true
  },
  graphic: {
    k1xSpc: "x1lliihq",
    kmuXW: "x2lah0s",
    kzqmXN: "x1r3lusj",
    kZKoxP: "x1xenkam",
    ks0D6T: "x193iq5w",
    kVQacm: "x1rea2x4",
    $$css: true
  },
  track: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "xzb9byy xc8a8jt",
    $$css: true
  },
  arc: {
    kDwRjp: "xbh8q5q",
    kjVXCG: "xbu9li4 xz3j28",
    kU5bRw: "x1owpc8m",
    kAXs8y: "x1kzknox",
    $$css: true
  },
  motion: {
    kKVMdj: "x1ukjupo xmmch59",
    k44tkh: "x1q3qbx4",
    kyAemX: "xa0mk88",
    kWV6AL: "xskzprw",
    k1ekBW: "xxnu56j",
    kIyJzY: "x97pzxe x1y25mgo",
    kAMwcw: "x1pbvl4h",
    $$css: true
  },
  waiting: {
    k5bvn2: "xorstpt",
    $$css: true
  },
  encouragement: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "x13z6uf9",
    keoZOQ: "xwg69jb",
    kAzted: "x1wszdd",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  encouragementText: {
    kogj98: "x1ghz6dp",
    kUk6DE: "x12lumcd",
    k7Eaqz: "xeuugli",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    kHjlTd: "xj0a0fe",
    kKVMdj: "x28kppu xmmch59",
    k44tkh: "x4afe7t",
    kyAemX: "xa3vuyk",
    $$css: true
  },
  pause: {
    k1xSpc: "x3nfvp2",
    kGNEyG: "x6s0dn4",
    kjj79g: "xl56j7k",
    kmuXW: "x2lah0s",
    k7Eaqz: "xtp0tkc",
    kAzted: "x1wszdd",
    kmVPX3: "x1717udv",
    kWkggS: "xjbqb8w",
    kMwMTN: "x1ixqp2s",
    kMzoRj: "xc342km",
    kaIpWk: "xkrxur",
    kkrTdU: "x1ypdohk",
    kMeerF: "x784prv",
    k3XXqK: "x9v5kkp",
    kjBf7l: "xqbrbdq",
    kInvED: "x1hl8ikr",
    $$css: true
  },
  pauseIcon: {
    kzqmXN: "x1xvt488",
    kZKoxP: "xf08kfj",
    kDwRjp: "x117rol3",
    $$css: true
  },
  list: {
    kH6xsr: "x3ct3a4",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8fetqu",
    kUk6DE: "x3daqg1",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  item: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x176teg",
    kGNEyG: "x1pha0wt",
    k1C7PZ: "x1s07kcz",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  index: {
    kGuDYH: "xboafo0",
    kMwMTN: "x1ixqp2s",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  label: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "xk50ysn",
    $$css: true
  },
  value: {
    kogj98: "x1ublr25",
    kGuDYH: "x1603h9y",
    kcqcaj: "xss6m8b",
    kb6lSQ: "x72az59",
    $$css: true
  },
  target: {
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "x1i21sxh",
    $$css: true
  },
  note: {
    kogj98: "x12yysl2",
    kGuDYH: "xboafo0",
    k63SB2: "xo1l8bm",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  description: {
    kogj98: "xtrlojg",
    kGuDYH: "xkpwil5",
    kMwMTN: "x1ixqp2s",
    ks0D6T: "x1qp14f0",
    $$css: true
  },
  progress: {
    kVAEAm: "x10l6tqk",
    kzqmXN: "x1i1rx1s",
    kZKoxP: "xjm9jq1",
    kmVPX3: "x1717udv",
    kogj98: "xkdpibf",
    kVQacm: "xb3r6kr",
    kz4h6p: "x1hyvwdk",
    khDVqt: "xuxw1ft",
    kMzoRj: "xc342km",
    $$css: true
  }
};

/** Concentric personal-goal progress, with a complete named record for each ring. */
export const ActivityRings = /*#__PURE__*/React.forwardRef(function ActivityRings({
  label,
  goals,
  description,
  animate = true,
  encouragement = defaultEncouragement,
  className,
  style,
  ...props
}, ref) {
  const figureRef = React.useRef(null);
  const mergedRef = useMergedRefs(ref, figureRef);
  const [entered, setEntered] = React.useState(false);
  const [inView, setInView] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  // A stable content key keeps frequent goal updates from resetting the timer.
  const messageKey = JSON.stringify(encouragement === false ? [] : [...new Set(encouragement.map(line => line.trim()).filter(Boolean))]);
  const messages = React.useMemo(() => JSON.parse(messageKey), [messageKey]);
  const [message, setMessage] = React.useState(messages[0] ?? "");
  const line = messages.includes(message) ? message : messages[0];
  const hasGoals = goals.length > 0;
  React.useEffect(() => {
    const element = figureRef.current;
    if (!element) return;
    if (typeof IntersectionObserver === "undefined") {
      setEntered(true);
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      const shown = entries.some(entry => entry.isIntersecting);
      setInView(shown);
      if (shown) setEntered(true);
    }, {
      threshold: 0.15
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media?.matches ?? false);
    const updateVisibility = () => setVisible(document.visibilityState !== "hidden");
    updateMotion();
    updateVisibility();
    media?.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      media?.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  React.useEffect(() => {
    if (!hasGoals || messages.length < 2 || paused || reducedMotion || !visible || !inView) return;
    const timer = window.setInterval(() => {
      const random = Math.random();
      setMessage(previous => {
        const choices = messages.filter(candidate => candidate !== (messages.includes(previous) ? previous : messages[0]));
        return choices[Math.floor(random * choices.length)];
      });
    }, 10000);
    return () => window.clearInterval(timer);
  }, [hasGoals, messages, paused, reducedMotion, visible, inView]);
  const id = React.useId();
  const root = rs(["rs-activity-rings", className], styles.root);
  const caption = rs(["rs-activity-rings-caption"], styles.caption);
  const body = rs(["rs-activity-rings-body"], styles.body);
  const graphic = rs(["rs-activity-rings-graphic"], styles.graphic);
  const track = rs(["rs-activity-rings-track"], styles.track);
  const arc = rs(["rs-activity-rings-arc", animate && "rs-activity-rings-motion", animate && !entered && "rs-activity-rings-waiting"], styles.arc, animate && styles.motion, animate && !entered && styles.waiting);
  const encouragementStyle = rs(["rs-activity-rings-encouragement"], styles.encouragement);
  const encouragementText = rs(["rs-activity-rings-encouragement-text"], styles.encouragementText);
  const pause = rs(["rs-activity-rings-pause"], styles.pause);
  const pauseIcon = rs(["rs-activity-rings-pause-icon"], styles.pauseIcon);
  const list = rs(["rs-activity-rings-list"], styles.list);
  const item = rs(["rs-activity-rings-item"], styles.item);
  const indexStyle = rs(["rs-activity-rings-index"], styles.index);
  const labelStyle = rs(["rs-activity-rings-label"], styles.label);
  const valueStyle = rs(["rs-activity-rings-value"], styles.value);
  const targetStyle = rs(["rs-activity-rings-target"], styles.target);
  const note = rs(["rs-activity-rings-note"], styles.note);
  const descriptionStyle = rs(["rs-activity-rings-description"], styles.description);
  const progress = rs(["rs-activity-rings-progress"], styles.progress);
  const readings = goals.map(goal => {
    const recorded = goal.current != null && Number.isFinite(goal.current) && goal.current >= 0;
    const targeted = goal.target != null && Number.isFinite(goal.target) && goal.target > 0;
    return {
      ...goal,
      recorded,
      targeted,
      fraction: recorded && targeted ? Math.min(1, goal.current / goal.target) : null
    };
  });
  const drawable = readings.length > 0 && readings.length <= 6;
  const step = readings.length <= 3 ? 22 : 13;
  const strokeWidth = readings.length <= 3 ? 14 : 8;
  return /*#__PURE__*/_jsxs("figure", {
    ...props,
    ref: mergedRef,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("figcaption", {
      ...caption,
      children: [label, drawable && readings.length > 1 && /*#__PURE__*/_jsx("span", {
        ...note,
        children: "Outer to inner"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...body,
      children: [drawable && /*#__PURE__*/_jsx("svg", {
        ...graphic,
        viewBox: "0 0 200 200",
        "aria-hidden": "true",
        focusable: "false",
        children: readings.map((goal, index) => /*#__PURE__*/_jsxs("g", {
          transform: "rotate(-90 100 100)",
          children: [/*#__PURE__*/_jsx("circle", {
            ...track,
            cx: "100",
            cy: "100",
            r: 88 - index * step,
            strokeWidth: strokeWidth,
            strokeDasharray: goal.fraction == null ? "2 4" : undefined
          }), goal.fraction != null && goal.fraction > 0 && /*#__PURE__*/_jsx("circle", {
            ...arc,
            cx: "100",
            cy: "100",
            r: 88 - index * step,
            strokeWidth: strokeWidth,
            pathLength: "100",
            strokeDasharray: "100 100",
            strokeDashoffset: 100 - goal.fraction * 100,
            style: {
              ...arc.style,
              ...(animate ? {
                animationDelay: `${index * 100}ms`
              } : {})
            }
          })]
        }, goal.id))
      }), readings.length > 0 ? /*#__PURE__*/_jsx("ol", {
        ...list,
        "aria-label": drawable ? `${label}, outer ring first` : `${label} goals`,
        children: readings.map((goal, index) => /*#__PURE__*/_jsxs("li", {
          ...item,
          children: [/*#__PURE__*/_jsx("span", {
            ...indexStyle,
            "aria-hidden": "true",
            children: String(index + 1).padStart(2, "0")
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("p", {
              ...labelStyle,
              children: goal.label
            }), goal.recorded ? /*#__PURE__*/_jsxs("p", {
              ...valueStyle,
              children: [goal.current, " ", /*#__PURE__*/_jsx("span", {
                ...targetStyle,
                children: goal.targeted ? `of ${goal.target} ${goal.unit}` : goal.unit
              })]
            }) : /*#__PURE__*/_jsx("p", {
              ...note,
              children: goal.current == null ? "No activity recorded" : "Activity unavailable"
            }), !goal.targeted && /*#__PURE__*/_jsx("p", {
              ...note,
              children: goal.target == null ? "No goal set" : "Goal unavailable"
            }), goal.recorded && goal.targeted && /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsxs("progress", {
                ...progress,
                max: goal.target,
                value: Math.min(goal.current, goal.target),
                "aria-label": drawable ? `${goal.label}, ring ${index + 1}` : goal.label,
                "aria-valuetext": `${goal.current} of ${goal.target} ${goal.unit}`,
                "aria-describedby": description != null ? `${id}-description` : undefined,
                children: [goal.current, " of ", goal.target, " ", goal.unit]
              }), goal.current >= goal.target && /*#__PURE__*/_jsx("p", {
                ...note,
                children: goal.current > goal.target ? "Goal exceeded" : "Goal reached"
              })]
            })]
          })]
        }, goal.id))
      }) : /*#__PURE__*/_jsx("p", {
        ...note,
        children: "No activity goals supplied"
      })]
    }), readings.length > 6 && /*#__PURE__*/_jsx("p", {
      ...descriptionStyle,
      children: "The ring view supports up to six goals. All supplied goals are listed."
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...descriptionStyle,
      id: `${id}-description`,
      children: description
    }), hasGoals && line && /*#__PURE__*/_jsxs("div", {
      ...encouragementStyle,
      children: [/*#__PURE__*/_jsx("p", {
        ...encouragementText,
        "aria-live": "off",
        children: line
      }, line), messages.length > 1 && !reducedMotion && /*#__PURE__*/_jsx("button", {
        ...pause,
        type: "button",
        "aria-label": paused ? "Resume encouragement" : "Pause encouragement",
        title: paused ? "Resume encouragement" : "Pause encouragement",
        onClick: () => setPaused(current => !current),
        children: /*#__PURE__*/_jsx("svg", {
          ...pauseIcon,
          viewBox: "0 0 16 16",
          "aria-hidden": "true",
          focusable: "false",
          children: paused ? /*#__PURE__*/_jsx("path", {
            d: "M4 2L13 8L4 14Z"
          }) : /*#__PURE__*/_jsx("path", {
            d: "M4 3H6V13H4ZM10 3H12V13H10Z"
          })
        })
      })]
    })]
  });
});
//# sourceMappingURL=activity-rings.js.map
