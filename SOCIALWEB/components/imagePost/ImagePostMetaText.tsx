import React, { useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { SIZE_REF_12, SIZE_REF_8 } from "../../utility/constants";
import { BoldText, MediumText, RegularText } from "../../utility/ui";
import Icon from "../global/Icon";

export interface ImagePostMetaTextProps {
  //number of data that this component represent it can be any countable metadeta i.e. like, comment, sends etc
  numberOfData: number;
  //a string of references (usually userid) associalted to the meta deta
  filteredReference?: string[];
  //icon
  icon: {
    name: string;
    size: number;
    color: string;
  };
  //optional style prop
  style?: StyleProp<ViewStyle>;
}

const ImagePostMetaText = ({
  filteredReference,
  numberOfData,
  icon,
  style,
}: ImagePostMetaTextProps) => {
  const referenceText = useMemo(
    () => filteredReference?.join(" "),
    [filteredReference]
  );

  return (
    <View style={[styles.textContainer, style]}>
      <Icon {...icon} />
      {referenceText && (
        <RegularText style={[styles.text]}>
          <MediumText>{referenceText}</MediumText> and{" "}
          <MediumText>{numberOfData} others</MediumText>
        </RegularText>
      )}
      {!referenceText && (
        <BoldText style={[styles.text]}>{numberOfData}</BoldText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: SIZE_REF_12,
    color: "white",
    marginLeft: SIZE_REF_8,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default ImagePostMetaText;
