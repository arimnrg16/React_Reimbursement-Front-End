import React, { Component } from 'react'
import { Text, View, Button, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Resource from '../network/Resource'

const styles = StyleSheet.create({

  multiButtonContainer: {
    margin: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Title: {
    fontSize: 25,
    marginTop: 20,
    fontFamily: "Lato-Black",
    color: '#000000'
  },
  Titl: {
    fontSize: 30,
    fontFamily: "Lato-Black",
    color: '#daa520'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
})


export default class detailquickleave extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam("data", null)
  }
  render() {
    return (
      <ScrollView>

        <View style={{ paddingTop: 30, paddingLeft: 40, paddingRight: 40 }}>
          
          <Text style={styles.Title}>Date Now :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.date}</Text>
          <Text style={styles.Title}>Start Time :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.startTime}</Text>
          <Text style={styles.Title}>Finish Time :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.finishTime}</Text>
          <Text style={styles.Title}>Total Overtime :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.totalOvertime}</Text>
          <Text style={styles.Title}>Purpose :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.purpose}</Text>
          <Text style={styles.Title}>Project Name :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.projectName}</Text>
          <Text style={styles.Title}>Request To :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.requestTo}</Text>
          <Text style={styles.Title}>Department :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.departmentId}</Text>
          <Text style={styles.Title}>Group :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.groupId}</Text>
          <Text style={styles.Title}>Note :</Text>
          <Text style={[styles.text, { color: '#008000' }]}>{this.data.note}</Text>
          
        </View>

        <View style={styles.multiButtonContainer}>
          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
            this.props.navigation.navigate("EditquickleaveScreen", {
              data: this.state.data[index]
            })
          }}>
            <View style={{ backgroundColor: "#2ecc71", padding: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, borderRadius: 15 }}>
              <Image style={{ width: 20, height: 20, tintColor: "#FFF" }} source={require("../assets/images/edit.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
            this.props.navigation.navigate("EditquickleaveScreen", {
              data: this.state.data[index]
            })
          }}>
            <View style={{ backgroundColor: "#F44336", padding: 5, justifyContent: "center", alignItems: "center", width: 50, height: 50, borderRadius: 15 }}>
              <Image style={{ width: 20, height: 20, tintColor: "#FFF" }} source={require("../assets/images/delete.png")} />
            </View>
          </TouchableOpacity>

          {/* <Button color="#ff0000"
            onPress={() => this.props.navigation.navigate("EditquickleaveScreen")} raised icon={{ name: 'av-timer' }} title='Cancel'
          /> */}
        </View>
      </ScrollView>

    )
  }
}