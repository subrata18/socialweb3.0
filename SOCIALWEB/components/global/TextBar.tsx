import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GAP_SIZE_REF_4 } from "../../utility/constants/appConstants";
import CustomTextInput from "./CustomTextInput";
import Icon from "./Icon";

const TextBar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView>
                <CustomTextInput placeHolder="Message" />
                <Icon
                    name="bookmark-outline"
                    size={23}
                    onPress={() => {}}
                    color="black"
                />
                <Icon
                    name="comment-outline"
                    size={23}
                    onPress={() => {}}
                    color="black"
                />
            </SafeAreaView>
            <SafeAreaView>
                <Icon
                    name="hashtag"
                    size={23}
                    onPress={() => {}}
                    color="black"
                />
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default TextBar;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        padding: GAP_SIZE_REF_4,
        justifyContent: "center",
    },
});
