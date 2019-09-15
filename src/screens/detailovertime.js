import React, { Component } from 'react'
import { Text, View, Button, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

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

export default class detailovertime extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <ScrollView>
        <View style={{ paddingTop: 30, paddingLeft: 40, paddingRight: 40 }}>
          <Text style={styles.Title}>TypeOvertime:</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.typeOvertime}</Text>

          <Text style={styles.Title}>DateOvertime:</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.dateOvertime}</Text>
          <Text style={styles.Title}>StartTime:</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.startTime}</Text>
          <Text style={styles.Title}>FinishTime:</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.finishTime}</Text>
          <Text style={styles.Title}>TotalOvertime: </Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.totalOvertime}</Text>
          <Text style={styles.Title}>DepartementOrGroup: </Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.departementOrGroup}</Text>
          <Text style={styles.Title}>ProjectName: </Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.projectName}</Text>
          <Text style={styles.Title}>RequestTo: </Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.requestTo}</Text>
          <Text style={styles.Title}>TransportReimbursement:</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.transportReimbursement}</Text>
          <Text style={styles.Title}>MealReimbursement: </Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.mealReimbursement}</Text>
          <Text style={styles.Title}>ProofAttachment: </Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.proofAttcahment}</Text>

        </View>

        <View style={styles.multiButtonContainer}>
          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
            this.props.navigation.navigate("EditovertimeScreen", {
              data: this.state.data[index]
            })
          }}>
            <View style={{ backgroundColor: "#2ecc71", padding: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, borderRadius: 15 }}>
              <Image style={{ width: 20, height: 20, tintColor: "#FFF" }} source={require("../assets/images/edit.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
            this.props.navigation.navigate("EditovertimeScreen", {
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