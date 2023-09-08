import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const FormScreen = () => {
  return <TextInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default FormScreen;
