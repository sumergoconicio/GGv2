"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import JsxParser from "react-jsx-parser";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { completePreviewJSX, previewBindings, validatePreviewJSX } from "./jsx-preview-parser.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ParserComponent = JsxParser;
const styles = {
  root: {
    k7Eaqz: "xeuugli",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j xz1l38o",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kmVPX3: "x1uz70x1",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    kVQacm: "xysyzu8",
    kHBbk8: "xc8icb0",
    ktR8K2: "x18dfbjx",
    $$css: true
  },
  content: {
    k7Eaqz: "xeuugli",
    kHjlTd: "xj0a0fe",
    $$css: true
  },
  status: {
    kogj98: "xbquzhq",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "xboafo0",
    $$css: true
  },
  error: {
    kogj98: "x1ghz6dp",
    khDVqt: "x126k92a",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};
class PreviewBoundary extends React.Component {
  state = {};
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error) {
    this.props.onError(error);
  }
  render() {
    return this.state.error ? this.props.renderError(this.state.error) : this.props.children;
  }
}

/** Optional Acorn-validated JSX data renderer. This is not a general JavaScript sandbox. */
export const JSXPreview = /*#__PURE__*/React.forwardRef(function JSXPreview({
  jsx,
  streaming = false,
  components = {},
  bindings,
  onError,
  fallback,
  className,
  style,
  ...props
}, ref) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const lastGood = React.useRef(null);
  const reported = React.useRef(null);
  const errorCallback = React.useRef(onError);
  errorCallback.current = onError;
  const result = React.useMemo(() => {
    try {
      const source = streaming ? completePreviewJSX(jsx) : jsx;
      validatePreviewJSX(source, new Set(Object.keys(components)));
      const data = previewBindings(bindings);
      const good = {
        source,
        bindings: data
      };
      if (source.trim()) lastGood.current = good;
      return {
        good,
        error: null
      };
    } catch (error) {
      return {
        good: streaming ? lastGood.current : null,
        error: error instanceof Error ? error : new Error("Could not parse this preview.")
      };
    }
  }, [jsx, streaming, components, bindings]);
  const root = rs(["rs-jsx-preview", className], styles.root);
  const content = rs(["rs-jsx-preview-content"], styles.content);
  const status = rs(["rs-jsx-preview-status"], styles.status);
  const errorStyle = rs(["rs-jsx-preview-error"], styles.error);
  const renderError = error => /*#__PURE__*/_jsx("div", {
    ...errorStyle,
    role: "alert",
    children: typeof fallback === "function" ? fallback(error) : fallback ?? `Could not render preview: ${error.message}`
  });
  const report = React.useCallback(error => {
    const key = `${jsx}:${error.message}`;
    if (!streaming && reported.current !== key) {
      reported.current = key;
      queueMicrotask(() => errorCallback.current?.(error));
    }
  }, [jsx, streaming]);
  React.useEffect(() => {
    if (result.error) report(result.error);else reported.current = null;
  }, [result.error, report]);
  return /*#__PURE__*/_jsxs("div", {
    ...props,
    ref: ref,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [!mounted && /*#__PURE__*/_jsx("p", {
      ...status,
      children: "Preparing preview\u2026"
    }), mounted && result.good && /*#__PURE__*/_jsx("div", {
      ...content,
      children: /*#__PURE__*/_jsx(PreviewBoundary, {
        renderError: renderError,
        onError: report,
        children: /*#__PURE__*/_jsx(ParserComponent, {
          jsx: result.good.source,
          bindings: result.good.bindings,
          components: components,
          renderInWrapper: false,
          allowUnknownElements: false,
          blacklistedTags: ["script", "iframe", "object", "embed", "style", "link", "meta", "base"],
          blacklistedAttrs: [/^on/i, "dangerouslySetInnerHTML", "srcDoc", "ref"],
          onError: report,
          renderError: ({
            error
          }) => renderError(new Error(error))
        })
      }, `${result.good.source}:${streaming}`)
    }), result.error && !streaming ? renderError(result.error) : streaming && /*#__PURE__*/_jsx("p", {
      ...status,
      role: "status",
      children: result.good?.source.trim() ? "Streaming preview…" : "Waiting for a complete element…"
    })]
  });
});
//# sourceMappingURL=jsx-preview.js.map
