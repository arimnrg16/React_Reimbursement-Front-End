import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, ScrollView,TouchableOpacity } from 'react-native'
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
      <ScrollView style={{ marginBottom: 100, backgroundColor: "#fafafa" }}>

        <View style={{ padding: 30 }}>
          <Text style={myStyle.Title}>Date Request Medical</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.dateRequestMedical}
            onChangeText={(dateRequestMedical) => this.setState({ dateRequestMedical })}
            placeholder="DateRequestMedical"
          />
          <Text style={myStyle.Title}>Medication Type</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.medicationType}
            onChangeText={(medicationType) => this.setState({ medicationType })}
            placeholder="MedicationType"
          />
          <Text style={myStyle.Title}>Total Cost Nominal</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostNominal}
            onChangeText={(totalCostNominal) => this.setState({ totalCostNominal })}
            placeholder="TotalCostNominal"
          />
          <Text style={myStyle.Title}>Total Cost Reimburse</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostReimburse}
            onChangeText={(totalCostReimburse) => this.setState({ totalCostReimburse })}
            placeholder="TotalCostReimburse"
          />
          <Text style={myStyle.Title}>Proof Attcahment</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.proofAttach}
            onChangeText={(proofAttach) => this.setState({ proofAttach })}
            placeholder="ProofAttach"
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