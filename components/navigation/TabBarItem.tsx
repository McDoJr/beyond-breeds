import React, {useEffect} from 'react'
import {BottomTabNavigationOptions} from "@react-navigation/bottom-tabs";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {icons} from "@/constants/constants";
import {Colors} from "@/constants/Colors";

type TabBarItemProps = {
    isFocused: boolean,
    options: BottomTabNavigationOptions,
    onPress: () => void,
    onLongPress: () => void,
    name: string
};

const TabBarItem = ({ isFocused, options, onPress, onLongPress, name }: TabBarItemProps) => {

    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring((isFocused ? 1 : 0), {
            duration: 350
        });
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

        return { transform: [{scale: scaleValue}] };
    });

    const capitalizedName = name.charAt(0).toUpperCase() + name.substring(1);

    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >

            {/*<Animated.View style={[animatedIconStyle,*/}
            {/*    {padding: 5, backgroundColor: Colors.primary, borderRadius: 8}*/}
            {/*]}>*/}
            {/*    {icons[name]({*/}
            {/*        color: '#FFFFFF'*/}
            {/*    })}*/}
            {/*</Animated.View>*/}
            <Image source={icons[name]} />
            <Text style={{fontFamily: "kameron-bold", fontSize: 12}}>{capitalizedName}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    }
});

export default TabBarItem;
