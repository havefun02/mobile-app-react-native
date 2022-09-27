import { View } from 'react-native';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './main/main';
export default function Index() {
  return (
    <View>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}
