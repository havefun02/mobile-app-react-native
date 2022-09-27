import Nav from './nav';
import { View, StyleSheet } from 'react-native';
export default function Header() {
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'fixed',
    height: '50px',
    backgroundColor: 'blue'
  }
});
