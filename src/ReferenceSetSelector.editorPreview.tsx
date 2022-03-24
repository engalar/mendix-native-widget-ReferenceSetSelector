import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { ReferenceSetSelectorPreviewProps } from "../typings/ReferenceSetSelectorProps";

declare function require(name: string): string;

export function preview(props: ReferenceSetSelectorPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
