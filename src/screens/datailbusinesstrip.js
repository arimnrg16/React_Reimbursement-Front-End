import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default class datailbusinesstrip extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <View>
        <View style={{ padding: 20 }}>
          <Text>dateBusinessTrip: {this.data.dateBusinessTrip}</Text>
         
        </View>

        <View style={styles.multiButtonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("EditbusinesstripScreen")} raised icon={{ name: 'av-timer' }} title='Edit'
          />
          <Button color="#ff0000"
            onPress={() => this.props.navigation.navigate("EditScreen")} raised icon={{ name: 'av-timer' }} title='Cancel'
          />
        </View>
      </View>

    )
  }
}