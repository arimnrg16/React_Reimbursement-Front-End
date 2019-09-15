import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
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
export default class editovertime extends Component {

  constructor(props) {
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      typeOvertime: this.data.typeOvertime,
      dateOvertime: this.data.dateOvertime,
      startTime: this.data.startTime,
      finishTime: this.data.finishTime,
      totalOvertime: this.data.totalOvertime,
      departementOrGroup: this.data.departementOrGroup,
      projectName: this.data.projectName,
      requestTo: this.data.requestTo,
      transportReimbursement: this.data.transportReimbursement,
      mealReimbursement: this.data.mealReimbursement,
      proofAttcahment: this.data.proofAttcahment


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
      "projectName": this.state.projectName,
      "department": this.state.department,
      "requestTo": this.state.requestTo,
      "transportReimbursement": this.state.transportReimbursement,
      "mealReimbursement": this.state.mealReimbursement,
      "projectName": this.state.proofAttcahment


    }

    Resource.editTask(body, this.data.id)
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
          <Text style={myStyle.Title}>Text Overtime</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.typeOvertime}
            onChangeText={(typeOvertime) => this.setState({ typeOvertime })}
            placeholder="typeOvertime"
          />
          <Text style={myStyle.Title}>Date Overtime</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.dateOvertime}
            onChangeText={(dateOvertime) => this.setState({ dateOvertime })}
            placeholder={"dateOvertime"}
          />
          <Text style={myStyle.Title}>Start Time</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.startTime}
            onChangeText={(startTime) => this.setState({ startTime })}
            placeholder="startTime"
          />
          <Text style={myStyle.Title}>Finish Time</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.finishTime}
            onChangeText={(finishTime) => this.setState({ finishTime })}
            placeholder="finishTime"
          />
          <Text style={myStyle.Title}>Total Overtime</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.totalOvertime}
            onChangeText={(totalOvertime) => this.setState({ totalOvertime })}
            placeholder={"totalOvertime"}
          />
          <Text style={myStyle.Title}>Department Or Group</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.departementOrGroup}
            onChangeText={(departementOrGroup) => this.setState({ departementOrGroup })}
            placeholder="departementOrGroup"
          />
          <Text style={myStyle.Title}>Project Name</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.projectName}
            onChangeText={(projectName) => this.setState({ projectName })}
            placeholder="projectName"
          />
          <Text style={myStyle.Title}>Request To</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.requestTo}
            onChangeText={(requestTo) => this.setState({ requestTo })}
            placeholder={"requestTo"}
          />
          <Text style={myStyle.Title}>Transport Reimbursement</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.transportReimbursement}
            onChangeText={(transportReimbursement) => this.setState({ transportReimbursement })}
            placeholder="transportReimbursement"
          />
          <Text style={myStyle.Title}>MEal Reimbursement</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.mealReimbursement}
            onChangeText={(mealReimbursement) => this.setState({ mealReimbursement })}
            placeholder={"mealReimbursement"}
          />
          <Text style={myStyle.Title}>Proof Attachment</Text>
          <TextInput
            style={myStyle.form}
            value={this.state.proofAttcahment}
            onChangeText={(proofAttcahment) => this.setState({ proofAttcahment })}
            placeholder="proofAttcahment"
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