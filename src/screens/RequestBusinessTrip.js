import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Resource from '../network/Resource'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#EFEFEF",
    backgroundColor: "#FEFEFE",
    borderWidth: 1,
    height: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  }
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
      <View style={{ padding: 30 }}>
        <TextInput
          style={myStyle.form}
          value={this.state.dateBusinessTrip}
          onChangeText={(dateBusinessTrip) => this.setState({ dateBusinessTrip })}
          placeholder="DateBusinessTrip"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.from}
          onChangeText={(from) => this.setState({ from })}
          placeholder="From"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.to}
          onChangeText={(to) => this.setState({ to })}
          placeholder="To"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.totalCostNominal}
          onChangeText={(totalCostNominal) => this.setState({ totalCostNominal })}
          placeholder="TotalCostNominal"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.totalCostReimburse}
          onChangeText={(totalCostReimburse) => this.setState({ totalCostReimburse })}
          placeholder="TotalCostReimburse"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.proofAttachment}
          onChangeText={(proofAttachment) => this.setState({ proofAttachment })}
          placeholder="ProofAttachment"
        />

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.submitBusinessTrip()}>
          <View style={{ backgroundColor: "#F7CA18", padding: 10 }}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

