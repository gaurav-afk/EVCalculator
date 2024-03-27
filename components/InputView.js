import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import ResultView from "./ResultView";

const InputView = () => {
  const [value, setValue] = useState('15000');
  const [gasVehicleCost, setGasVehicleCost] = useState('');
  const [gasVehicleMileage, setGasVehicleMileage] = useState('');
  const [electricVehicleCost, setElectricVehicleCost] = useState('');
  const [electricVehicleMileage, setElectricVehicleMileage] = useState('');

  const [distanceForGasCar, setDistanceForGasCar] = useState('NaN');
  const [distanceForElectricCar, setDistanceForElectricCar] = useState('NaN');
  const [extraDistanceElectricCarCovers, setExtraDistanceElectricCarCovers] = useState('NaN');

  const [savings, setSavings] = useState('NaN');

  // Options for annual distance covered by car 
  const options = [
    { label: "15000", value: "15000" },
    { label: "25000", value: "25000" },
    { label: "40000", value: "40000" }
  ];


  // Function to handle changes in gas vehicle cost input
  const handleGasVehicleCostChange = (text) => {
    setGasVehicleCost(text);
  };

  // Function to handle changes in gas vehicle mileage input
  const handleGasVehicleMileageChange = (text) => {
    setGasVehicleMileage(text);
  };

  // Function to handle changes in electric vehicle cost input
  const handleElectricVehicleCostChange = (text) => {
    setElectricVehicleCost(text);
  };

  // Function to handle changes in electric vehicle mileage input
  const handleElectricVehicleMileageChange = (text) => {
    setElectricVehicleMileage(text);
  };


  // function to calculate mileage and savings 
  const calculateSavings = () => {
    let annualGasCost = 0
    let annualElectricityCost = 0
    let saving = 0
    let gasCarDistance = gasVehicleMileage
    let electricCarDistance = 0
    let extraDistance = 0

    setDistanceForGasCar(parseFloat(gasCarDistance).toFixed(1))
    electricCarDistance = electricVehicleMileage*(gasVehicleCost/electricVehicleCost)
    setDistanceForElectricCar(electricCarDistance.toFixed(1))
    extraDistance = electricCarDistance - gasCarDistance
    setExtraDistanceElectricCarCovers(extraDistance.toFixed(1))

    annualGasCost = gasVehicleCost*(value/gasVehicleMileage)
    annualElectricityCost = electricVehicleCost*(value/electricVehicleMileage)
    saving = annualGasCost - annualElectricityCost
    setSavings(saving.toFixed(0))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingtext}>EV Savings Calculator</Text>

      {/* vehicle info section----------------------------------------------------------- */}
      <View style={styles.inputContainer}>
      <Text>Gas Vehicle Information</Text>
      <View style={styles.vehicleInputContainer}>
      <TextInput 
          style={styles.input}
          placeholder="Cost of 1 litre"
          textContentType="name"
          autoCapitalize="words"
          keyboardType="numeric"
          value={gasVehicleCost}
          onChangeText={handleGasVehicleCostChange}
        />
        <TextInput 
          style={styles.input}
          placeholder="Gas car mileage"
          textContentType="name"
          autoCapitalize="words"
          keyboardType="numeric"
          value={gasVehicleMileage}
          onChangeText={handleGasVehicleMileageChange}
        />
      </View>
      <Text>Electric Vehicle Information</Text>
      <View style={styles.vehicleInputContainer}>
      <TextInput 
          style={styles.input}
          placeholder="Cost of 1 kwH"
          textContentType="name"
          autoCapitalize="words"
          keyboardType="numeric"
          value={electricVehicleCost}
          onChangeText={handleElectricVehicleCostChange}
        />
        <TextInput 
          style={styles.input}
          placeholder="Electric car mileage"
          textContentType="name"
          autoCapitalize="words"
          keyboardType="numeric"
          value={electricVehicleMileage}
          onChangeText={handleElectricVehicleMileageChange}
        />
      </View>
       <Text style={styles.annualheadingText}>How many km do you drive each year?</Text>
       <SwitchSelector
         options={options}
         initial={0}
         onPress={value => setValue(value)}
         textStyle={styles.selectorText}
         selectedTextStyle={styles.selectedText}
         buttonColor="grey"
         borderColor="grey"
         hasPadding
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={calculateSavings}>
      <Text style={styles.buttontextStyle}>Estimated savings</Text>
      </TouchableOpacity>
      </View>
      
      {/* result info section--------------------------------------------------------------- */}

      <ResultView 
      distanceForGasCar={distanceForGasCar} 
      distanceForElectricCar={distanceForElectricCar} 
      extraDistanceElectricCarCovers={extraDistanceElectricCarCovers} 
      savings={savings} 
      />
    </View>


  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    inputContainer: {
        width: '100%',
        alignSelf: 'flex-start'
    },
    headingtext: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    vehicleInputContainer: {
      flexDirection: 'row'
    },
    input: {
      marginVertical: 10,
      width: '45%',
      marginHorizontal: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      borderRadius: 5,
    },
    annualheadingText: {
        marginVertical: 5
    },
    buttonStyle: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        marginVertical: 25,
        alignItems: 'center'
    },
    buttontextStyle: {
        fontWeight: 'bold'
    },
    picker: {
      height: 50,
      width: 150,
    },
    distanceResultContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10,
    },
    distanceText: {
      marginHorizontal: 10
    }
  });

  export default InputView;