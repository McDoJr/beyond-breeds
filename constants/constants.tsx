import {AdoptDetails, PetData} from "@/constants/types";
import {Platform} from "react-native";

export const IOS = Platform.OS === "ios";

export const icons: any = {
    // "home": require("@/assets/images/adopt.png"),
    "adopt": require("@/assets/images/adopt.png"),
    "mutual": require("@/assets/images/mutual.png"),
    "donate": require("@/assets/images/donate.png"),
    "veterinary": require("@/assets/images/veterinary.png"),


    "pets": require("@/assets/images/adopt.png"),
    "adopted": require("@/assets/images/mutual.png"),
    "users": require("@/assets/images/users.png"),
    "requests": require("@/assets/images/requests.png"),
}

export const mockData: PetData[] = [
    {
        name: "Adonis",
        breed: "Beagle",
        age: 1,
        colors: ["black", "white"],
        weight: 14,
        location: "Butuan City",
        about: "Meet Adonis, Your Playful Pal",
        description: "Adonis is a vibrant one-year-old black and white dog bursting with energy and affection! With his striking coat and playful personality, he's sure to capture your heart from the moment you meet him. ",
        image: require("@/assets/images/adonis.png")
    },
    {
        name: "Scrubby",
        breed: "Boxer",
        age: 0,
        colors: ["golden"],
        months: 3,
        weight: 4,
        location: "Butuan City",
        about: "Meet Jeff, The Golden Gem",
        description: "Jeff is a precious three-month-old Golden puppy ready to bring boundless joy and love into your life! With his fluffy golden fur and adorable puppy eyes, he's impossible to resist.",
        image: require("@/assets/images/scrubby.png")
    },
    {
        name: "Blacky",
        breed: "Burmese",
        age: 0,
        months: 1,
        weight: 2,
        colors: ["black"],
        location: "Butuan City",
        about: "Meet Blacky, The Mysterious Feline",
        description: "Blacky is a sleek and sophisticated cat with a coat as dark as midnight and eyes that gleam like polished onyx. At one year old, he exudes an air of mystery and elegance that is simply irresistible. ",
        image: require("@/assets/images/blacky.png")
    },
    // {
    //     name: "Drew",
    //     breed: "Birman",
    //     age: "1 year",
    //     image: require("@/assets/images/drew.png")
    // },
    // {
    //     name: "Regy",
    //     breed: "Buldog",
    //     age: "4 months",
    //     image: require("@/assets/images/regy.png")
    // },
    // {
    //     name: "Pantin",
    //     breed: "Shampoo",
    //     age: "8 months",
    //     image: require("@/assets/images/pantin.png")
    // },
]