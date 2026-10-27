"use client";

import * as React from "react";
import * as stylex from "@stylexjs/stylex";
import "../tokens.js";
import { vlak, mq } from "../tokens.js";
import { rs } from "../rs.js";
import { Select } from "./select.js";
import { Input } from "./input.js";
import { useInputValue } from "../use-input-value.js";
import { useMergedRefs } from "../merge-refs.js";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
const emptyChannel = {
  bandId: null,
  minimum: null,
  maximum: null
};
const initial = {
  mode: "rgb",
  stretch: "none",
  red: emptyChannel,
  green: emptyChannel,
  blue: emptyChannel,
  single: emptyChannel
};
const stretches = [{
  value: "none",
  label: "No enhancement"
}, {
  value: "min-max",
  label: "Stretch to range"
}, {
  value: "clip",
  label: "Clip to range"
}, {
  value: "stretch-clip",
  label: "Stretch and clip"
}];
const styles = {
  root: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x1fsutb",
    k7Eaqz: "xeuugli",
    kogj98: "x1ghz6dp",
    kmVPX3: "x1717udv",
    kMzoRj: "xc342km",
    kMwMTN: "x1gney9c",
    kLWn49: "xfrs9s4",
    $$css: true
  },
  legend: {
    kmVPX3: "x1717udv",
    k1K539: "x1gr9t9r",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    $$css: true
  },
  fields: {
    k1xSpc: "xrvj5dj",
    kumcoG: "x1mep8l x1nk3w99",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    $$css: true
  },
  channel: {
    k1xSpc: "xrvj5dj",
    kOIVth: "x8233eu",
    k7Eaqz: "xeuugli",
    kmVPX3: "x8hbxov",
    kMzoRj: "x1kz39yt",
    ksu8eU: "x1y0btm7",
    kVAM5u: "xghov5j",
    $$css: true
  },
  title: {
    kogj98: "x1ghz6dp",
    kGuDYH: "x1jq7itm",
    k63SB2: "x1s688f",
    $$css: true
  },
  field: {
    k1xSpc: "xrvj5dj",
    kfiyM8: "x10ukxgv",
    kOIVth: "xpj7pl4",
    k7Eaqz: "xeuugli",
    kGuDYH: "x4ro2ui",
    $$css: true
  },
  control: {
    k7Eaqz: "xeuugli",
    kzqmXN: "xh8yej3",
    kAzted: "x1wszdd",
    $$css: true
  },
  note: {
    kogj98: "x1ghz6dp",
    kMwMTN: "x1ixqp2s",
    kGuDYH: "x4ro2ui",
    ks0D6T: "x1qp14f0",
    kHjlTd: "xj0a0fe",
    $$css: true
  }
};

