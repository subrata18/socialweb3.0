import { StyleSheet } from "react-native";
import {
  HEADER_HEIGHT,
  SIZE_REF_8,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from "./constants";

export const globalColors = StyleSheet.create({
  screenColor: {
    backgroundColor: "#FDFDFD",
  },
  shutterHeaderColor: {
    backgroundColor: "#FDFDFD",
    borderTopColor: "#D1CBCB",
  },
  shutterColor: {
    backgroundColor: "#FDFDFD",
  },
  shutterFooterColor: {
    borderTopColor: "#D1CBCB",
    backgroundColor: "#FDFDFD",
  },
  shutterBodyColor: {
    borderTopColor: "#D1CBCB",
    backgroundColor: "#FDFDFD",
  },
  shutterOverlayColor: {
    backgroundColor: "black",
  },
  avatarColor: {
    backgroundColor: "#FDFDFD",
  },
  avatarContainerColor: {
    borderColor: "#D1CBCB",
  },
  userInfoContainerColor: {
    backgroundColor: "#FDFDFD",
  },
  userInfoPrimaryTextColor: {
    color: "#1D1B1B",
  },
  userInfoSecondaryTextColor: {
    color: "#1D1B1B",
  },
  imageFeedPostHeaderContainerColor: {
    backgroundColor: "#FDFDFD",
  },
  headerColor: {
    backgroundColor: "#FDFDFD",
    borderBottomColor: "#D1CBCB",
  },
});

export const globalLayouts = StyleSheet.create({
  screenLayout: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  tabLayout: {
    width: WINDOW_WIDTH,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  headerLayout: {
    width: "100%",
    height: HEADER_HEIGHT,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
