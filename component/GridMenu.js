import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Footer, FooterTab, Text, Card, CardItem, Fab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class GridMenu extends Component {
  
    render() {
        return (
        <Grid>
        <Col>
          <Row>
            <Card >
              <CardItem button onPress={() => this.props.navigation("Course")}>
                <Body style={{alignItems: 'center'}}>
                  <Image source={{uri: 'https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/icon-mobile/XCourse.png'}} style={{height: 50, width: 50, alignItems: 'center'}}/>
                  <Text textStyle={{fontSize: 12}}>
                    X-Course
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardItem>
                <Body>
                  <Image source={{uri: 'https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/icon-mobile/XTournament.png'}} style={{height: 50, width: 50, alignItems: 'center'}}/>
                  <Text>
                    X-Tournament
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Row>
        </Col>
        <Col>
        <Row>
        <Card>
          <CardItem>
            <Body>
              <Image source={{uri: 'https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/icon-mobile/XShop.png'}} style={{height: 50, width: 50, alignItems: 'center'}}/>
              <Text>
                X-Course
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Row>
      <Row>
        <Card>
          <CardItem>
            <Body>
              <Image source={{uri: 'https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/icon-mobile/XNearby.png'}} style={{height: 50, width: 50, alignItems: 'center'}}/>
              <Text>
                X-Tournament
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Row>
        </Col>
        <Col>
        <Row>
        <Card>
          <CardItem>
            <Body>
              <Image source={{uri: 'https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/icon-mobile/XDriving-Range.png'}} style={{height: 50, width: 50, alignItems: 'center'}}/>
              <Text>
                X-Course
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Row>
      <Row>
        <Card>
          <CardItem>
            <Body>
              <Image source={{uri: 'https://xgolfer-com-apk-android-application-mobile.rembon.co.id/v101/images/icon-mobile/XGroup.png'}} style={{height: 50, width: 50, alignItems: 'center'}}/>
              <Text>
                X-Tournament
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Row>
        </Col>
      </Grid>
        )
    };
}