import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak } from "../tokens.js";
import { rs } from "../rs.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const styles = {
  ai: {
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kOIVth: "x8fetqu",
    ks0D6T: "xu4g937",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9",
    kmVPX3: "xomzojh",
    $$css: true
  },
  head: {
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kGNEyG: "x6s0dn4",
    $$css: true
  },
  title: {
    kGuDYH: "x1dcheo9",
    k63SB2: "x1s688f",
    kb6lSQ: "xjat59b",
    kMwMTN: "x1aj07ft",
    $$css: true
  },
  status: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kOIVth: "xpj7pl4",
    kGuDYH: "xboafo0",
    k63SB2: "xk50ysn",
    kMwMTN: "x1ixqp2s",
    kb6lSQ: "xjat59b",
    $$css: true
  },
  statusDot: {
    kzqmXN: "xrkia0p",
    kZKoxP: "x4j2xbe",
    kaIpWk: "x16rqkct",
    kWkggS: "x15k62pf",
    $$css: true
  },
  msg: {
    k1xSpc: "x78zum5",
    kzqmXN: "xh8yej3",
    $$css: true
  },
  user: {
    kjj79g: "x13a6bvl",
    $$css: true
  },
  userBlock: {
    kWkggS: "xcdo795",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9",
    kLKAdn: "x1pe9zv5",
    kGO01o: "x1v0wz0i",
    kZCmMZ: "x10mud68",
    kwRFfy: "x16p959o",
    kGuDYH: "x1roswp1",
    kMwMTN: "x1aj07ft",
    kb6lSQ: "xjat59b",
    ks0D6T: "x17na0u1",
    $$css: true
  },
  reply: {
    kGuDYH: "x1roswp1",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1aj07ft",
    kb6lSQ: "xjat59b",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  card: {
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "x1po71e9",
    kmVPX3: "x8hbxov",
    k1xSpc: "x78zum5",
    kXwgrk: "xdt5ytf",
    kGNEyG: "x1cy8zhl",
    $$css: true
  },
  tag: {
    kGuDYH: "x1ve87vm",
    k63SB2: "x1s688f",
    kb6lSQ: "x16q24ku",
    kMwMTN: "x1aj07ft",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    k8WAf4: "xj8oexa",
    kg3NbH: "x97vtpp",
    k1K539: "x1ncqgef",
    $$css: true
  },
  text: {
    kGuDYH: "x1dcheo9",
    kMwMTN: "x1aj07ft",
    kLWn49: "xfrs9s4",
    kogj98: "x1ghz6dp",
    $$css: true
  },
  done: {
    k1xSpc: "x78zum5",
    kGNEyG: "x1pha0wt",
    kOIVth: "x13z6uf9",
    keoZOQ: "xhj8ucd",
    kGuDYH: "x1up2fpq",
    kLWn49: "xfrs9s4",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  input: {
    keoZOQ: "xr9ek0c",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kWkggS: "x1eieebl",
    kLKAdn: "x1pe9zv5",
    kGO01o: "x1v0wz0i",
    kZCmMZ: "x1m83qfk",
    kwRFfy: "xkyoe5z",
    kGuDYH: "x1up2fpq",
    kMwMTN: "x1ixqp2s",
    k1xSpc: "x78zum5",
    kjj79g: "x1qughib",
    kGNEyG: "x6s0dn4",
    $$css: true
  },
  send: {
    kMwMTN: "x1aj07ft",
    k63SB2: "x1s688f",
    $$css: true
  }
};

/** Chat panel: user block, reply, suggestion card, input row. */
export const Assistant = /*#__PURE__*/React.forwardRef(function Assistant({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai", className], styles.ai);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantHead = /*#__PURE__*/React.forwardRef(function AssistantHead({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-head", className], styles.head);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantTitle = /*#__PURE__*/React.forwardRef(function AssistantTitle({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-title", className], styles.title);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantStatus = /*#__PURE__*/React.forwardRef(function AssistantStatus({
  className,
  style,
  children,
  ...props
}, ref) {
  const sx = rs(["rs-ai-status", className], styles.status);
  const dot = rs(["rs-ai-status-dot"], styles.statusDot);
  return /*#__PURE__*/_jsxs("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("i", {
      className: dot.className,
      style: dot.style
    }), children]
  });
});
export const AssistantMsg = /*#__PURE__*/React.forwardRef(function AssistantMsg({
  user,
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-msg", user && "rs-ai-user", className], styles.msg, user && styles.user);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantUserBlock = /*#__PURE__*/React.forwardRef(function AssistantUserBlock({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-user-block", className], styles.userBlock);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantReply = /*#__PURE__*/React.forwardRef(function AssistantReply({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-reply", className], styles.reply);
  return /*#__PURE__*/_jsx("p", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantCard = /*#__PURE__*/React.forwardRef(function AssistantCard({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-card", className], styles.card);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantTag = /*#__PURE__*/React.forwardRef(function AssistantTag({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-tag", className], styles.tag);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantText = /*#__PURE__*/React.forwardRef(function AssistantText({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-text", className], styles.text);
  return /*#__PURE__*/_jsx("p", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantDone = /*#__PURE__*/React.forwardRef(function AssistantDone({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-done", className], styles.done);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantInput = /*#__PURE__*/React.forwardRef(function AssistantInput({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-input", className], styles.input);
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
export const AssistantSend = /*#__PURE__*/React.forwardRef(function AssistantSend({
  className,
  style,
  ...props
}, ref) {
  const sx = rs(["rs-ai-send", className], styles.send);
  return /*#__PURE__*/_jsx("span", {
    ref: ref,
    ...props,
    className: sx.className,
    style: {
      ...sx.style,
      ...style
    }
  });
});
//# sourceMappingURL=assistant.js.map
