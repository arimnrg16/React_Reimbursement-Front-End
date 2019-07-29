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


export default class RequestMedical extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dateRequestMedical: "",
      medicationType: "",
      totalCostNominal: "",
      totalCostReimburse: "",
      proofAttach: ""
    }
  }

  submitMedical() {
    let body = {
      "dateRequestMedical": this.state.dateRequestMedical,
      "medicationType": this.state.medicationType,
      "totalCostNominal": this.state.totalCostNominal,
      "totalCostReimburse": this.state.totalCostReimburse,
      "proofAttach": this.state.proofAttach

    }

    Resource.createMedical(body)
      .then((res) => {
        this.resetForm();
        alert(JSON.stringify(res));
        alert("Submit Sukses")
      })
      .catch((err) => {
        alert(JSON.stringify(err))
      })
  }
  resetForm() {
    this.setState({
      dateRequestMedical: "",
      medicationType: "",
      totalCostNominal: "",
      totalCostReimburse: "",
      proofAttach: ""
    })
  }

  render() {
    return (
      <View style={{ padding: 30 }}>
        <TextInput
          style={myStyle.form}
          value={this.state.dateRequestMedical}
          onChangeText={(dateRequestMedical) => this.setState({ dateRequestMedical })}
          placeholder="DateRequestMedical"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.medicationType}
          onChangeText={(medicationType) => this.setState({ medicationType })}
          placeholder="MedicationType"
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
          value={this.state.proofAttach}
          onChangeText={(proofAttach) => this.setState({ proofAttach })}
          placeholder="ProofAttach"
        />
        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.submitMedical()}>
          <View style={{ backgroundColor: "#F7CA18", padding: 10 }}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}