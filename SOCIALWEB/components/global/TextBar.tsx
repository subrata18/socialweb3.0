import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE_REF_2 } from "../../utility/constants";
import {
    GAP_SIZE_REF_14,
    GAP_SIZE_REF_16,
    GAP_SIZE_REF_2,
    GAP_SIZE_REF_4,
    SIZE_REF_16,
} from "../../utility/constants/appConstants";
import CustomTextInput from "./CustomTextInput";
import Icon from "./Icon";

const TextBar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.textBar}>
                <CustomTextInput
                    placeHolder="Message"
                    multiLine={true}
                    style={{ paddingHorizontal: GAP_SIZE_REF_14 }}
                />
                <SafeAreaView style={styles.iconHolder}>
                    <Icon
                        name="message-outline"
                        size={28}
                        onPress={() => {}}
                        color="black"
                    />
                    <Icon
                        name="camera-outline"
                        size={28}
                        onPress={() => {}}
                        color="black"
                    />
                </SafeAreaView>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonContainer}>
                <SafeAreaView style={styles.button}>
                    <Icon
                        name="send"
                        size={28}
                        onPress={() => {}}
                        color="white"
                    />
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default TextBar;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
    },
    textBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "85%",
        maxHeight: 100,
        backgroundColor: "#EBEDFB",
        borderRadius: GAP_SIZE_REF_16,
        paddingHorizontal: GAP_SIZE_REF_2,
    },
    iconHolder: {
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-evenly",
    },
    buttonContainer: {
        width: "10%",
    },
    button: {
        padding: GAP_SIZE_REF_2,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        borderRadius: GAP_SIZE_REF_16,
        backgroundColor: "#6A53F8",
    },
});
