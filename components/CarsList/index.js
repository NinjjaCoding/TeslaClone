import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from '../CarItem'


//here we need to render a list of cars...b

const CarsList = () => {
    return(
        <View>
            <FlatList 
                data={cars}
                renderItem={({ item }) => <CarItem car={item}  />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}

            />
        </View>
    );
};

export default CarsList;