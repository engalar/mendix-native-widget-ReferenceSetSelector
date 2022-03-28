/**
 * This file was generated from ReferenceSetSelector.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ListValue, ListActionValue, ListAttributeValue } from "mendix";

export interface ReferenceSetSelectorProps<Style> {
    name: string;
    style: Style[];
    options: ListValue;
    attKey: ListAttributeValue<string>;
    attLabel: ListAttributeValue<string>;
    actionSelect?: ListActionValue;
    actionUnselect?: ListActionValue;
}

export interface ReferenceSetSelectorPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    options: {} | { type: string } | null;
    attKey: string;
    attLabel: string;
    actionSelect: {} | null;
    actionUnselect: {} | null;
}
