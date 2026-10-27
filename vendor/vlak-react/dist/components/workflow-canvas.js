"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import { Background, BaseEdge, Handle, NodeToolbar, Panel, Position, ReactFlow, getBezierPath, useReactFlow, useStore, useStoreApi, useViewport } from "@xyflow/react";
import { rs } from "../rs.js";
import "../tokens.js";
import { mq, vlak } from "../tokens.js";
import { Button } from "./button.js";
import { CanvasControls } from "./canvas-controls.js";
import { Toolbar } from "./toolbar.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const dash = "x18nnp16-B";
const styles = {
  canvas: {
    kzqmXN: "xh8yej3",
    kZKoxP: "xqylgxj",
    kAzted: "x85c375",
    k7Eaqz: "xeuugli",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kVQacm: "xb3r6kr",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    "--xy-background-color": "x12jvog3 xwix78c",
    "--xy-background-pattern-color": "x3kmz0x x5dsn4w",
    "--xy-edge-stroke": "x1y6dl8p x6cjlzx",
    "--xy-edge-stroke-selected": "x1ytci5o x1fv2r3g",
    "--xy-connectionline-stroke": "x19qsmxy x1vikig6",
    "--xy-handle-background-color": "x7i2q6n xkn9ob6",
    "--xy-node-color": "x11rhjjb xo2s4uf",
    "--xy-node-border": "x1h90cy8 x75qael",
    "--xy-node-border-selected": "x10z163c x1evnb7q",
    "--xy-selection-background-color": "x1s9103i x1cswlcb",
    "--xy-selection-border": "xubbag1 xbtzuaw",
    "--xy-resize-background-color": "x1pi08h9 xxhzc1u",
    "--xy-attribution-background-color": "x79hvw8 x3dk50n",
    "--xy-attribution-color": "x1p58ttt xt5hd4q",
    "--xy-minimap-background-color": "x1omns5o xbmktc",
    "--xy-minimap-mask-background-color": "xxr0nf7 x10f3fs3",
    "--xy-minimap-mask-stroke-color": "x188sqxz xvhe04t",
    "--xy-minimap-node-background-color": "x1z0eesm x1se640t",
    "--xy-minimap-node-stroke-color": "x1n9eevh x1kozegu",
    $$css: true
  },
  node: {
    kVAEAm: "x1n2onr6",
    kB7OPa: "x9f619",
    kzqmXN: "x1qyi71f",
    ks0D6T: "x193iq5w",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "x1cn24jd xz1l38o",
    kaIpWk: "xkrxur",
    $$css: true
  },
  selected: {
    kMeerF: "x1de99jn",
    k3XXqK: "xaatb59",
    kjBf7l: "xqbrbdq",
    kInvED: "x1ewu8gn",
    $$css: true
  },
  header: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kjj79g: "x1qughib",
    kOIVth: "x8233eu",
    kmVPX3: "x1uz70x1",
    $$css: true
  },
  title: {
    kGuDYH: "xkpwil5",
    k63SB2: "x1s688f",
    $$css: true
  },
  description: {
    keoZOQ: "x1tbvfm1",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x1dcheo9",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  content: {
    kmVPX3: "x1uz70x1",
    kEafiO: "x178xt8z",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kGuDYH: "xkpwil5",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  footer: {
    kmVPX3: "x19btat0",
    kEafiO: "x178xt8z",
    kPef9Z: "x13fuv20",
    kLZC3w: "x1fq36pv",
    kGuDYH: "x1dcheo9",
    kMwMTN: "x1ixqp2s",
    $$css: true
  },
  handle: {
    kzqmXN: "x1xc55vz",
    kZKoxP: "xdk7pt",
    k7Eaqz: "x11inojt",
    kAzted: "x16suv20",
    kMzoRj: "xc342km",
    kaIpWk: "x16rqkct",
    kWkggS: "xjbqb8w",
    kkrTdU: "xsid9ct",
    kgeoSG: "x1cpjm7i",
    kEoFBp: "x1hmns74",
    kFcpXp: "x4a0rqs",
    kOlAkY: "x1adndaq",
    kgzTxl: "x1r26edx",
    km8f2m: "xtz1yrx",
    $$css: true
  },
  dot: {
    k1xSpc: "x1lliihq",
    kVAEAm: "x10l6tqk",
    kpwlN0: "x19uyek8",
    kaIpWk: "x16rqkct",
    kWkggS: "xmgn9m6",
    kfzvcC: "x47corl",
    $$css: true
  },
  edge: {
    "--xy-edge-stroke": "x1y6dl8p x6cjlzx",
    "--xy-edge-stroke-selected": "x1ytci5o x1fv2r3g",
    "--xy-edge-stroke-width": "x1hlfz30",
    "--xy-connectionline-stroke": "x19qsmxy x1vikig6",
    "--xy-connectionline-stroke-width": "xlwqy2y",
    kDwRjp: "xbh8q5q",
    $$css: true
  },
  temporary: {
    k5rJSQ: "xysf7qb",
    $$css: true
  },
  animated: {
    k5rJSQ: "xysf7qb",
    kKVMdj: "x113ibq1 xmmch59",
    k44tkh: "x1q3qbx4",
    kyAemX: "x1esw782",
    ko0y90: "xa4qsjk",
    $$css: true
  },
  endpoint: {
    kDwRjp: "x11lvw2d",
    kjVXCG: "xbu9li4",
    kfJifR: "xhr4kjn",
    $$css: true
  },
  panel: {
    kmVPX3: "x78pyy4",
    kMzoRj: "xmkeg23",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    kaIpWk: "xkrxur",
    kWkggS: "xhpg8l3",
    kMwMTN: "x1gney9c",
    ks0D6T: "x18b33ah",
    $$css: true
  },
  controls: {
    k1xSpc: "x78zum5",
    kGNEyG: "x6s0dn4",
    kwnvtZ: "x1a02dak",
    kOIVth: "xvh977a",
    $$css: true
  }
};

