import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/login.png')} style={{ width: 200, height: 200 }} />
    
      <Text style={styles.titulo}>Join Us!</Text>

      <View style={styles.formulario}>

        <Text style={styles.label}>Your name:</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        />
        <Text style={styles.label}>Your email:</Text>
        <TextInput
        style={styles.input}
        placeholder="hello@gmail.com"
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
        style={styles.input}
        placeholder="********************"
        SecurityTextEnter={true}
        />
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Create an account</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  formulario: {
    width: '100%',
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },

  input: {
    backgroundColor: '#EBF7FF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D0E9F5',
  },

  botao: {
    backgroundColor: '#0099CC',
    width: '100%',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },

});
