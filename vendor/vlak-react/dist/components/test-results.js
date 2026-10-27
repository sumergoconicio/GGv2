"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Badge } from "./badge.js";
import { Button } from "./button.js";
import { CodeBlock } from "./code-block.js";
import { Collapsible } from "./collapsible.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kMwMTN: "x1gney9c",
    kWkggS: "xhpg8l3",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  header: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    kmVPX3: "x1uz70x1",
    kt9PQ7: "xcv4u0r",
    kfdmCh: "x1q0q8m5",
    kL6WhQ: "x16mxmts",
    $$css: true
  },
  title: {
    k63SB2: "x1s688f",
    $$css: true
  },
  summary: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kGNEyG: "x6s0dn4",
    kcqcaj: "xss6m8b",
    $$css: true
  },
  progress: {
    kzqmXN: "xh8yej3",
    kZKoxP: "x164u9eo",
    keaTxX: "x12r28v4",
    $$css: true
  },
  content: {
    kmVPX3: "x1xplop1",
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  list: {
    kB88ic: "xe8uvvx",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    $$css: true
  },
  test: {
    k8WAf4: "xo0yzjp",
    kEafiO: "x1ro6g4h",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kMwMTN: "x1gney9c",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  line: {
    k1xSpc: "x78zum5",
    kwnvtZ: "x1a02dak",
    kOIVth: "x13z6uf9",
    kGNEyG: "x6s0dn4",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  name: {
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    kUk6DE: "x12lumcd",
    $$css: true
  },
  note: {
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  error: {
    kogj98: "x1oqdnn1",
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};
function durationLabel(milliseconds) {
  const ms = Number.isFinite(milliseconds) ? Math.max(0, milliseconds) : 0;
  return ms < 1000 ? `${Math.round(ms)} ms` : `${(ms / 1000).toFixed(2)} s`;
}
function TestRow({
  test,
  suite,
  onRetry
}) {
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState("");
  const locked = React.useRef(false);
  const request = React.useRef(0);
  // biome-ignore lint/correctness/useExhaustiveDependencies: A new result invalidates the previous retry callback.
  React.useEffect(() => {
    request.current++;
    locked.current = false;
    setPending(false);
    setError("");
    return () => {
      request.current++;
    };
  }, [test.status, test.error, test.stack]);
  const retry = async () => {
    if (!onRetry || locked.current) return;
    locked.current = true;
    const id = ++request.current;
    setPending(true);
    setError("");
    try {
      await onRetry(test, suite);
    } catch {
      if (id === request.current) setError("Retry failed. Try again.");
    } finally {
      if (id === request.current) {
        locked.current = false;
        setPending(false);
      }
    }
  };
  const row = rs(["rs-test-results-test"], styles.test);
  const line = rs(["rs-test-results-line"], styles.line);
  const name = rs(["rs-test-results-name"], styles.name);
  const note = rs(["rs-test-results-note"], styles.note);
  const errorStyle = rs(["rs-test-results-error"], styles.error);
  return /*#__PURE__*/_jsxs("li", {
    ...row,
    children: [/*#__PURE__*/_jsxs("div", {
      ...line,
      children: [/*#__PURE__*/_jsx(Badge, {
        variant: test.status === "passed" ? "solid" : "muted",
        children: test.status
      }), /*#__PURE__*/_jsx("span", {
        ...name,
        children: test.name
      }), test.duration != null && /*#__PURE__*/_jsx("span", {
        ...note,
        children: durationLabel(test.duration)
      }), test.status === "failed" && onRetry && /*#__PURE__*/_jsx(Button, {
        type: "button",
        variant: "subtle",
        disabled: pending,
        "aria-label": `Retry ${test.name}`,
        onClick: () => {
          void retry();
        },
        children: pending ? "Retrying…" : "Retry"
      })]
    }), (test.error || test.stack) && /*#__PURE__*/_jsxs(Collapsible, {
      title: `Failure details for ${test.name}`,
      defaultOpen: test.status === "failed",
      children: [test.error && /*#__PURE__*/_jsx("p", {
        ...errorStyle,
        children: test.error
      }), test.stack && /*#__PURE__*/_jsx(CodeBlock, {
        code: test.stack,
        language: "Stack trace"
      })]
    }), /*#__PURE__*/_jsx("span", {
      ...note,
      role: "status",
      children: error || (pending ? "Retry requested…" : "")
    })]
  });
}

/** Test hierarchy and derived totals, with runner-owned status and retry results. */
export const TestResults = /*#__PURE__*/React.forwardRef(function TestResults({
  suites,
  title = "Test results",
  duration,
  defaultOpen = true,
  onRetry,
  children,
  className,
  style,
  "aria-label": label,
  "aria-labelledby": labelledBy,
  ...props
}, ref) {
  const titleId = React.useId();
  const tests = suites.flatMap(suite => suite.tests);
  const counts = {
    passed: 0,
    failed: 0,
    skipped: 0,
    running: 0,
    pending: 0
  };
  for (const test of tests) counts[test.status]++;
  const completed = counts.passed + counts.failed + counts.skipped;
  const root = rs(["rs-test-results", className], styles.root);
  const header = rs(["rs-test-results-header"], styles.header);
  const titleStyle = rs(["rs-test-results-title"], styles.title);
  const summary = rs(["rs-test-results-summary"], styles.summary);
  const progress = rs(["rs-test-results-progress"], styles.progress);
  const content = rs(["rs-test-results-content"], styles.content);
  const list = rs(["rs-test-results-list"], styles.list);
  const note = rs(["rs-test-results-note"], styles.note);
  return /*#__PURE__*/_jsxs("section", {
    ...props,
    ref: ref,
    "aria-label": label,
    "aria-labelledby": labelledBy ?? (label == null ? titleId : undefined),
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsxs("header", {
      ...header,
      children: [/*#__PURE__*/_jsx("span", {
        ...titleStyle,
        id: titleId,
        children: title
      }), /*#__PURE__*/_jsxs("div", {
        ...summary,
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Object.entries(counts).map(([status, count]) => count > 0 && /*#__PURE__*/_jsxs(Badge, {
          variant: status === "passed" ? "solid" : "muted",
          children: [count, " ", status]
        }, status)), /*#__PURE__*/_jsxs("span", {
          ...note,
          children: [completed, " of ", tests.length, " complete"]
        }), duration != null && /*#__PURE__*/_jsx("span", {
          ...note,
          children: durationLabel(duration)
        })]
      }), /*#__PURE__*/_jsx("progress", {
        ...progress,
        value: completed,
        max: Math.max(1, tests.length),
        "aria-label": "Tests completed"
      })]
    }), /*#__PURE__*/_jsxs("div", {
      ...content,
      children: [suites.map(suite => /*#__PURE__*/_jsxs(Collapsible, {
        title: /*#__PURE__*/_jsxs(_Fragment, {
          children: [suite.name, " \xB7 ", suite.tests.length, " tests", suite.duration != null && ` · ${durationLabel(suite.duration)}`]
        }),
        defaultOpen: defaultOpen,
        children: [/*#__PURE__*/_jsx("ul", {
          ...list,
          children: suite.tests.map(test => /*#__PURE__*/_jsx(TestRow, {
            test: test,
            suite: suite,
            onRetry: onRetry
          }, test.id))
        }), suite.tests.length === 0 && /*#__PURE__*/_jsx("p", {
          ...note,
          children: "No tests in this suite."
        })]
      }, suite.id)), suites.length === 0 && /*#__PURE__*/_jsx("p", {
        ...note,
        children: "No test results yet."
      }), children]
    })]
  });
});
//# sourceMappingURL=test-results.js.map
