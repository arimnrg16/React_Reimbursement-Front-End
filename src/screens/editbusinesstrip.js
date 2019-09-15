import React, { Component } from 'react'
import { Text, View, TextInput, ScrollView,StyleSheet, TouchableOpacity, Image } from 'react-native'
import Resource from '../network/Resource'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#d9d9d9",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    height: 45,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.1,

    elevation: 0,
  },
  Title: {
    fontSize: 17,
    marginTop: 15,
    fontFamily: "Lato-Black",
    color: '#000000'
  },
})

export default class editbusinesstrip extends Component {

  constructor(props) {
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      dateBusinessTrip: this.data.dateBusinessTrip,
      from: this.data.from,
      to: this.data.to,
      totalCostNominal: this.data.totalCostReimburse,
      totalCostReimburse: this.data.totalCostReimburse,
      ImageUrl: this.data.ImageUrl,
      EmployeeId: this.data.EmployeeId


    }
  }

  submitBusinessTrip() {
    let body = {
      "dateBusinessTrip": this.state.dateBusinessTrip


    }

    Resource.editBusinessTrip(body, this.data.id)
      .then((res) => {
        this.resetForm();
        alert("Edit Sukses")
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }

  resetForm() {
    this.setState({
      dateBusinessTrip: "",
      from: "",
      totalCostNominal: "",
      totalCostReimburse: "",
      ImageUrl: "",
      EmployeeId: ""

    })
  }

  render() {
    return (
      <ScrollView style={{ marginBottom: 100, backgroundColor: "#fafafa" }}>
        <View style={{ padding: 30 }}>

          <Text style={myStyle.Title}>Date Busniess Trip</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.dateBusinessTrip}
            onChangeText={(dateBusinessTrip) => this.setState({ dateBusinessTrip })}
            placeholder="dateBusinessTrip"
          />

          <Text style={myStyle.Title}>From</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.from}
            onChangeText={(from) => this.setState({ from })}
            placeholder="from"
          />

          <Text style={myStyle.Title}>to</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.to}
            onChangeText={(to) => this.setState({ to })}
            placeholder="to"
          />

          <Text style={myStyle.Title}>Total Cost Nominal</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostNominal}
            onChangeText={(totalCostNominal) => this.setState({ totalCostNominal })}
            placeholder="totalCostNominal"
          />

          <Text style={myStyle.Title}>Total Cost Reimburse</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostReimburse}
            onChangeText={(totalCostReimburse) => this.setState({ totalCostReimburse })}
            placeholder="totalCostReimburse"
          />

          <Text style={myStyle.Title}>Image URL</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.ImageUrl}
            onChangeText={(ImageUrl) => this.setState({ ImageUrl })}
            placeholder="ImageURL"
          />





          <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.submitTask()}>
            <View style={{ backgroundColor: "#cfcfcf", padding: 15, height: 50, }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: "center" }}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}