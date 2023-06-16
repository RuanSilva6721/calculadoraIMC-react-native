import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState(''); // Armazena o valor do peso
  const [altura, setAltura] = useState(''); // Armazena o valor da altura

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      const imcFormatado = imcCalculado.toFixed(2); // Limita o resultado do IMC a 2 casas decimais
      exibirResultado(imcFormatado);
    }
  };

  const exibirResultado = (imc) => {
    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3';
    }
    Alert.alert(
      'Resultado do IMC',
      `Seu IMC é: ${imc}\nClassificação: ${classificacao}`,
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      <TextInput
        placeholder="Peso (Kg)"
        keyboardType="numeric"
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        placeholder="Altura (cm)"
        keyboardType="numeric"
        style={styles.input}
        value={altura}
        onChangeText={setAltura}
      />
      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.textoButton}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 250,
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#DDD',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#41AEF4',
    borderRadius: 10,
    margin: 15,
    padding: 10,
  },
  textoButton: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
  },
});
