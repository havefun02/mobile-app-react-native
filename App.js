import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Index from './component';
export default function App() {
  const [item, setItem] = useState([]);
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: '#ccc'
  },
  title: {
    color: 'red'
  },
  items: {
    color: '#000'
  }
});
