import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZE_REF_14, SIZE_REF_16 } from "../../utility/constants";
import { NameValuePairProps } from "../../utility/types";
import { RegularText } from "../../utility/ui";

const NameValuePair = (props: NameValuePairProps) => {
  return (
    <SafeAreaView edges={[]} style={[styles.container, props.style]}>
      <RegularText
        style={[styles.valueText]}
        allowFontScaling={true}
        maxFontSizeMultiplier={2}
        minimumFontScale={0.5}
        adjustsFontSizeToFit={true}
      >
        {props.value}
      </RegularText>
      <RegularText
        style={[styles.nameText]}
        allowFontScaling={true}
        maxFontSizeMultiplier={2}
        minimumFontScale={0.5}
        adjustsFontSizeToFit={true}
      >
        {props.name}
      </RegularText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  nameText: {
    fontSize: SIZE_REF_14,
  },
  valueText: {
    fontSize: SIZE_REF_16,
  },
});

export default NameValuePair;
