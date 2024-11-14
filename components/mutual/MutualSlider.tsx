import {Animated, FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useRef} from 'react'
import MutualCard, {MutualCardProps} from "@/components/mutual/MutualCard";
import Paginator from "@/components/mutual/Paginator";

const MutualSlider = () => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef<any>(null);

    const scrollTo = (index: number) => {
        slidesRef.current.scrollToIndex({ index });
    }

    const datas: MutualCardProps[] = [
        {
            name: "Chico",
            age:"1/yr",
            tags: ["Aspin", "Playful"],
            image: require("@/assets/images/chico.png")
        },
        {
            name: "Garyfield",
            age:"2/yrs",
            tags: ["Persian Breed", "Playful", "Eater"],
            image: require("@/assets/images/garyfield.png")
        }
    ]

    // will only scroll if the screen was scrolled 50%
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <Paginator items={datas} scrollX={scrollX} scrollTo={scrollTo} />
            <FlatList
                data={datas}
                horizontal
                pagingEnabled
                bounces={false}
                scrollEventThrottle={32}
                viewabilityConfig={viewConfig}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX }}}], {
                    useNativeDriver: false
                })}
                ref={slidesRef}
                renderItem={({item, index}) => <MutualCard {...item} key={index} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default MutualSlider;
