import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import AppView from "@/components/AppView";
import MutualSlider from "@/components/mutual/MutualSlider";
import Header from "@/components/header/Header";

const Mutual = () => {
    return (
        <AppView>
            <Header style={{paddingHorizontal: 35}} />
            <MutualSlider />
        </AppView>
    )
}

const styles = StyleSheet.create({});

export default Mutual;
