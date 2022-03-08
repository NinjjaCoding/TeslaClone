import React from "react";
import { Text, View, ImageBackground } from "react-native";
import ButtonsHome from "../ButtonsHome";
import styles from "./styles";

const CarItem = (props ) => {
  //now in order to have actual data for models displayed on screen--name of cars, taglines--price line, and image of the cars
  const {name, tagline, image } = props.car; //we need to pass these properties on <CarItem /> in App.js


    return(
        <View style={styles.carContainer}>
                {/**background image: for this we use a React component called ImageBackground */}
            <ImageBackground 
                    source={image}
                    style={styles.image}/>
        
                  {/**model and price text components---but we cannot keep repeating this code for each model on home screen--we need to create a component from it and then use it everwhere needed */}
              <View style={styles.titles}>
                  <Text style={styles.title}>{name} </Text>
                  <Text style={styles.subTitle}>{tagline}</Text>
              </View>  

                  {/** buttons on the bottom of homescreen */}
            <View style={styles.buttonContainer}>
                <ButtonsHome type="primary"
                    content={'Custom Orders'}
                    onPress={() => {
                      console.warn( {data}, "Custom Order Button was pressed");
                    }} />
                <ButtonsHome type="secondary"
                    content={'Existing Inventory'}
                    onPress={() => {
                      console.warn( {data}, "Existing Inventory Button was pressed");
                    }} /> 
            </View>
           

        
      </View>
    );
};

export default CarItem;