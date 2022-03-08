import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";


//Tesla logo, the menu burger and Header components 

const Header = () => {
    return(
        <View style={styles.container}>
            <Image styles={styles.image} source={require('../../assets/images/logo.png')} />
            <Image style={styles.menu} source={require('../../assets/images/menu.png')}/>
        </View>

    );
};

export default Header; 