/** A graph node surface. Render inside React Flow so its handles use the graph's geometry. */
export const WorkflowNode = /*#__PURE__*/React.forwardRef(function WorkflowNode({
  title,
  description,
  children,
  footer,
  actions,
  source = true,
  target = true,
  sourcePosition = Position.Right,
  targetPosition = Position.Left,
  selected = false,
  connectable = true,
  className,
  style,
  ...props
}, ref) {
  const root = rs(["rs-workflow-canvas-node", selected && "rs-workflow-canvas-selected", className], styles.node, selected && styles.selected);
  const handle = rs(["rs-workflow-canvas-handle"], styles.handle);
  const dot = rs(["rs-workflow-canvas-dot"], styles.dot);
  return /*#__PURE__*/_jsxs("div", {
    ref: ref,
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [target && /*#__PURE__*/_jsx(Handle, {
      ...handle,
      type: "target",
      position: targetPosition,
      isConnectable: connectable,
      "aria-hidden": "true",
      children: /*#__PURE__*/_jsx("span", {
        ...dot
      })
    }), /*#__PURE__*/_jsxs("header", {
      ...rs(["rs-workflow-canvas-header"], styles.header),
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("div", {
          ...rs(["rs-workflow-canvas-title"], styles.title),
          children: title
        }), description && /*#__PURE__*/_jsx("div", {
          ...rs(["rs-workflow-canvas-description"], styles.description),
          children: description
        })]
      }), actions && /*#__PURE__*/_jsx("div", {
        className: "nodrag nopan nokey",
        children: actions
      })]
    }), children && /*#__PURE__*/_jsx("div", {
      ...rs(["rs-workflow-canvas-content"], styles.content),
      children: children
    }), footer && /*#__PURE__*/_jsx("footer", {
      ...rs(["rs-workflow-canvas-footer"], styles.footer),
      children: footer
    }), source && /*#__PURE__*/_jsx(Handle, {
      ...handle,
      type: "source",
      position: sourcePosition,
      isConnectable: connectable,
      "aria-hidden": "true",
      children: /*#__PURE__*/_jsx("span", {
        ...dot
      })
    })]
  });
});
function DefaultNode({
  data,
  selected,
  isConnectable,
  sourcePosition,
  targetPosition
}) {
  return /*#__PURE__*/_jsx(WorkflowNode, {
    title: data.title,
    description: data.description,
    footer: data.footer,
    source: data.source,
    target: data.target,
    sourcePosition: sourcePosition,
    targetPosition: targetPosition,
    selected: selected,
    connectable: isConnectable,
    children: data.content
  });
}

/** Bezier edge with engine-managed hit testing and optional temporary or animated state. */
export function WorkflowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerStart,
  markerEnd,
  style,
  selected,
  animated,
  data,
  label,
  labelStyle,
  interactionWidth
}) {
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition
  });
  const temporary = !!data?.temporary;
  const moving = !!animated;
  const paint = rs(["rs-workflow-canvas-edge", temporary && "rs-workflow-canvas-temporary", moving && "rs-workflow-canvas-animated"], styles.edge, temporary && styles.temporary, moving && styles.animated);
  return /*#__PURE__*/_jsx(BaseEdge, {
    id: id,
    path: path,
    markerStart: markerStart,
    markerEnd: markerEnd,
    label: label,
    labelX: labelX,
    labelY: labelY,
    labelStyle: labelStyle,
    interactionWidth: interactionWidth,
    className: paint.className,
    style: {
      ...paint.style,
      ...(selected ? {
        strokeWidth: 2
      } : {}),
      ...style
    }
  });
}

