import {Dimensions, Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {PetData} from "@/constants/types";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {router, useLocalSearchParams} from "expo-router";
import Button from "@/components/Button";

const PetDetails = () => {

    const { width } = Dimensions.get("window");

    const { data, from } = useLocalSearchParams<{data: string, from: string}>();
    const { id, name, age, months, colors, breed, weight, location, about, description, image}  = JSON.parse(data) as PetData;
    const imageSize = width - 40;

    const getImage = () => {
        return image ? <Image style={[styles.image, {width: imageSize, height: imageSize}]} source={typeof image === "string" ? {uri: image} : image} /> : (
            <View style={[styles.image, {width}]} />
        )
    }

    const getAge = () => {
        return age ? (`${age} year${age > 1 ? 's' : ''}`) : (`${months} year${months && months > 1 ? 's' : ''}`);
    }

    const randomColors = ["#FFEBCD", "#E0CDFF", "#F5C0C6"]

    const tags = [getAge(), ...colors, `${weight} kg`, breed];

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                width: 300,
                height: 300,
                borderRadius: 150,
                backgroundColor: "#F6BDC2",
                position: "absolute",
                left: -100,
                top: 270
            }} />
            <View style={{
                width: 300,
                height: 300,
                borderRadius: 150,
                backgroundColor: "#F6BDC2",
                position: "absolute",
                right: -80,
                bottom: -100
            }} />

            <View style={{
                overflow: "hidden",
                position: "relative"
            }}>
                {getImage()}
                <AntDesign name="leftcircle" size={30} color="#C03FD6" style={{
                    position: "absolute",
                    top: 10,
                    left: 10
                }} onPress={() => router.back()} />
            </View>


            <View style={{
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                padding: 10,
                borderRadius: 20
            }}>
                <Text style={{
                    fontFamily: "kanit-light",
                    fontSize: 30,
                    marginBottom: 10
                }}>{name}</Text>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    columnGap: 30,
                    rowGap: 10
                }}>
                    {tags.map((tag, index) => {
                        const backgroundColor = randomColors[Math.floor(Math.random() * randomColors.length)];
                        return (
                            <View key={index} style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                borderRadius: 20,
                                backgroundColor
                            }}>
                                <Text style={{fontFamily: "open-sans"}}>{tag}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{
                    display: "flex", flexDirection: "row", alignItems: "center",
                    marginVertical: 5,
                    gap: 5
                }}>
                    <Entypo style={{
                        transform: [{translateY: 2}]
                    }} name="location-pin" size={16} />
                    <Text style={{
                        fontFamily: "kanit-light",
                        fontSize: 18
                    }}>{location}</Text>
                </View>
                <Text style={{
                    fontFamily: "kanit-bold",
                    fontSize: 18
                }}>About</Text>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap",
                }}>
                    <Text style={{
                        fontFamily: "kanit-light",
                        fontSize: 18
                    }}>🐾 {about} 🐾</Text>
                </View>
                <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: 15}}>
                    <Text style={{
                        // fontFamily: "Arial",
                        fontSize: 16
                    }}>{description}</Text>
                </View>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Button style={{width: 160, display: "flex", alignItems: "center", backgroundColor: "#C22929"}}><AntDesign name="hearto" size={20} style={{color: "#fff"}} /></Button>
                <Button style={{width: 160, display: "flex", alignItems: "center", backgroundColor: "#C03FD6"}} textStyle={{fontFamily: "kanit-light", color: "#fff"}}>Adopt Now</Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        position: "relative",
        overflow: "hidden"
    },
    image: {
        borderRadius: 20
    }
});

export default PetDetails;
