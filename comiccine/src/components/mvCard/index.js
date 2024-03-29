import React from 'react';
import styles from './styles';

import { TouchableOpacity, Image, Text } from 'react-native';

const mvCard = (props) => {
    const { movie } = props;

    return (
        <TouchableOpacity>

            <Text style={styles.txt}>
                {movie.title}
            </Text>
            <Image
                style={styles.teste}
                source={{
                    uri: movie.poster_path,
                }}
            />
            <Text style={styles.txt}>
                {movie.release_date}
            </Text>

        </TouchableOpacity>
    );
}

export default mvCard;
