import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./styles";
import logo from "../../../assets/logo.svg"
import user from "../../../assets/user.jpeg"

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Image
                    source={logo}
                    style={styles.logo}
                />
                <Image
                    source={user}
                    style={styles.user}
                />

            </View>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="🔎   Procurar Filmes"
                />
            </View>
        </View>
    )
}

export default Header;