/** Pointer-following connection preview while creating an edge. */
export function WorkflowConnection({
  fromX,
  fromY,
  toX,
  toY,
  fromPosition,
  toPosition,
  connectionStatus
}) {
  const [path] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    targetX: toX,
    targetY: toY,
    sourcePosition: fromPosition,
    targetPosition: toPosition
  });
  const paint = rs(["rs-workflow-canvas-edge", "rs-workflow-canvas-temporary"], styles.edge, styles.temporary);
  // biome-ignore lint/a11y/noAriaHiddenOnFocusable: The decorative SVG group explicitly disables focus.
  return /*#__PURE__*/_jsxs("g", {
    "aria-hidden": "true",
    focusable: "false",
    "data-status": connectionStatus,
    children: [/*#__PURE__*/_jsx("path", {
      ...paint,
      className: `react-flow__connection-path ${paint.className ?? ""}`,
      d: path
    }), /*#__PURE__*/_jsx("circle", {
      ...rs(["rs-workflow-canvas-endpoint"], styles.endpoint),
      cx: toX,
      cy: toY,
      r: 4
    })]
  });
}
const nodeTypes = {
  vlak: DefaultNode
};
const edgeTypes = {
  vlak: WorkflowEdge
};

/** Optional React Flow adapter. Supply a bounded height and controlled changes or defaultNodes/defaultEdges. */
export function WorkflowCanvas({
  children,
  className,
  style,
  ...props
}) {
  const root = rs(["rs-workflow-canvas", className], styles.canvas);
  return /*#__PURE__*/_jsx("div", {
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: /*#__PURE__*/_jsxs(ReactFlow, {
      nodeTypes: nodeTypes,
      edgeTypes: edgeTypes,
      defaultEdgeOptions: {
        type: "vlak"
      },
      connectionLineComponent: WorkflowConnection,
      deleteKeyCode: ["Backspace", "Delete"],
      panOnScroll: true,
      selectionOnDrag: true,
      panOnDrag: false,
      zoomOnDoubleClick: false,
      fitView: true,
      ...props,
      children: [/*#__PURE__*/_jsx(Background, {
        color: "var(--divider)",
        bgColor: "var(--bg)",
        gap: 20,
        size: 1
      }), children]
    })
  });
}

/** Overlay anchored to one of React Flow's six viewport positions. */
export function WorkflowPanel({
  className,
  style,
  ...props
}) {
  const root = rs(["rs-workflow-canvas-panel", className], styles.panel);
  return /*#__PURE__*/_jsx(Panel, {
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    }
  });
}
/** Binds Vlak's canvas controls to the graph viewport and interaction lock. */
export function WorkflowControls({
  label = "Workflow controls",
  position = "bottom-left",
  ...props
}) {
  const flow = useReactFlow();
  const {
    zoom
  } = useViewport();
  const minZoom = useStore(state => state.minZoom);
  const maxZoom = useStore(state => state.maxZoom);
  const locked = useStore(state => !state.nodesDraggable && !state.nodesConnectable && !state.elementsSelectable);
  return /*#__PURE__*/_jsx(WorkflowPanel, {
    position: position,
    ...props,
    children: /*#__PURE__*/_jsxs("div", {
      ...rs(["rs-workflow-canvas-controls"], styles.controls),
      children: [/*#__PURE__*/_jsx(CanvasControls, {
        label: label,
        zoom: zoom,
        minZoom: minZoom,
        maxZoom: maxZoom,
        onZoomChange: value => {
          void flow.zoomTo(value);
        },
        onFit: () => {
          void flow.fitView();
        },
        onReset: () => {
          void flow.setViewport({
            x: 0,
            y: 0,
            zoom: 1
          });
        }
      }), /*#__PURE__*/_jsx(WorkflowInteractionLock, {
        locked: locked
      })]
    })
  });
}

// React Flow exposes its provider store for interaction controls; node positions remain caller-owned.
function WorkflowInteractionLock({
  locked
}) {
  const store = useStoreApi();
  const previous = React.useRef(undefined);
  return /*#__PURE__*/_jsx(Button, {
    variant: "subtle",
    "aria-label": locked ? "Unlock workflow" : "Lock workflow",
    "aria-pressed": locked,
    onClick: () => {
      if (locked) store.setState(previous.current ?? {
        nodesDraggable: true,
        nodesConnectable: true,
        elementsSelectable: true
      });else {
        const state = store.getState();
        previous.current = {
          nodesDraggable: state.nodesDraggable,
          nodesConnectable: state.nodesConnectable,
          elementsSelectable: state.elementsSelectable
        };
        store.setState({
          nodesDraggable: false,
          nodesConnectable: false,
          elementsSelectable: false
        });
      }
    },
    children: locked ? "Unlock" : "Lock"
  });
}
/** Node-anchored toolbar with Vlak's arrow-key action navigation. */
export function WorkflowToolbar({
  actions,
  label,
  className,
  style,
  ...props
}) {
  const root = rs(["rs-workflow-canvas-panel", "nokey", className], styles.panel);
  return /*#__PURE__*/_jsx(NodeToolbar, {
    ...props,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: /*#__PURE__*/_jsx(Toolbar, {
      label: label,
      actions: actions
    })
  });
}
//# sourceMappingURL=workflow-canvas.js.map
