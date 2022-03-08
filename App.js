import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/CarsList'; 
import Header from './components/Header';


//home page components: render text (model name, etc..) 2render background image
//3.create separate component for CarItem, 5. buttons 

export default function App() {
  return (
    <View style={styles.Container}> 

        <Header />
        <CarsList/>
        <StatusBar style='auto'/>

                {/* <CarItem name={"Model X"}
                tagline={"Starting from $99, 777"}
                image={require('./assets/images/ModelX.jpeg')}/> */}  
    </View> 
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
});
