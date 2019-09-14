import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableOpacity, FlatList, Text, View, Image, Alert } from 'react-native';
import { Icon, Right, Button, Card, CardItem, Left, Body, Thumbnail } from 'native-base'
// import { Button } from 'react-native-elements'
import Resource from '../network/Resource'

const styles = StyleSheet.create({


  container: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
  },
  Title: {
    fontSize: 18,
    fontFamily: "Lato-Black",
    color: '#000000'
  },
})

export default class indexQuickLeave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: []
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ loading: true })

    Resource.getTask()
      .then((res) => {
        //alert(JSON.stringify(res));
        this.setState({ loading: false, data: res.data })
      })
      .catch((err) => {
        alert(err)
      })
  }
  render() {
    return (
      <View>
        <Card style={{ borderRadius: 20, backgroundColor: "#228b22" }}>
          <CardItem bordered button onPress={() => this.props.navigation.navigate("RequestQuickLeaveScreen")} style={{ height: 70 }}>
            <Left>
              <Thumbnail source={require("../assets/images/button.png")} />
              <Body>
                <Text  style={[styles.text, { color: '#008000' }] }>Request Quick Leave</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>

        <FlatList
          refreshing={this.state.loading}
          onRefresh={() => this.getData()}
          style={{}}


          data={this.state.data}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("DetailquickleaveScreen",
                {
                  data: this.state.data[index]
                })
            }}>

              <View style={{ marginBottom: 20, padding: 20, borderBottomColor: "#000000", borderBottomWidth: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                 
                <Text style={styles.Title}>Monday, 22 Agustus 2019</Text>
                  <Text style={[styles.text, { color: '#008000' }] }>{item.projectName}</Text>
                </View>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => {
                  this.props.navigation.navigate("EditquickleaveScreen", {
                    data: this.state.data[index]
                  })
                }}>
                  <View style={{ padding: 5, justifyContent: "center", alignItems: "center", width: 30, height: 30, borderRadius: 15 }}>
                    <Image style={{ width: 20, height: 20, tintColor: "#000000" }} source={require("../assets/images/edit.png")} />
                  </View>
                </TouchableOpacity>

              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}