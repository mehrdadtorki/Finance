// (tabs)/_layout.tsx
import { useTheme } from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Analytics from "./analytics";
import App from "./home";
import Profile from "./profile";

const screen = Dimensions.get("screen");

export default function CurvedBottomBarLayout() {
  const { colors } = useTheme();

  return (
    <CurvedBottomBarExpo.Navigator
      type="DOWN"
      height={80}
      width={screen.width}
      id="main-bottom-bar"
      borderColor="#e0e0e0"
      borderWidth={1}
      circleWidth={60}
      bgColor="white"
      initialRouteName="home"
      borderTopLeftRight
      circlePosition="CENTER"
      // shadowStyle={{
      //   shadowColor: "#00ff80ff",
      //   shadowOffset: {
      //     width: 0,
      //     height: 0,
      //   },
      //   shadowOpacity: 1,
      //   shadowRadius: 5,
      // }}
      screenListeners={{}}
      screenOptions={{ headerShown: false }}
      defaultScreenOptions={{}} // Add empty or your custom default screen options
      backBehavior="home" // or "none", "order", "history" as needed
      renderCircle={({
        selectedTab,
        navigate,
      }: {
        selectedTab: string;
        navigate: (routeName: string) => void;
      }) => (
        <TouchableOpacity
          style={{
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.accent,
            width: 65,
            height: 65,
            borderRadius: "50%",
            top: -20,
          }}
          onPress={() => navigate("create")}
        >
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
        </TouchableOpacity>
      )}
      tabBar={({
        routeName,
        selectedTab,
        navigate,
      }: {
        routeName: string;
        selectedTab: string;
        navigate: (routeName: string) => void;
      }) => {
        let iconName: string = "question";
        if (routeName === "home") iconName = "home-outline";
        if (routeName === "analytics") iconName = "stats-chart-outline";
        if (routeName === "person") iconName = "person-circle-outline";
        if (routeName === "card") iconName = "card-outline";

        return (
          <TouchableOpacity
            onPress={() => navigate(routeName)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 62,
            }}
          >
            <Ionicons
              name={iconName as any}
              size={26}
              color={
                routeName === selectedTab
                  ? colors.accent
                  : colors.tabIconDefault
              }
            />
          </TouchableOpacity>
        );
      }}
    >
      <CurvedBottomBarExpo.Screen name="home" position="LEFT" component={App} />
      <CurvedBottomBarExpo.Screen
        name="analytics"
        position="LEFT"
        component={Analytics}
      />
      <CurvedBottomBarExpo.Screen
        name="card"
        position="RIGHT"
        component={Analytics}
      />
      <CurvedBottomBarExpo.Screen
        name="person"
        position="RIGHT"
        component={Profile}
      />
    </CurvedBottomBarExpo.Navigator>
  );
}
