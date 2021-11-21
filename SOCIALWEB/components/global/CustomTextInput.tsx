import React, { useCallback, useState } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";
import {
    GAP_SIZE_REF_4,
    GAP_SIZE_REF_8,
} from "../../utility/constants/appConstants";
// import Icon from "./Icon";

const CustomTextInput = ({
    placeHolder,
    multiLine,
    secureTextEntry,
    style,
    maxLength,
    otherProps,
}: {
    placeHolder: string;
    maxLength?: number;
    multiLine?: boolean;
    secureTextEntry?: boolean;
    style?: StyleProp<ViewStyle>;
    otherProps?: any;
}) => {
    const [textValue, setTextValue] = useState<string>("");
    const textChangeHandler = useCallback(
        (text: string) => {
            setTextValue(text);
        },
        [textValue]
    );
    return (
        <TextInput
            value={textValue}
            onChangeText={textChangeHandler}
            placeholder={placeHolder}
            secureTextEntry={secureTextEntry}
            style={[styles.textInput, style]}
            multiline={multiLine}
            maxLength={maxLength}
            {...otherProps}
        />
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    textInput: {
        width: "85%",
        paddingVertical: GAP_SIZE_REF_4,
        paddingHorizontal: GAP_SIZE_REF_8,
    },
});

{
    /* <SafeAreaView edges={[]} style={styles.iconContainer}>
    <Icon
        name="heart-outline"
        color="black"
        size={22}
        onPress={cameraHandler}
    />
    <Icon
        name="heart-outline"
        color="black"
        size={22}
        onPress={selectFileHandler}
    />
</SafeAreaView>; */
}

// const cameraHandler = useCallback(() => {}, []);
// const selectFileHandler = useCallback(() => {}, []);

// iconContainer: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "flex-end",
//         width: "15%",
//         paddingVertical: SIZE_REF_6,
//     },

// container: {
//         width: "85%",
//         borderRadius: SIZE_REF_16,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         backgroundColor: "#EBEDFB",
//         paddingHorizontal: GAP_SIZE_REF_10,
//         paddingVertical: GAP_SIZE_REF_2,
//     },
