/**
 * This file was generated from Graph.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export interface GraphProps<Style> {
    name: string;
    style: Style[];
    caption: DynamicValue<string>;
    onClick?: ActionValue;
}

export interface GraphPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    caption: string;
    onClick: {} | null;
}
