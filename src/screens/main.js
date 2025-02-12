import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import {StyleSheet } from 'react-native';
const styles = StyleSheet.create({



  text: {
    fontSize: 20,
  },
})

export default class main extends Component {
  render() {
    return (
      <Container>

        <Content>
          <Card>

            <Card style={{ borderRadius: 20 }}>
              <CardItem bordered button onPress={() => this.props.navigation.navigate("IndexOvertimeScreen")} style={{ height: 80 }}>
                <Left>
                  <Thumbnail source={require("../assets/images/OT.png")} />
                  <Body >
                    <Text style={[styles.text, { color: '#000000' }] }>Overtime</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Card style={{ borderRadius: 20 }}>
              <CardItem bordered button onPress={() => this.props.navigation.navigate("IndexMedicalScreen")} style={{ height: 80 }}>
                <Left>
                  <Thumbnail source={require("../assets/images/M.png")} />
                  <Body>
                    <Text style={[styles.text, { color: '#000000' }] }>Medical</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Card style={{ borderRadius: 20 }}>
              <CardItem bordered button onPress={() => this.props.navigation.navigate("IndexBusinessTripScreen")} style={{ height: 80 }}>
                <Left>
                  <Thumbnail source={require("../assets/images/BT.png")} />
                  <Body>
                    <Text style={[styles.text, { color: '#000000' }] }>Business Trip</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Card style={{ borderRadius: 20 }}>
              <CardItem bordered button onPress={() => this.props.navigation.navigate("IndexQuickLeaveScreen")} style={{ height: 70 }}>
                <Left>
                  <Thumbnail source={require("../assets/images/QL.png")} />
                  <Body>
                    <Text style={[styles.text, { color: '#000000' }] }>Quick Leave</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

          </Card>
        </Content>
      </Container>
    );
  }
}