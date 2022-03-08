import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const ButtonHome = (props) => {
    // //the button colors depends on the type of button if it is primary or secondary button
    // const type = props.type;
    // //the buttons show the same lables so we need to set its contents as we used in CarItem index
    // const content = props.content;
    // const onPress = props.onPress;
    //we can destructure the above 3 lines into one line
    const { type, content, onPress} = props;

    const buttonColors = type === 'primary' ? 'black' : 'white';
    const textColors = type === 'primary' ? 'white' : 'black';

    return(
        <View style={styles.container}>
            {/** so when we have 2 diff. styles merging then we put them in an array */}
            <Pressable style={[styles.button, {backgroundColor: buttonColors}]}
                       onPress={() => onPress()
                        //console.warn("testing this")
                    }
            >

           <Text style={[styles.text, {color: textColors}]}> {content} </Text>
            </Pressable>
        </View>  
    );
}; 

export default ButtonHome;