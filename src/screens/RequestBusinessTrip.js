import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
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


export default class RequestBusinessTrip extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dateBusinessTrip: "",
      from: "",
      to: "",
      totalCostNominal: "",
      totalCostReimburse: "",
      proofAttachment: ""
    }
  }

  submitBusinessTrip() {
    let body = {
      "dateBusinessTrip": this.state.dateBusinessTrip,
      "from": this.state.from,
      "to": this.state.to,
      "totalCostNominal": this.state.totalCostNominal,
      "totalCostReimburse": this.state.totalCostReimburse,
      "proofAttachment": this.state.proofAttachment

    }

    Resource.createBusinessTrip(body)
      .then((res) => {
        this.resetForm();
        alert("Submit Sukses")
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }
  resetForm() {
    this.setState({
      dateBusinessTrip: "",
      from: "",
      to: "",
      totalCostNominal: "",
      totalCostReimburse: "",
      proofAttachment: ""
    })
  }


  render() {
    return (
      <ScrollView style={{ marginBottom: 100, backgroundColor: "#fafafa" }}>
        <View style={{ padding: 30 }}>
          <Text style={myStyle.Title}>Date Business Trip</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.dateBusinessTrip}
            onChangeText={(dateBusinessTrip) => this.setState({ dateBusinessTrip })}
            placeholder="DateBusinessTrip"
          />
          <Text style={myStyle.Title}>From</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.from}
            onChangeText={(from) => this.setState({ from })}
            placeholder="From"
          />
          <Text style={myStyle.Title}>To</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.to}
            onChangeText={(to) => this.setState({ to })}
            placeholder="To"
          />
          <Text style={myStyle.Title}>Total Nominal Cost</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostNominal}
            onChangeText={(totalCostNominal) => this.setState({ totalCostNominal })}
            placeholder="TotalCostNominal"
          />
          <Text style={myStyle.Title}>Total Reimbursement</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostReimburse}
            onChangeText={(totalCostReimburse) => this.setState({ totalCostReimburse })}
            placeholder="TotalCostReimburse"
          />
          <Text style={myStyle.Title}>Proof Attcahment</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.proofAttachment}
            onChangeText={(proofAttachment) => this.setState({ proofAttachment })}
            placeholder="ProofAttachment"
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

