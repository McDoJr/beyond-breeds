import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import React from "react";
import TabBarItem from "./TabBarItem";
import {Image, Platform, StyleSheet, View} from "react-native";

const TabBar = ({ state, descriptors, navigation, admin = false }: {admin?: boolean} & BottomTabBarProps) => {

    const ios = Platform.OS === "ios";
    const paddingBottom = ios ? 15 : 5;
    const borderTopLeftRadius = ios ? 100 : 60;
    const borderTopRightRadius = ios ? 100 : 60;

    return (
        <View style={[styles.container, {paddingBottom, borderTopLeftRadius, borderTopRightRadius}]}>
            {!admin && (
                <View style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: [{translateX: -8}, {translateY: -60}]
                }}>
                    <Image source={require("@/assets/images/paw.png")} />
                </View>
            )}
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                const name = route.name;

                return <TabBarItem {...{isFocused, options, onPress, onLongPress, name}} key={name} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#E6D1EE",
        paddingHorizontal: 20,
    }
});

export default TabBar;