import { createElement, ReactElement, useCallback, useMemo, useRef, useState } from "react";
import { ValueStatus } from 'mendix';
import { ReferenceSetSelectorProps } from "../typings/ReferenceSetSelectorProps";
import { View } from "react-native";
import { ReferenceSetSelectorStyle } from "./ui/Styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MultiSelect from 'react-native-multiple-select';

const defaultSearchIcon = (
    <Icon
        name="magnify"
        size={20}
        color="#A9A9A9"
        style={{ marginRight: 10 }}
    />
);

export function ReferenceSetSelector(props: ReferenceSetSelectorProps<ReferenceSetSelectorStyle>): ReactElement {
    const ref = useRef<MultiSelect>(null);

    const [selectedItems, setselectedItems] = useState<string[]>([]);

    const items = useMemo(() => {
        if (props.options.status === ValueStatus.Available) {
            return props.options.items!.map(d => ({
                id: props.attKey.get(d).value!,
                name: props.attLabel.get(d).value!,
            }));
        } else {
            return [];
        }
    }, [props.options])

    const onSelectedItemsChange = useCallback(
        (e: string[]) => {
            selectedItems.forEach(d => {
                if (!e.includes(d)) {
                    // uncheck
                }
            })
            e.forEach(d => {
                if (!selectedItems.includes(d)) {
                    // check
                    const idx = items.findIndex(f => f.id === d);
                    props.actionSelect?.get(props.options.items![idx]).execute();
                }
            })
            setselectedItems(e);
        },
        [props.actionSelect, props.options],
    )

    return (
        <View style={{ flex: 1 }}>
            <MultiSelect
                searchIcon={defaultSearchIcon}
                hideTags
                items={items}
                uniqueKey="id"
                ref={ref}
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Pick Items"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log(text)}
                altFontFamily="ProximaNova-Light"
                tagRemoveIconColor="#CCC"
                tagBorderColor="#CCC"
                tagTextColor="#CCC"
                selectedItemTextColor="#CCC"
                selectedItemIconColor="#CCC"
                itemTextColor="#000"
                displayKey="name"
                searchInputStyle={{ color: '#CCC' }}
                submitButtonColor="#CCC"
                submitButtonText="Submit"
                styleListContainer={{ height: 90 }}
            />
            <View>
                {ref.current && ref.current.getSelectedItemsExt(selectedItems)}
            </View>
        </View>
    );
}
