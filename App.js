import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, Button, FlatList, SectionList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {

  // const [data, setData] = useState(100)
  //
  // const increment = () => {
  //   setData(data + 10)
  // }
  //
  // const decrement = () => {
  //   if (data <= 100) {
  //     console.warn("Minimum value is 100")
  //   } else {
  //     setData(data - 10)
  //   }
  //
  // }
  //
  // const users = [
  //     {
  //         id: 1,
  //         name: "Vinay Devil"
  //     },
  //     {
  //         id: 2,
  //         name: "Devil Arrived"
  //     },
  //     {
  //         id: 3,
  //         name: "Devil Started Playing"
  //     },
  //     {
  //         id: 4,
  //         name: "Devil Full Form"
  //     },
  //     {
  //         id: 5,
  //         name: "Devil Return"
  //     }
  // ];

  // const anotherUserList = [
  //     {
  //         id: 1,
  //         name: "Vinay",
  //         data: ['Html', 'Css', 'Javascript', 'React JS', 'React Native']
  //     },
  //     {
  //         id: 2,
  //         name: "Prabh Bawa",
  //         data: ['Video Editing', 'Graphic Designing']
  //     },
  //     {
  //         id: 3,
  //         name: "Hakam Singh",
  //         data: ['Stocks', 'Share Market']
  //     }
  // ];


    // const [show, setShow] = useState(true);

    const [showLoader, setShowLoader]  = useState(false);

    const displayLoader = () => {
      setShowLoader(true);

      setTimeout(() => {
        setShowLoader(false);
      }, 4000);
    }

    useEffect(() => {
      displayLoader();
    }, [])

  return (
    <View style={styles.container}>
      {/*<Text style={styles.textBase}>Data {data}</Text>*/}
      {/*<Button title={"Increase"} color={"#ae0000"} onPress={() => increment()} />*/}
      {/*<Button title={"Decease"} color={"#ae0000"} onPress={() => decrement()} />*/}
      {/*<Text style={styles.textBase}>Text Input</Text>*/}
      {/*<TextInput placeholder={"Enter Text"} style={{borderWidth: 2, width: "90%", padding: 20, borderColor: "lightgrey", margin: 30, borderRadius: 10}} />*/}
      {/*  FlatList */}
      {/*  <FlatList data={users} renderItem={({item}) => <Text style={styles.textBase}> {item.name} </Text>} keyExtractor={item => item.id} />*/}


      {/*  Section List is used when we have array inside array */}
      {/*  <SectionList*/}
      {/*      sections={anotherUserList}*/}
      {/*      renderItem={({ item }) => <Text>{item}</Text>}*/}
      {/*      renderSectionHeader={({section: {name}}) => (*/}
      {/*          <Text style={{fontWeight: "bold", color: "#ae0000", fontSize: 30}}>{name}</Text>*/}
      {/*      )}*/}
      {/*  />*/}

      {/*  <Button title={"Toggle Student"} color={"#ae0000"} onPress={() => setShow(!show)}></Button>*/}
      {/*  {show ? <Student /> : null}*/}

      {/* Activity Loader  */}

      <ActivityIndicator size={"large"} color={"#ae0000"} animating={showLoader}></ActivityIndicator>


        {!showLoader && <TouchableOpacity onPress={() => displayLoader()} style={{marginTop: 30 ,width: "90%", justifyContent: "center", alignItems: "center", padding: 20, borderRadius: 50, backgroundColor: "#ae0000"}}>
            <Text style={{color: "white", fontWeight: "bold"}}>Show Indicator</Text>
        </TouchableOpacity>}

      {/*  To create a radio we will use useState value to check specific value*/}




      <StatusBar style="auto" />
    </View>
  );
}


const Student = () => {
    // useEffect(() => {
    // //     To run useEffect hook on component unmount we will use return keyword
    //
    //     // console.warn("Component Mounted")
    //
    //     // return () => console.warn("Component Unmounted")
    // }, [])
    return (
        <View>
            <Text style={styles.textBase}>Student Component</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      marginTop: 80
  },
  textBase: {
      fontSize: 30,
      fontWeight: "bold"
  }
});
