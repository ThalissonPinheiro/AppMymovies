import React from 'react';
import styles from './styles';
import { TouchableOpacity, Image, Text, ScrollView, } from 'react-native';

const mvCard = (props) => {
    const { movie, onPress } = props;

    return (
        <ScrollView
        >
            <TouchableOpacity onPress={onPress}>

                <Text style={styles.txt}>
                    {movie.title}
                </Text>
                <Image
                    style={styles.teste}
                    source={{
                        uri: movie.poster_path,
                    }}
                />
            </TouchableOpacity>
        </ScrollView>

    );
}

export default mvCard;
