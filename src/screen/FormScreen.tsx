import React, { useEffect, useState } from 'react';
import {
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormScreen = () => {
  const [input, setInput] = useState<string>('');

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('my-text', value);
    } catch (e) {
      // saving error
    }
  };

  const handleTextInputChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const { text } = event.nativeEvent;

    setInput(text);

    storeData(text);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('my-text');
        if (value !== null) {
          // value previously stored
          setInput(value);
        }
      } catch (e) {
        // error reading value
      }
    };

    getData();
  }, []);

  return (
    <TextInput
      style={styles.input}
      value={input}
      onChange={handleTextInputChange}
    />
  );
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
