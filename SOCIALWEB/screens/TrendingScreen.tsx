import { SafeAreaView } from "react-native-safe-area-context";
import { globalColors } from "../utility/style/colors";
import { globalLayouts } from "../utility/style/layout";
import React from "react";
import CustomTextInput from "../components/global/CustomTextInput";
import UserChatContact from "../components/UserChatContact";
import CollapsibleText from "../components/global/CollapsibleText";
import { SIZE_REF_16 } from "../utility/constants/appConstants";

const TrendingScreen = () => {
    return (
        <SafeAreaView
            style={[globalLayouts.screenLayout, globalColors.screenColor]}
            edges={["left", "right"]}
        >
            {/* <CustomTextInput
                placeHolder={"Message"}
                style={{
                    backgroundColor: "#EBEDFB",
                }}
                secureTextEntry={true}
            /> */}
            <UserChatContact
                avatarUrl="https://source.unsplash.com/random"
                name="Swarnendu32"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                timeStamp="yesterday"
                unreadCount={5}
            />
            {/* <CollapsibleText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                dolorum rerum numquam eligendi eveniet quasi?
            </CollapsibleText> */}
        </SafeAreaView>
    );
};

export default TrendingScreen;
