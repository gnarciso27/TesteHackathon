import React from "react";
import { SafeAreaView, View } from "react-native";
import ListaHorizontal from './LH';



const Home = () => {
    const data = [
        '#FF6633',
        '#FFB399',
        '#FF33FF',
        '#FFFF99',
        '#00B3E6',
        '#E6B333',
        '#3366E6',
        '#999966',
        '#99FF99',
        '#834D4D',
    ];
    return (
        <SafeAreaView>
            <ListaHorizontal data={data} />
        </SafeAreaView>
    );
};

export default Home;
