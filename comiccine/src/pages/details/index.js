import React from 'react';
import { Text, ScrollView, Image } from 'react-native';
import { MOVIES_DETAILS } from '../../dataset/movies';
import styles from './styles';

const Details = ({ route }) => {
    const { filmes } = route.params;
    const movie = MOVIES_DETAILS.find(
        movie => movie.title === filmes.title);

    console.log(movie);

    return (
        <ScrollView>
            <Image
                style={styles.img}
                source={{ uri: movie.backdrop_path}}
            />

            <Text style={styles.titulo}>
                {movie.title}
            </Text>

        </ScrollView>
    );
}

export default Details;
