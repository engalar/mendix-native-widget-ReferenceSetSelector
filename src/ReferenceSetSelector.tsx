import { createElement, ReactElement, useRef, useState } from "react";
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

const items = [
    { id: '2iijs7yta', name: 'Ondo' },
    { id: 'iijs7yta', name: 'Ondo' },
    { id: 'ijs7yta', name: 'Ondo' },
    { id: 'js7yta', name: 'Ondo' },
    { id: 's7yta', name: 'Ondo' },
    { id: '1', name: 'Ondo' },
    { id: '2', name: 'Ondo' },
    { id: '3', name: 'Ondo' },
    { id: '4', name: 'Ondo' },
    { id: '5', name: 'Ondo' },
    { id: '6', name: 'Ondo' },
    { id: '8', name: 'Ondo' },
    { id: '9', name: 'Ondo' },
    { id: '11', name: 'Ondo' },
    { id: '12', name: 'Ondo' },
    {
        id: 'a0s0a8ssbsd',
        name: 'Ogun'
    }, {
        id: '16hbajsabsd',
        name: 'Calabar'
    }, {
        id: 'nahs75a5sg',
        name: 'Lagos'
    }, {
        id: '667atsas',
        name: 'Maiduguri'
    }, {
        id: 'hsyasajs',
        name: 'Anambra'
    }, {
        id: 'djsjudksjd',
        name: 'Benue'
    }, {
        id: 'sdhyaysdj',
        name: 'Kaduna'
    }, {
        id: 'suudydjsjd',
        name: 'Abuja'
    }
];

export function ReferenceSetSelector(props: ReferenceSetSelectorProps<ReferenceSetSelectorStyle>): ReactElement {
    console.log(props);

    const ref = useRef<MultiSelect>(null);
    const [selectedItems, setselectedItems] = useState<any>([]);

    return (
        <View style={{ flex: 1 }}>
            <MultiSelect
                searchIcon={defaultSearchIcon}
                hideTags
                items={items}
                uniqueKey="id"
                ref={ref}
                onSelectedItemsChange={e => {
                    setselectedItems(e);
                    console.log(e);
                }}
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
