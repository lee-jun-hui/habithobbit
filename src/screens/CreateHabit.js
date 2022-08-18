import { useState, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import axiosConn from "../api/config";
import TextInput from "../components/loginTextInput";
import Button from "../components/loginButton";
import { styles } from "../styles/styles";
import BackButton from "../components/loginBackButton";
const CreateHabit = ({ navigation }) => {
  const [habitData, setHabitData] = useState({
    name: "",
    description: "",
    frequency: {
      repeat: "daily",
      mon: true,
      tues: true,
      wed: true,
      thurs: true,
      fri: true,
      sat: true,
      sun: true,
    },
    endDate: "",
  });
  const [habit, setHabit] = useState(null);
  const [habitDesc, setHabitDesc] = useState(null);

  const [openFreq, setOpenFreq] = useState(false);
  const [freqValue, setFreqValue] = useState(null);
  const [freq, setFreq] = useState([
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
  ]);
  const [openDay, setOpenDay] = useState(false);
  const [dayValue, setDayValue] = useState(["monday"]);
  const [day, setDay] = useState([
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
  ]);

  useEffect(() => {
    const prepare = () => {
      setHabitData((prevHabit) => ({
        ...prevHabit,
        name: habit,
        description: habitDesc,
        frequency: {
          repeat: freqValue,
          mon: dayValue.includes("monday"),
          tues: dayValue.includes("tuesday"),
          wed: dayValue.includes("wednesday"),
          thurs: dayValue.includes("thursday"),
          fri: dayValue.includes("friday"),
          sat: dayValue.includes("saturday"),
          sun: dayValue.includes("sunday"),
        },
      }));
    };
    prepare();
  }, [habit, habitDesc, freqValue, dayValue]);

  const clearForm = () => {
    setHabit("");
    setHabitDesc("");
    setFreqValue("weekly");
    setDayValue(["monday"]);
  };

  const createHabit = async () => {
    try {
      const url = "/api/v1/habits";
      const response = await axiosConn.post(url, habitData);
      if (response) {
        Alert.alert("SUCCESS", "Habit created!", [
          { text: "Ok", onPress: () => clearForm() },
        ]);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const selectAllDays = (value) => {
    if (value === "daily") {
      setDayValue([
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ]);
    }
  };

  const selectFreq = (value) => {
    if (value.length < 7) {
      setFreqValue("weekly");
    } else setFreqValue("daily");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.habitcontainer}>
        <BackButton goBack={navigation.goBack} />
        <Text style={styles.topHeader}>Create Habit</Text>
        <Text style={styles.headerTxt}>Habit</Text>
        <TextInput
          placeholder="Enter a Habit"
          onChangeText={(value) => {
            setHabit(value);
          }}
          value={habit}
        />
        <Text style={styles.headerTxt}>Habit Description</Text>
        <TextInput
          placeholder="Enter a Description"
          onChangeText={(value) => {
            setHabitDesc(value);
          }}
          value={habitDesc}
        />
        <Text style={styles.headerTxt}>Repeat</Text>
        <DropDownPicker
          style={styles.freqDropdown}
          placeholderStyle={styles.freqPlaceholder}
          textStyle={styles.freqText}
          dropDownContainerStyle={styles.dropDown}
          open={openFreq}
          value={freqValue}
          items={freq}
          setOpen={setOpenFreq}
          setValue={setFreqValue}
          setItems={setFreq}
          onChangeValue={(value) => {
            selectAllDays(value);
          }}
          mode="BADGE"
          placeholder="Select Frequency"
          //dropDownDirection="TOP"
          zIndex={3000}
        />
        <DropDownPicker
          style={styles.dayDropdown}
          listItemLabelStyle={styles.listItemDropdown}
          dropDownContainerStyle={styles.dropDown}
          badgeTextStyle={styles.badgeTextDropdown}
          open={openDay}
          value={dayValue}
          items={day}
          setOpen={setOpenDay}
          setValue={setDayValue}
          setItems={setDay}
          onChangeValue={(value) => {
            selectFreq(value);
          }}
          mode="BADGE"
          multiple={true}
          badgeColors={"#868AE0"}
          badgeDotColors={"#110580"}
          maxHeight={300}
          zIndex={2000}
        />
        <Button
          style={styles.button}
          onPress={() => {
            createHabit();
          }}
        >
          Create
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateHabit;
