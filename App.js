import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Alert, Button} from 'react-native';
import InputView from "./components/InputView";

export default function App() {


  return (
    <View style={styles.container}>
      <InputView/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
