import React from 'react';
import { Text, ScrollView, Image, View, TouchableOpacity } from 'react-native';
import { RECOMENDADOS, TERIR, ANIMACAO, ROMANTICA, BESTEIROL } from '../../dataset/movies';
import styles from './styles';

const Details = ({ route }) => {
    
    const { filmes, type } = route.params;

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

    const movie = data.find(movie => movie.title === filmes.title);

    console.log(movie);

    return (
        <ScrollView style={styles.back}>
             <Text style={styles.data}>
                {movie.release_date}
            </Text>
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

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home') }>
                <Text style={styles.texto}>
                    Voltar a Home
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

export default Details;
