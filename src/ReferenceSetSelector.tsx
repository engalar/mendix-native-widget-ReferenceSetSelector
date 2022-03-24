import { createElement, ReactElement, useCallback } from "react";
import { ReferenceSetSelectorProps } from "../typings/ReferenceSetSelectorProps";
import { Pressable, Text, View } from "react-native";
import { defaultReferenceSetSelectorStyle, ReferenceSetSelectorStyle } from "./ui/Styles";
import { flattenStyles } from "./piw-native-utils-internal";
import { executeAction } from "./piw-utils-internal";

export function ReferenceSetSelector(props: ReferenceSetSelectorProps<ReferenceSetSelectorStyle>): ReactElement {
    const styles = flattenStyles(defaultReferenceSetSelectorStyle, props.style);

    const renderText = useCallback(() => {
        return (
            <Text testID={`${props.name}$caption`} style={styles.caption}>
                demo
            </Text>
        );
    }, [props.caption, styles]);

    return (
        <View style={styles.container} testID={props.name}>
            {props.onClick ? (
                <Pressable
                    onPress={() => executeAction(props.onClick)}
                    android_ripple={{
                        color: styles.container.rippleColor
                    }}
                >
                    {renderText()}
                </Pressable>
            ) : (
                renderText()
            )}
        </View>
    );
}
