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
        <MvLists navigation={navigation} type="RECOMENDADOS"/>
        <Text style={styles.Title}>Terir</Text>
        <MvLists navigation={navigation} type="TERIR" />
        <Text style={styles.Title}>Animação</Text>
        <MvLists navigation={navigation} type="ANIMACAO" />
        <Text style={styles.Title}>Romântica</Text>
        <MvLists navigation={navigation} type="ROMANTICA" />
        <Text style={styles.Title}>Besteirol</Text>
        <MvLists navigation={navigation} type="BESTEIROL" />
        </ScrollView>
    );
};

export default Home;