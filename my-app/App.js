import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <text style= {styles.text}>Meu 1º app</text>
      <Image source = {require('./assets/image.png')} style={styles.logo} />
      <Image source = {require('./assets/image.png')} style={styles.logo2} />
      <TextInput style = {styles.input} placeholder = 'Digite o seu nome:'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontsize:30,
    fontweight: 'bold',
    color: 'red',
  }, 
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    opacity: 0.8,
  },
  logo2: {
    width: 200,
    height: 200,
    marginBottom: 20,
    opacity: 0.8,
},
Input: {
  width: 300,
  height
}
});
