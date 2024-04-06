import React from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import { MOVIES_DETAILS } from '../../dataset/movies';
import styles from './styles';

const Details = ({ route }) => {
    const { filmes } = route.params;
    const movie = MOVIES_DETAILS.find(
        movie => movie.title === filmes.title);

    return (
        <ScrollView style={styles.back}>
            <Text style={styles.vie}>
                👁{movie.popularity}
            </Text>
            <Text style={styles.star}>
                ⭐{movie.vote_average}
            </Text>

            <Image
                style={styles.img}
                source={{ uri: movie.backdrop_path }}
            />
            <View style={styles.overlay}></View>
            <Image
                style={styles.card}
                source={{
                    uri: movie.poster_path
                }}
            />
            <Text style={styles.titulo}>
                {movie.title}
            </Text>
            <Text style={{ color: '#D8315B', marginLeft: '12%', marginTop: 10, fontSize: 20, fontWeight: 'bold', }}>Sinopse</Text>
            <Text style={styles.sub}>
                {movie.overview}
            </Text>

        </ScrollView>
    );
}

export default Details;
