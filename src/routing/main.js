import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import mainScreen from '../screens/main'


//Tampilan History dab Button Request
import indexBusinessTripScreen from '../screens/indexBusinessTrip'
import indexOvertimeScreen from '../screens/indexOvertime'
import indexMedicalScreen from '../screens/indexMedical'
import indexQuickLeaveScreen from '../screens/indexQuickLeave'

//Form/ Attribut yang tersedia
import RequestBusinessTripScreen from '../screens/RequestBusinessTrip'
import RequestQuickLeaveScreen from '../screens/RequestQuickLeave'
import RequestMedicalScreen from '../screens/RequestMedical'
import RequestOvertimeScreen from '../screens/RequestOvertime'

//Feature untuk empat Entity
import datailbusinesstripScreen from '../screens/datailbusinesstrip'
import detailquickleaveScreen from '../screens/detailquickleave'
import detailmedicalScreen from '../screens/detailmedical'
import detailovertimeScreen from '../screens/detailovertime'

import EditScreen from '../screens/edit'
import EditbusinesstripScreen from '../screens/editbusinesstrip'
import EditmedicalScreen from '../screens/editmedical'
import EditovertimeScreen from '../screens/editovertime'
import EditquickleaveScreen from '../screens/editquickleave'

import EditquickleavesScreen from '../screens/editquickleave'




import profileScreen from '../screens/profile'



const HeaderStyle = () => ({
  headerStyle: {
    backgroundColor: '#0000ff',
    textAlign: 'center',
    fontWeight: 'normal'
  },
  headerTintColor: '#000000',
})

const MainTab = createMaterialTopTabNavigator({
  MainTab: {
    screen: mainScreen,
    navigationOptions: (props) => ({
      title: "",
    })
  }

});

export default Main = createStackNavigator({
  MainScreen: {
    screen: MainTab,
    navigationOptions: (props) => ({
      title: "Beranda",
    })
  },
 
  DetailbusinesstripScreen: {
    screen: datailbusinesstripScreen,
    navigationOptions: (props) => ({
      title: "Details Request Business Trip",
    })
  },

  DetailmedicalScreen: {
    screen: detailmedicalScreen,
    navigationOptions: (props) => ({
      title: "Details Request Medical",
    })
  },

  DetailovertimeScreen: {
    screen: detailovertimeScreen,
    navigationOptions: (props) => ({
      title: "Details Request Overtime",
    })
  },

  DetailquickleaveScreen: {
    screen: detailquickleaveScreen,
    navigationOptions: (props) => ({
      title: "Details Request Quick Leave",
    })
  },

  
  IndexOvertimeScreen: {
    screen: indexOvertimeScreen,
    navigationOptions: (props) => ({
      title: "Overtime",
    })
  },



  IndexMedicalScreen: {
    screen: indexMedicalScreen,
    navigationOptions: (props) => ({
      title: "Medical",
    })
  },
  IndexBusinessTripScreen: {
    screen: indexBusinessTripScreen,
    navigationOptions: (props) => ({
      title: "Business Trip",
    })
  },
  IndexQuickLeaveScreen: {
    screen: indexQuickLeaveScreen,
    navigationOptions: (props) => ({
      title: "Quick Leave",
    })
  },

  RequestQuickLeaveScreen: {
    screen: RequestQuickLeaveScreen,
    navigationOptions: (props) => ({
      title: "Request Quick Leave",
    })
  },

  RequestMedicalScreen: {
    screen: RequestMedicalScreen,
    navigationOptions: (props) => ({
      title: "Request Medical",
    })
  },


  RequestOvertimeScreen: {
    screen: RequestOvertimeScreen,
    navigationOptions: (props) => ({
      title: "Request Overtime",
    })
  },

  RequestBusinessTripScreen: {
    screen: RequestBusinessTripScreen,
    navigationOptions: (props) => ({
      title: "Request Business Trip",
    })
  },




  EditScreen: {
    screen: EditScreen,
    navigationOptions: (props) => ({
      title: "Edit",
    })
  },

EditbusinesstripScreen: {
  screen: EditbusinesstripScreen,
  navigationOptions: (props) => ({
    title: "Edit Business Trip",
  })
},
EditmedicalScreen: {
  screen: EditmedicalScreen,
  navigationOptions: (props) => ({
    title: "Edit Medical",
  })
},
EditquickleaveScreen: {
  screen: EditquickleaveScreen,
  navigationOptions: (props) => ({
    title: "Edit Quick Leave",
  })
},

EditquickleavesScreen: {
  screen: EditquickleavesScreen,
  navigationOptions: (props) => ({
    title: "Edit Quick Leave",
  })
},

EditovertimeScreen: {
  screen: EditovertimeScreen,
  navigationOptions: (props) => ({
    title: "Edit Over Time",
  })
}





},



  {
    initialRouteName: "MainScreen",
    defaultNavigationOptions: HeaderStyle,
  });
