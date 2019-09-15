import React, { Component } from 'react'
import { Text, View, TextInput,ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
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


export default class editmedical extends Component {

  constructor(props) {
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      dateRequestMedical: this.data.dateRequestMedical,
      medicationType: this.data.medicationType,
      totalCostNominal: this.data.totalCostNominal,
      totalCostReimburse: this.data.totalCostReimburse,
      proofAttach: this.data.proofAttach

    }
  }

  submitMedical() {
    let body = {
      "dateRequestMedical": this.data.dateRequestMedical,
      "medicationType": this.data.medicationType,
      "totalCostNominal": this.data.totalCostNominal,
      "totalCostReimburse": this.data.totalCostReimburse,
      "proofAttach": this.data.proofAttach
    }

    Resource.editMedical(body, this.data.id)
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
            placeholder="dateRequestMedical"
          />
          <Text style={myStyle.Title}>Medication Type</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.medicationType}
            onChangeText={(medicationType) => this.setState({ medicationType })}
            placeholder={"medicationType"}
          />
          <Text style={myStyle.Title}>Total Cost Nominal</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostNominal}
            onChangeText={(totalCostNominal) => this.setState({ totalCostNominal })}
            placeholder="totalCostNominal"
          />
          <Text style={myStyle.Title}>Total Cost Reimbursement</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalCostReimburse}
            onChangeText={(totalCostReimburse) => this.setState({ totalCostReimburse })}
            placeholder="totalCostReimburse "
          />
          <Text style={myStyle.Title}>Proof Attach</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.proofAttach}
            onChangeText={(proofAttach) => this.setState({ proofAttach })}
            placeholder="proofAttach"
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