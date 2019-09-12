import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet,ScrollView, TouchableOpacity } from 'react-native'
import Resource from '../network/Resource'

const myStyle = StyleSheet.create({
  form: {
    borderColor: "#000000",
    backgroundColor: "#FEFEFE",
    borderWidth: 1,
    height: 50,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  Title: {
    fontSize: 17,
    marginTop: 15,
    fontFamily: "Lato-Black",
    color: '#000000'
  },
})


export default class RequestQuickLeave extends Component {

  constructor(props) {
    super(props)

    this.state = {
      date: "",
      startTime: "",
      finishTime: "",
      totalOvertime: "",
      purpose: "",
      projectName: "",
      requestTo: "",
      departmentId: "",
      groupId: "",
      note: ""

    }
  }

  submitTask() {
    let body = {
      "Date Now": this.state.date,
      "Start Time": this.state.startTime,
      "Finish Time": this.state.finishTime,
      "Total Overtime": this.state.totalOvertime,
      "Purpose": this.state.purpose,
      "Project Name": this.state.projectName,
      "Request To": this.state.requestTo,
      "Departement": this.state.departmentId,
      "Group": this.state.groupId,
      "Note": this.state.note
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
      date: "",
      startTime: "",
      finishTime: "",
      totalOvertime: "",
      purpose: "",
      projectName: "",
      requestTo: "",
      departmentId: "",
      groupId: "",
      note: ""

    })
  }


  render() {
    return (
      <ScrollView>
      <View style={{ padding: 30 }}>
        <Text style={myStyle.Title}>Date Now</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.date}
          onChangeText={(date) => this.setState({ date })}
          placeholder="Date Now"
        />
        <Text style={myStyle.Title}>Start Time</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.startTime}
          onChangeText={(startTime) => this.setState({ startTime })}
          placeholder="Start Time"
        />
        <Text style={myStyle.Title}>Finish Time</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.finishTime}
          onChangeText={(finishTime) => this.setState({ finishTime })}
          placeholder="Finish Time"
        />
        <Text style={myStyle.Title}>Total Overtime</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.totalOvertime}
          onChangeText={(totalOvertime) => this.setState({ totalOvertime })}
          placeholder="Total Overtime"
        />
        <Text style={myStyle.Title}>Purpose</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.purpose}
          onChangeText={(purpose) => this.setState({ purpose })}
          placeholder="Purpose"
        />
        <Text style={myStyle.Title}>Project Name</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.projectName}
          onChangeText={(projectName) => this.setState({ projectName })}
          placeholder="Project Name"
        />
        <Text style={myStyle.Title}>Request To</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.requestTo}
          onChangeText={(requestTo) => this.setState({ requestTo })}
          placeholder="Request To"
        />
        <Text style={myStyle.Title}>Department</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.departementId}
          onChangeText={(departementId) => this.setState({ departementId })}
          placeholder="Departement"
        />
        <Text style={myStyle.Title}>Group</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.groupId}
          onChangeText={(groupId) => this.setState({ groupId })}
          placeholder="Group Id"
        />
        <Text style={myStyle.Title}>Note</Text>
        <TextInput
          style={myStyle.form}
          value={this.state.note}
          onChangeText={(note) => this.setState({ note })}
          placeholder="Note"
        />


        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.submitTask()}>
          <View style={{ backgroundColor: "#F7CA18", padding: 15,height: 50, }}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>SUBMIT</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }
}

