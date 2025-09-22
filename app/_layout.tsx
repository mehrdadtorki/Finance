import { ThemeProvider } from "@/context/ThemeContext";
import { initDB, seedDB } from "@/services/db";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import OnboardingScreen from "./(tabs)/OnboardingScreen";
import SplashScreen from "./(tabs)/splashScreen";
// import Welcome from "./(tabs)/OnboardingScreen";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowWelcome(true);
    }, 3000); // shorter splash, adjust as needed

    const initialDataBase = async () => {
      await initDB();
      await seedDB();
    };

    initialDataBase();
  }, []);

  return (
    <ThemeProvider>
      <PaperProvider>
        {loading ? (
          <SplashScreen />
        ) : (
          <GestureHandlerRootView style={{ flex: 1 }}>
            <OnboardingScreen />
          </GestureHandlerRootView>
        )}
        {/* {loading ? (
          <SplashScreen />
        ) : showWelcome ? (
          <OnboardingScreen />
        ) : (
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        )} */}
      </PaperProvider>
    </ThemeProvider>
  );
}
