import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CreateHabit = () => {
  const [date, setDate] = useState(new Date())

  const [habit, setHabit] = useState(null);
  const [habitDesc, setHabitDesc] = useState(null);
  
  const [openFreq, setOpenFreq] = useState(false);
  const [freqValue, setFreqValue] = useState(null);
  const [freq, setFreq] = useState([
    {label: 'Daily', value: 'daily'},
    {label: 'Weekly', value: 'weekly'},
  ]);
  const [openDay, setOpenDay] = useState(false);
  const [dayValue, setDayValue] = useState(['monday']);
  const [day, setDay] = useState([
    {label: 'Monday', value: 'monday'},
    {label: 'Tuesday', value: 'tuesday'},
    {label: 'Wednesday', value: 'wednesday'},
    {label: 'Thursday', value: 'thursday'},
    {label: 'Friday', value: 'friday'},
    {label: 'Saturday', value: 'saturday'},
    {label: 'Sunday', value: 'sunday'},
  ]);

  const createHabit = () => {
    console.log(freqValue);
    console.log(dayValue);
    return (
        alert('Habit created')
    )
  }

  const selectAllDays = (value) => {
    if (value === 'daily') {
        setDayValue([
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
        ])
    } 
  }

  const selectFreq = (value) => {
    if (value.length < 7) {
        setFreqValue('weekly')
    } else (
        setFreqValue('daily')
    )
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.topHeader}>Create Habit</Text>
      <Text style={styles.headerTxt}>Habit</Text>
        <TextInput
            style={styles.inputTxt}
            placeholder='Enter a Habit'
            onChange={setHabit}
            value={habit} />
      <Text style={styles.headerTxt}>Habit Description</Text>
        <TextInput
            style={styles.inputTxt}
            placeholder='Enter a Description'
            onChange={setHabitDesc}
            value={habitDesc} />
      <Text style={styles.headerTxt}>Repeat</Text>
        <DropDownPicker
            style={styles.freqDropdown}
            placeholderStyle={styles.freqPlaceholder}
            textStyle={styles.freqText}
            open={openFreq}
            value={freqValue}
            items={freq}
            setOpen={setOpenFreq}
            setValue={setFreqValue}
            setItems={setFreq}
            onChangeValue={(value) => {selectAllDays(value)}}
            mode='BADGE'
            placeholder='Select Frequency'
            //dropDownDirection="TOP"
            zIndex={3000}
        />
        <DropDownPicker
            style={styles.dayDropdown}
            open={openDay}
            value={dayValue}
            items={day}
            setOpen={setOpenDay}
            setValue={setDayValue}
            setItems={setDay}
            onChangeValue={(value) => {selectFreq(value)}}
            mode='BADGE'
            multiple={true}
            badgeColors={'#868AE0'}
            badgeDotColors={'#110580'}
            maxHeight={300}
            zIndex={2000}
        />
      <Text style={styles.headerTxt}>End Date</Text>
      <TouchableOpacity
            style={styles.button}
            onPress={createHabit}>
        <Text style={styles.buttonTxt}>Create</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
    padding: 10,
    width: '100%',
  },
  topHeader: {
    color: '#110580',
    fontSize: 25,
  },
  headerTxt:{
    color: '#110580',
    fontSize: 20,
    alignSelf: 'flex-start', 
    margin: 10,
  },
  inputTxt: {
    fontSize: 20,
    borderWidth: 1,
    width: '100%',
    padding: 15,
    borderRadius: 30,
  },
  freqDropdown: {
    borderRadius: 30,
    marginBottom: 10,
    fontSize: 20,
    zIndex: 1,
  },
  freqPlaceholder: {
    color: 'lightgrey',
  },
  freqText: {
    fontSize: 20
  },
  dayDropdown: {
    borderRadius: 30,
  },
  button: {
    width: 200,
    backgroundColor: '#110580',
    padding: 10,
    marginTop: 300,
    borderRadius: 30,
  },
  buttonTxt: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CreateHabit 