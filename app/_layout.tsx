import { Stack } from "expo-router";
import "react-native-reanimated";

import { ThemeProvider } from "@/context/ThemeContext";
import { initDB, seedDB } from "@/services/db";
import { useEffect, useState } from "react";
import { PaperProvider } from "react-native-paper";
import SplashScreen from "./(tabs)/splashScreen";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);

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
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        )}
      </PaperProvider>
    </ThemeProvider>
  );
}