/** Selects source bands and display ranges. No pixels, statistics or missing-data rules are inferred. */
export const RasterBandMixer = /*#__PURE__*/React.forwardRef(function RasterBandMixer({
  label,
  bands,
  value,
  defaultValue = initial,
  onValueChange,
  description,
  readOnly,
  disabled,
  name,
  form,
  className,
  style,
  children,
  "aria-describedby": ariaDescribedBy,
  ...props
}, ref) {
  const id = React.useId();
  const [, refresh] = React.useReducer(n => n + 1, 0);
  const [current, setValue, fieldRef] = useInputValue(value, defaultValue, onValueChange, refresh);
  const mergedRef = useMergedRefs(ref, fieldRef);
  const validBands = bands.every(band => band.id.length > 0) && new Set(bands.map(band => band.id)).size === bands.length;
  const channels = current.mode === "single" ? [{
    key: "single",
    label: "Single band"
  }] : [{
    key: "red",
    label: "Red channel"
  }, {
    key: "green",
    label: "Green channel"
  }, {
    key: "blue",
    label: "Blue channel"
  }];
  const describedBy = [ariaDescribedBy, `${id}-hint`, description != null && `${id}-description`, readOnly && `${id}-readonly`].filter(Boolean).join(" ");
  const root = rs(["rs-raster-band-mixer", className], styles.root);
  const legend = rs(["rs-raster-band-mixer-legend"], styles.legend);
  const fields = rs(["rs-raster-band-mixer-fields"], styles.fields);
  const channelStyle = rs(["rs-raster-band-mixer-channel"], styles.channel);
  const title = rs(["rs-raster-band-mixer-title"], styles.title);
  const field = rs(["rs-raster-band-mixer-label"], styles.field);
  const control = rs(["rs-raster-band-mixer-control"], styles.control);
  const note = rs(["rs-raster-band-mixer-note"], styles.note);
  const inputName = part => name ? `${name}.${part}` : undefined;
  const change = next => {
    if (!readOnly && !disabled) setValue(next);
  };
  return /*#__PURE__*/_jsxs("fieldset", {
    ...props,
    ref: mergedRef,
    name: name,
    form: form,
    disabled: disabled,
    "aria-describedby": describedBy,
    className: root.className,
    style: {
      ...root.style,
      ...style
    },
    children: [/*#__PURE__*/_jsx("legend", {
      ...legend,
      children: label
    }), description != null && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-description`,
      children: description
    }), /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-hint`,
      children: "Choose display bands and ranges. The application renders the image from this configuration."
    }), readOnly && /*#__PURE__*/_jsx("p", {
      ...note,
      id: `${id}-readonly`,
      children: "Read only"
    }), !validBands ? /*#__PURE__*/_jsx("p", {
      ...note,
      children: "Band identifiers must be unique and non-empty."
    }) : /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsxs("div", {
        ...fields,
        children: [/*#__PURE__*/_jsxs("div", {
          ...field,
          children: [/*#__PURE__*/_jsx("span", {
            id: `${id}-mode-label`,
            children: "Rendering mode"
          }), /*#__PURE__*/_jsx(Select, {
            ...control,
            fullWidth: true,
            name: inputName("mode"),
            form: form,
            value: current.mode,
            disabled: disabled,
            readOnly: readOnly,
            "aria-labelledby": `${id}-mode-label`,
            "aria-describedby": describedBy,
            options: [{
              value: "rgb",
              label: "Three channels"
            }, {
              value: "single",
              label: "Single band"
            }],
            onValueChange: next => change({
              ...current,
              mode: next
            })
          })]
        }), /*#__PURE__*/_jsxs("div", {
          ...field,
          children: [/*#__PURE__*/_jsx("span", {
            id: `${id}-stretch-label`,
            children: "Range treatment"
          }), /*#__PURE__*/_jsx(Select, {
            ...control,
            fullWidth: true,
            name: inputName("stretch"),
            form: form,
            value: current.stretch,
            disabled: disabled,
            readOnly: readOnly,
            "aria-labelledby": `${id}-stretch-label`,
            "aria-describedby": describedBy,
            options: stretches,
            onValueChange: next => change({
              ...current,
              stretch: next
            })
          })]
        })]
      }), channels.map(channel => {
        const mapping = current[channel.key];
        const band = bands.find(item => item.id === mapping.bandId);
        const unavailable = mapping.bandId != null && (!band || band.disabled);
        const finiteMin = mapping.minimum != null && Number.isFinite(mapping.minimum);
        const finiteMax = mapping.maximum != null && Number.isFinite(mapping.maximum);
        const reversed = finiteMin && finiteMax && mapping.minimum >= mapping.maximum;
        const channelId = `${id}-${channel.key}`;
        const update = patch => change({
          ...current,
          [channel.key]: {
            ...mapping,
            ...patch
          }
        });
        return /*#__PURE__*/_createElement("div", {
          ...channelStyle,
          key: channel.key
        }, /*#__PURE__*/_jsx("p", {
          ...title,
          children: channel.label
        }), /*#__PURE__*/_jsxs("div", {
          ...field,
          children: [/*#__PURE__*/_jsxs("span", {
            id: `${channelId}-label`,
            children: [channel.label, " source"]
          }), /*#__PURE__*/_jsx(Select, {
            ...control,
            fullWidth: true,
            name: inputName(`${channel.key}.band`),
            form: form,
            value: unavailable ? "" : mapping.bandId ?? "",
            disabled: disabled,
            readOnly: readOnly,
            required: true,
            "aria-invalid": unavailable || undefined,
            "aria-labelledby": `${channelId}-label`,
            "aria-describedby": `${describedBy} ${channelId}-source`,
            options: [{
              value: "",
              label: unavailable ? `Unavailable band: ${mapping.bandId}` : "No band selected"
            }, ...bands.map(item => ({
              value: item.id,
              label: `${item.label}${item.disabled ? " (unavailable)" : ""}`,
              disabled: item.disabled
            }))],
            onValueChange: next => update({
              bandId: next || null
            })
          })]
        }), /*#__PURE__*/_jsx("p", {
          ...note,
          id: `${channelId}-source`,
          children: unavailable ? `Source band unavailable: ${mapping.bandId}` : !band ? "Source band not supplied" : /*#__PURE__*/_jsxs(_Fragment, {
            children: ["Missing-data value: ", band.noDataValue === undefined ? "Unknown" : band.noDataValue === null ? "None defined" : String(band.noDataValue), ". Unit: ", band.unit || "Not supplied", band.description != null ? /*#__PURE__*/_jsxs(_Fragment, {
              children: [". ", band.description]
            }) : null]
          })
        }), current.stretch !== "none" && /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("div", {
            ...fields,
            children: ["minimum", "maximum"].map(bound => {
              const amount = mapping[bound];
              const finite = amount != null && Number.isFinite(amount);
              const invalid = amount != null && !finite;
              return /*#__PURE__*/_createElement("label", {
                ...field,
                key: bound
              }, /*#__PURE__*/_jsxs("span", {
                children: [channel.label, " ", bound]
              }), /*#__PURE__*/_jsx(Input, {
                plain: true,
                ...control,
                type: "number",
                name: inputName(`${channel.key}.${bound}`),
                form: form,
                value: finite ? amount : "",
                step: "any",
                required: true,
                readOnly: readOnly,
                "aria-invalid": invalid || reversed || undefined,
                "aria-describedby": `${describedBy} ${channelId}-range`,
                ref: node => {
                  node?.setCustomValidity(reversed ? "Minimum must be less than maximum." : invalid ? "Range value unavailable. Enter a finite number." : "");
                },
                onChange: event => update({
                  [bound]: Number.isFinite(event.currentTarget.valueAsNumber) ? event.currentTarget.valueAsNumber : null
                })
              }));
            })
          }), /*#__PURE__*/_jsx("p", {
            ...note,
            id: `${channelId}-range`,
            children: reversed ? "Minimum must be less than maximum" : !finiteMin || !finiteMax ? "Supply both range bounds as finite numbers" : `Supplied range: ${mapping.minimum} to ${mapping.maximum}`
          })]
        }));
      }), bands.length === 0 && /*#__PURE__*/_jsx("p", {
        ...note,
        children: "No source bands supplied"
      })]
    }), children]
  });
});
//# sourceMappingURL=raster-band-mixer.js.map
