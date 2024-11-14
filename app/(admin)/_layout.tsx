import {Tabs} from "expo-router";
import TabBar from "@/components/navigation/TabBar";
import {HeaderOptions} from "@react-navigation/elements";
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import {StatusBar} from "react-native";

export default function AdminLayout() {

    const options: HeaderOptions & BottomTabNavigationOptions = {
        headerShown: false
    }

    return (
        <>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <Tabs
                tabBar={(props) => <TabBar {...props} admin={true} />}
                screenOptions={{
                    headerShown: false
                }}
            >
                {/*<Tabs.Screen name="home" />*/}
                <Tabs.Screen name="pets" />
                <Tabs.Screen name="adopted" />
                <Tabs.Screen name="users" />
                <Tabs.Screen name="requests" />
            </Tabs>
        </>
    )

}