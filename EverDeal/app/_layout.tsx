import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {  
  useEffect(() => {
    document.title = 'EverDeal';
  }, []);
  
  return (
    <Stack screenOptions={{ headerShown: false }}/>
  )
}
