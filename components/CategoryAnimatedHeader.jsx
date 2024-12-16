import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  View,
} from "react-native";

import Constants from "expo-constants";
import { router, useNavigation } from "expo-router";

const STATUSBAR_HEIGHT =
  Platform.OS === "ios" ? Constants.statusBarHeight : StatusBar.currentHeight;

const CategoryAnimatedHeader = ({
  title = "",
  isScrolled = false,
  concernType = [],
  tissueType = [],
}) => {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftArrow} onPress={onBackPress}>
        {/* <LeftArrow width={16} height={12} color={"#000"} /> */}
        <Text>Back</Text>
      </TouchableOpacity>

      {title && <Text style={styles.title}>{title}</Text>}

      {(concernType.length > 0 || tissueType.length > 0) && (
        <Text style={styles.title}>
          {Array.isArray(concernType)
            ? concernType.join(" & ").replace(/-/g, " ")
            : concernType}
          {concernType.length > 0 && tissueType.length > 0 ? " & " : ""}
          {Array.isArray(tissueType)
            ? tissueType.join(" & ").replace(/-/g, " ")
            : tissueType}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: Platform.OS === 'ios' ? '#ffffff50' : '#fff',
    overflow: "hidden",
    zIndex: 1,
    borderBottomColor: "#80808550",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignItems: "center",
    paddingTop: STATUSBAR_HEIGHT,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Lato_700Bold",
    fontSize: 14,
    fontWeight: 700,
    color: "#000",
  },
  leftArrow: {
    marginTop: Platform.OS === "ios" ? 2 : 4,
    width: 60,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryAnimatedHeader;
