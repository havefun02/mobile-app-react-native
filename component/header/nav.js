import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StyleSheet, View, Text } from 'react-native';
export default function Nav() {
  return (
    <View style={styles.container}>
      <Text>Application</Text>
    </View>
  );
}
const flexDirectionOptions = ['row', 'column'];
const justifyContentOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between'
];
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch'];

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '30%',
    backgroundColor: 'blue'
  }
});
