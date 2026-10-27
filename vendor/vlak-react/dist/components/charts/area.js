import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../../tokens.js";
import { vlak } from "../../tokens.js";
import { LineChart } from "./line.js";
import { jsx as _jsx } from "react/jsx-runtime";
const styles = {
  area: {
    kaIpWk: "x2u8bby",
    kGVxlE: "x1gnnqk1",
    kWkggS: "xhpg8l3",
    $$css: true
  }
};
/** Filled field. Same law as the line: hairlines, texture, one optional spot. */
export const AreaChart = /*#__PURE__*/React.forwardRef(function AreaChart(props, ref) {
  void styles.area;
  return /*#__PURE__*/_jsx(LineChart, {
    ref: ref,
    ...props,
    area: true
  });
});
//# sourceMappingURL=area.js.map
