import {ImageRequireSource} from "react-native";

export type AdoptDetails = {
    name: string,
    breed: string,
    age: number | string,
    image?: ImageRequireSource
}

export type LoginDetails = {
    email?: string,
    password?: string
}

export type RegistrationDetails = {
    email?: string,
    password?: string,
    "confirm_password?": string
}


export type PetData = {
    id?: string | number,
    name: string,
    age?: number,
    months?: number,
    colors: string[],
    breed: string,
    weight?: number,
    location?: string,
    about?: string,
    description: string,
    image?: ImageRequireSource | string
}
