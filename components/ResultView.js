import { StyleSheet, Text, View} from 'react-native';

const ResultView = (props) => {

  return (
    <View style={styles.container}>
      {/* result info section--------------------------------------------- */}

      <Text>For the price of 1 liter of gas, you can travel:</Text>
      <View style={styles.distanceResultContainer}>
        <View style={styles.gasBoxView}>
          <Text style={styles.resultText}> {props.distanceForGasCar} </Text>
          <Text > km </Text>
        </View>
        <View style={styles.electricBoxView}>
          <Text style={styles.resultText}> {props.distanceForElectricCar} </Text>
          <Text > km </Text></View>
        <View style={styles.extraDistanceBoxView}>
          <Text style={styles.resultText}> {props.extraDistanceElectricCarCovers} </Text>
          <Text > km more</Text></View>
      </View>
      <Text>By switching to electric, you obtain:</Text>
      <View style={styles.finalSavingsBox}>
         <Text style={styles.finalSavingsText}>  ${props.savings}  </Text>
         <Text style={styles.finalSavingsTextDescription}> in savings per year  </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    distanceResultContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
      width: '100%'
    },
    gasBoxView: {
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 20,
      backgroundColor: 'pink',
      borderRadius: 10
    },
    electricBoxView: {
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 20,
      backgroundColor: 'cyan',
      borderRadius: 10
    },
    extraDistanceBoxView: {
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 20,
      backgroundColor: 'orange',
      borderRadius: 10
    },
    resultText: {
      fontSize: 25,
      fontWeight: 'bold'
    },
    finalSavingsBox: {
        backgroundColor: 'black',
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10,
        width: '100%'
    },
    finalSavingsText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    },
    finalSavingsTextDescription: {
      color: 'white',
    }
  });

  export default ResultView;