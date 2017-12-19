import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import {NavigationActions} from 'react-navigation';
const routes = ["Home", "Login"];
export default class SideBar extends React.Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
      }
    
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={{
              uri: "https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/pictures/bg.jpg"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/user/small_28300x300.png"
              }}
            />
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
