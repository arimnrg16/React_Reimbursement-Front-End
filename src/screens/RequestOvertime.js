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
      <View style={{ padding: 30 }}>
        <Text>Type Overtime</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.typeOvertime}
          onChangeText={(typeOvertime) => this.setState({ typeOvertime })}
          placeholder="TypeOvertime"
        />
        <Text>Date Overtime</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.dateOvertime}
          onChangeText={(dateOvertime) => this.setState({ dateOvertime })}
          placeholder="DateOvertime"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.startTime}
          onChangeText={(startTime) => this.setState({ startTime })}
          placeholder="StartTime"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.finishTime}
          onChangeText={(finishTime) => this.setState({ finishTime })}
          placeholder="FinishTime"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.totalOvertime}
          onChangeText={(totalOvertime) => this.setState({ totalOvertime })}
          placeholder="TotalOvertime"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.departementOrGroup}
          onChangeText={(departementOrGroup) => this.setState({ departementOrGroup })}
          placeholder="DepartementOrGroup"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.projectName}
          onChangeText={(projectName) => this.setState({ projectName })}
          placeholder="ProjectName"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.requestTo}
          onChangeText={(requestTo) => this.setState({ requestTo })}
          placeholder="RequestTo"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.transportReimbursement}
          onChangeText={(transportReimbursement) => this.setState({ transportReimbursement })}
          placeholder="TransportReimbursement"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.mealReimbursement}
          onChangeText={(mealReimbursement) => this.setState({ mealReimbursement })}
          placeholder="MealReimbursement"
        />
        <TextInput
          style={myStyle.form}
          value={this.state.proofAttcahment}
          onChangeText={(proofAttcahment) => this.setState({ proofAttcahment })}
          placeholder="ProofAttcahment"
        />

        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.submitTask()}>
          <View style={{ backgroundColor: "#F7CA18", padding: 10 }}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

