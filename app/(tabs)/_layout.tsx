import {Tabs} from "expo-router";
import TabBar from "@/components/navigation/TabBar";
import {HeaderOptions} from "@react-navigation/elements";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {StatusBar} from "react-native";

export default function TabsLayout() {

    const options: HeaderOptions & BottomTabNavigationOptions = {
        headerShown: false
    }

    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <Tabs
                tabBar={(props) => <TabBar {...props} />}
                screenOptions={{
                    headerShown: false
                }}
            >
                {/*<Tabs.Screen name="home" />*/}
                <Tabs.Screen name="adopt" />
                <Tabs.Screen name="mutual" />
                <Tabs.Screen name="donate" />
                <Tabs.Screen name="veterinary" />
            </Tabs>
        </>
    )

}