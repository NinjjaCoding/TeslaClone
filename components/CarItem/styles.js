import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    titles: {
      marginTop: '30%',
      width: '100%',
        alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '500'
    },
    subTitle: {
      fontSize: 16,
      color: '#5c5e62'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute', //without the titles will not show up
  
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 70,
      width: '100%',
    }

});

export default styles;