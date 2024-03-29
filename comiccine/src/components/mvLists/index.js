import React from "react";
import { ScrollView } from "react-native";
import MvCard from "../mvCard";
import { MOVIES } from "../../dataset/movies";

const MvLists = () => {

    return (
        <ScrollView>
            {
                MOVIES.map(
                    (movie) => <MvCard movie={movie}/> 
                )
            }
        </ScrollView>
    )
}

export default MvLists;
