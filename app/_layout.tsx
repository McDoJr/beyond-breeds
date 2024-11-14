import { Stack } from "expo-router";
import {useFonts} from "expo-font";
import {StatusBar, Text} from "react-native";

export default function RootLayout() {

    const [fontsLoaded] = useFonts({
        "inika": require("@/assets/fonts/Inika-Regular.ttf"),
        "inika-bold": require("@/assets/fonts/Inika-Bold.ttf"),
        "kameron-bold": require("@/assets/fonts/Kameron-Bold.ttf"),
        "kanit-light": require("@/assets/fonts/Kanit-Light.ttf"),
        "kanit-bold": require("@/assets/fonts/Kanit-Bold.ttf"),
        "open-sans": require("@/assets/fonts/OpenSans-Regular.ttf"),
    });

    if(!fontsLoaded) {
        return <Text>Loading...</Text>
    }

    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index" options={{headerShown: false}}/>
                <Stack.Screen name="register" options={{headerShown: false}}/>
                <Stack.Screen name="popups/pet-details" options={{headerShown: false}}/>
            </Stack>
        </>
    );
}
