import React from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import MvCard from "../mvCard";
import { MOVIES } from "../../dataset/movies";

const MvLists = ({ navigation }) => {

    const navegar = (filmes) => {
        navigation.navigate('Details', { filmes });
    }
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.horizontal.testee}
        >
            {
                MOVIES.map(
                    (movie) => {
                        return <MvCard
                            key={movie.title}
                            movie={movie}
                            onPress={() => navegar(movie)}
                        />
                    }
                )
            }
        </ScrollView>
    )
}

export default MvLists;
