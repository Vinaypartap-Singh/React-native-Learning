import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Modal,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CreateMaterialTopTabNavigator from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";
import Posts from "./src/components/Posts";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
// const Tabs = CreateMaterialTopTabNavigator();

const Home = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold", fontSize: 40 }}>Home Page</Text>
      <Button
        title={"About Page"}
        onPress={() => props.navigation.navigate("about")}
      />
      <Button
        title={"Posts Page"}
        onPress={() => props.navigation.navigate("posts")}
      />
    </View>
  );
};

const AboutPage = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40 }}>About Student</Text>
      <Button
        title={"Students Page"}
        onPress={() => props.navigation.navigate("student")}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name={"About"} component={AboutPage} />
        <Stack.Screen
          name={"Student"}
          component={Student}
          options={{
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen name={"posts"} options={{headerTitle: ""}} component={Posts} />
      </Stack.Navigator>

      {/* <Tabs.Navigator>
        <Tabs.Screen name={"Home"} component={Home} />
        <Tabs.Screen name={"about"} component={AboutPage} />
        <Tabs.Screen name={"student"} component={Student} />
        <Tabs.Screen name={"posts"} component={Posts} />
      </Tabs.Navigator> */}
    </NavigationContainer>
  );
}

const Student = () => {
  return (
    <View>
      <Text style={styles.textBase}>Student Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    marginTop: 80,
    marginBottom: 60,
  },
  textBase: {
    fontSize: 30,
  },
});
