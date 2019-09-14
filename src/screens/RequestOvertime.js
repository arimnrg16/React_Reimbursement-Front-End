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



export default class RequestOvertime extends Component {

  constructor(props) {
    super(props)

    this.state = {
      typeOvertime: "",
      dateOvertime: "",
      startTime: "",
      finishTime: "",
      totalOvertime: "",
      departementOrGroup: "",
      projectName: "",
      requestTo: "",
      transportReimbursement: "",
      mealReimbursement: "",
      proofAttcahment: ""

    }
  }

  submitTask() {
    let body = {
      "typeOvertime": this.state.typeOvertime,
      "dateOvertime": this.state.dateOvertime,
      "startTime": this.state.startTime,
      "finishTime": this.state.finishTime,
      "totalOvertime": this.state.totalOvertime,
      "departementOrGroup": this.state.departementOrGroup,
      "projectName ": this.state.projectName,
      "requestTo": this.state.requestTo,
      "transportReimbursement": this.state.transportReimbursement,
      "mealReimbursement": this.state.mealReimbursement,
      "proofAttcahment": this.state.proofAttcahment
    }

    Resource.createTask(body)
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
      typeOvertime: "",
      dateOvertime: "",
      startTime: "",
      finishTime: "",
      totalOvertime: "",
      departementOrGroup: "",
      projectName: "",
      requestTo: "",
      transportReimbursement: "",
      mealReimbursement: "",
      proofAttcahment: ""

    })
  }


  render() {
    return (
      <ScrollView style={{ marginBottom: 100, backgroundColor: "#fafafa" }}>

        <View style={{ padding: 30 }}>
          <Text style={myStyle.Title}>Type Overtime</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.typeOvertime}
            onChangeText={(typeOvertime) => this.setState({ typeOvertime })}
            placeholder="TypeOvertime"
          />
          <Text style={myStyle.Title}>Date Overtime</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.dateOvertime}
            onChangeText={(dateOvertime) => this.setState({ dateOvertime })}
            placeholder="DateOvertime"
          />
          <Text style={myStyle.Title}>Start Time</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.startTime}
            onChangeText={(startTime) => this.setState({ startTime })}
            placeholder="StartTime"
          />
          <Text style={myStyle.Title}>Finish Time</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.finishTime}
            onChangeText={(finishTime) => this.setState({ finishTime })}
            placeholder="FinishTime"
          />
          <Text style={myStyle.Title}>Total Overtime</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalOvertime}
            onChangeText={(totalOvertime) => this.setState({ totalOvertime })}
            placeholder="TotalOvertime"
          />
          <Text style={myStyle.Title}>Department Or Group</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.departementOrGroup}
            onChangeText={(departementOrGroup) => this.setState({ departementOrGroup })}
            placeholder="DepartementOrGroup"
          />
          <Text style={myStyle.Title}>Project Name</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.projectName}
            onChangeText={(projectName) => this.setState({ projectName })}
            placeholder="ProjectName"
          />
          <Text style={myStyle.Title}>Request To</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.requestTo}
            onChangeText={(requestTo) => this.setState({ requestTo })}
            placeholder="RequestTo"
          />
          <Text style={myStyle.Title}>Transport Reimbursement</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.transportReimbursement}
            onChangeText={(transportReimbursement) => this.setState({ transportReimbursement })}
            placeholder="TransportReimbursement"
          />
          <Text style={myStyle.Title}>Meal Reimbursement</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.mealReimbursement}
            onChangeText={(mealReimbursement) => this.setState({ mealReimbursement })}
            placeholder="MealReimbursement"
          />
          <Text style={myStyle.Title}>Proof Attachment</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.proofAttcahment}
            onChangeText={(proofAttcahment) => this.setState({ proofAttcahment })}
            placeholder="ProofAttcahment"
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

