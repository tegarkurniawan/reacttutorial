import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Header, Form, Item, Button, Label, Input, Title, Left, Icon, Right } from 'native-base';
export default class Course extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header noShadow={true}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Course</Title>
                </Body>
                <Right />
            </Header>
        )
      });
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{marginBottom: 15}}>
                        <CardItem>
                            <Body>
                                <Text>This is just a basic card with some text to boot.</Text>
                                <Text>Like it? Keep Scrolling...</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    };
}