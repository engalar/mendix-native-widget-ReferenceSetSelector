import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { ReferenceSetSelectorPreviewProps } from "../typings/ReferenceSetSelectorProps";

export function getProperties(
    values: ReferenceSetSelectorPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: ReferenceSetSelectorPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
