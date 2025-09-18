import { ThemeProvider } from "@/context/ThemeContext";
import { initDB, seedDB } from "@/services/db";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import SplashScreen from "./(tabs)/splashScreen";
import Welcome from "./(tabs)/welcome/welcome";

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
        ) : showWelcome ? (
          <Welcome onFinish={() => setShowWelcome(false)} />
        ) : (
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        )}
      </PaperProvider>
    </ThemeProvider>
  );
}
