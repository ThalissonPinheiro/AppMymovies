import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import MvCard from "../mvCard";
import { RECOMENDADOS, TERIR, ANIMACAO, ROMANTICA, BESTEIROL} from "../../dataset/movies";

const MvLists = ({ navigation, type }) => {
    const navegar = (filmes, type) => {
        navigation.navigate('Details', { filmes, type });
    };

    let data;

    if (type === "TERIR") {
        data = TERIR;
    } else if (type === "RECOMENDADOS") {
        data = RECOMENDADOS;
    } else if (type === "ANIMACAO") {
        data = ANIMACAO;
    } else if (type === "ROMANTICA") {
        data = ROMANTICA;
    } else if (type === "BESTEIROL") {
        data = BESTEIROL;
    }

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.horizontal.testee}
        >
            {data.map((movie) => (
                <MvCard
                    key={movie.title}
                    movie={movie}
                    onPress={() => navegar(movie, type)}
                />
            ))}
        </ScrollView>
    );
};

export default MvLists;