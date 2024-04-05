import React from "react";
import styles from "./styles";
import { ScrollView, Text} from "react-native";
import MvLists from "../../components/mvLists";
import Cabecalho from "../../components/header"

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.fundo}>
        <Cabecalho />
        <Text style={styles.Title}>Recomendados</Text>
        <MvLists navigation={navigation} />
        <Text style={styles.Title}>Em Alta</Text>
        <MvLists navigation={navigation} />
        </ScrollView>
    );

};

export default Home;