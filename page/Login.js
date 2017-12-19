import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Text, Card, CardItem, Body, Header, Form, Item, Button, Label, Input, Title, Left, Icon, Right } from 'native-base';
export default class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header noShadow={true}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Login</Title>
                </Body>
                <Right />
            </Header>
        )
      });
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                    <Form>
                        <Item floatingLabel >
                            <Label>Username</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button block style={{marginTop:20, padding:5}}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                    </Card>
                </Content>
            </Container>
        )
    };
}