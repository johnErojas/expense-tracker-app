import React from "react";
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {View, Text} from "react-native";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import AllExpensesScreen from "./screens/AllExpensesScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";
import {GlobalStyles} from "./constants/AppConstants";
import {FaIcon} from "./components/fontawesome/Icons";
import {Ico} from "./components/fontawesome/IconNames";
import IconButton from "./components/UI/IconButton";
import ExpensesCtxProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OverviewGroup() {
    return <Tab.Navigator screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: "white",
        tabBarStyle: {
            backgroundColor: GlobalStyles.colors.primary500,
            paddingTop: 6
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarInactiveTintColor: "gray",
        headerRight: ({tintColor}) => <IconButton
            onPress={() => {
                navigation.navigate('ManageExpenses')
            }}
            icon={Ico.plus}
            color={tintColor}
            type="light"
            size={24}/>
    })}>
        <Tab.Screen
            name="RecentExpenses"
            component={RecentExpensesScreen}
            options={{
                title: "Recent Expenses",
                tabBarLabel: "Recent",
                tabBarIcon: ({color, size, focused}) => <Text style={{color: color, fontSize: size}}>
                    <FaIcon
                        icon={Ico.hourglass}
                        color={color}
                        size={size}
                        type={focused ? "duotone" : "light"}/>
                </Text>
            }}
        />
        <Tab.Screen
            name="AllExpenses"
            component={AllExpensesScreen}
            options={{
                title: "All Expenses",
                tabBarLabel: "All",
                tabBarIcon: ({color, size, focused}) => <Text style={{color: color, fontSize: size}}>
                    <FaIcon
                        icon={Ico.calendarDays}
                        color={color}
                        size={size}
                        type={focused ? "duotone" : "light"}/>
                </Text>
            }}
        />
    </Tab.Navigator>
}

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <ExpensesCtxProvider>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                        headerTintColor: "white",
                    }}>
                        <Stack.Screen name="Overview" component={OverviewGroup} options={{headerShown: false}}/>
                        <Stack.Screen
                            name="ManageExpenses"
                            component={ManageExpenseScreen}
                            options={{
                                presentation: "modal"
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpensesCtxProvider>
        </>
    );
}
