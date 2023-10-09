import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import Main from './Screens/Main';
import CreateSurvey from './Screens/CreateSurvey';
import AddQuestion from './Screens/AddQuestion';
import PreviousSurvey from './Screens/PreviousSurvey';
import AudienceSelection from './Screens/AudienceSelection';
import SemesterSelection from './Screens/SemesterSelection';
import SectionSelection from './Screens/SectionSelection';
import SignUp from './Screens/SignUp';
import Participate from './Screens/Participate';
import Attempt  from './Screens/Attempt';
import AdminMain from './Screens/AdminMain';
import Approved from './Screens/Approved';
import AddYesNo from './Screens/AddYesNo';
import Graph from './Screens/Graph';
import Template from './Screens/Template';
import PropTypes from 'deprecated-react-native-prop-types';
import AttemptedSurvey from './Screens/AttemptedSurvey';
import Piee from './Screens/Piee';
import Line from './Screens/Line';
import Talha from './Screens/Talha';
import TMain from './Screens/TMain';
import Multiple from './Screens/Multiple';
import Bar from './Screens/Bar';
import Pie from './Screens/Pie';
import Linee from './Screens/Linee';
import MaleFemale from './Screens/MaleFemale';
import FMLine from './Screens/FMLine';
import FMPie from './Screens/FMPie';
import FMBar from './Screens/FMBar';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerStyle: {
          backgroundColor: '#04c956', // added # symbol
        },
        headerTintColor: '#FFFFFF', // added # symbol
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center'
        },
      }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CreateSurvey" component={CreateSurvey} />
        <Stack.Screen name="AddQuestion" component={AddQuestion} />
        <Stack.Screen name="PreviousSurvey" component={PreviousSurvey} />
        <Stack.Screen name="AudienceSelection" component={AudienceSelection} />
        <Stack.Screen name="SemesterSelection" component={SemesterSelection} />
        <Stack.Screen name="SectionSelection" component={SectionSelection} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Participate" component={Participate} />
        <Stack.Screen name="Attempt" component={Attempt} />
        <Stack.Screen name="AdminMain" component={AdminMain} />
        <Stack.Screen name="Approved" component={Approved} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="AddYesNo" component={AddYesNo} />
        <Stack.Screen name="Template" component={Template} />
        <Stack.Screen name="AttemptedSurvey" component={AttemptedSurvey} />
        <Stack.Screen name="Piee" component={Piee} />
        <Stack.Screen name="Pie" component={Pie} />
        <Stack.Screen name="Linee" component={Linee} />
        <Stack.Screen name="Line" component={Line} />
        <Stack.Screen name="Talha" component={Talha} />
        <Stack.Screen name="TMain" component={TMain} />
        <Stack.Screen name="Multiple" component={Multiple} />
        <Stack.Screen name="Bar" component={Bar} />
        <Stack.Screen name="FMBar" component={FMBar} />
        <Stack.Screen name="FMLine" component={FMLine} />
        <Stack.Screen name="FMPie" component={FMPie} />
        <Stack.Screen name="MaleFemale" component={MaleFemale} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
