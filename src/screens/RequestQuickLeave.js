import React, { Component } from 'react'
import { Text, View, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
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


export default class RequestQuickLeave extends Component {

  constructor(props){
    super(props)

    this.state = {
      Purpose : "",
      Department : "",
      ProjectName : ""
    }
  }

  submitTask(){
    let body = {
      "Purpose" : this.state.Purpose,
      "Department" : this.state.Department,
      "ProjectName" : this.state.ProjectName
     
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
resetForm(){
  this.setState({
    Purpose : "",
    Department : "",
    ProjectName : ""
    
  })
}


  render() {
    return (
      <View style={{padding: 30}}>
      <TextInput 
        style={myStyle.form}
        value={this.state.Purpose}
        onChangeText={(Purpose) => this.setState({Purpose})} 
        placeholder="Purpose"
      />    
       <TextInput 
        style={myStyle.form} 
        value={this.state.Department}
        onChangeText={(Department) => this.setState({Department})} 
        placeholder="Department"
      />   
       <TextInput 
        style={myStyle.form} 
         value={this.state.ProjectName}
         onChangeText={(ProjectName) => this.setState({ProjectName})} 
        placeholder="ProjectName"
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

