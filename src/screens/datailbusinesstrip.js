import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({

  multiButtonContainer: {
    margin: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Title: {
    fontSize: 25,
    marginTop: 20,
    fontFamily: "Lato-Black",
    color: '#000000'
  },
  Titl: {
    fontSize: 30,
    fontFamily: "Lato-Black",
    color: '#daa520'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
})

export default class datailbusinesstrip extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <ScrollView>
    <View style={{ paddingTop: 30, paddingLeft: 40, paddingRight: 40 }}>
          
         
          <Text style={styles.Title}>Date Business Trip :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.dateBusinessTrip}</Text>
          <Text style={styles.Title}>From :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.from}</Text>
          <Text style={styles.Title}>To :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.to}</Text>
          <Text style={styles.Title}>Total Cost Nominal :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.totalCostNominal}</Text>
          <Text style={styles.Title}>Total Cost Reimbursement :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.totalCostReimburse}</Text>
          <Text style={styles.Title}>ImageUrl :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.ImageUrl}</Text>
        
        </View>

        <View style={styles.multiButtonContainer}>
          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
            this.props.navigation.navigate("EditquickleaveScreen", {
              data: this.state.data[index]
            })
          }}>
            <View style={{ backgroundColor: "#2ecc71", padding: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, borderRadius: 15 }}>
              <Image style={{ width: 20, height: 20, tintColor: "#FFF" }} source={require("../assets/images/edit.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
            this.props.navigation.navigate("EditquickleaveScreen", {
              data: this.state.data[index]
            })
          }}>
            <View style={{ backgroundColor: "#F44336", padding: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, borderRadius: 15 }}>
              <Image style={{ width: 20, height: 20, tintColor: "#FFF" }} source={require("../assets/images/delete.png")} />
            </View>
          </TouchableOpacity>

          {/* <Button color="#ff0000"
            onPress={() => this.props.navigation.navigate("EditquickleaveScreen")} raised icon={{ name: 'av-timer' }} title='Cancel'
          /> */}
        </View>
      </ScrollView>

    )
  }
}