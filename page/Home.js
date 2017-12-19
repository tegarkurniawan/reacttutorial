import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import Expo from "expo";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Footer, FooterTab, Text, Card, CardItem, Fab } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import GridMenu from "../component/GridMenu";
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isReady: false,
      position: 1,
      interval: null,
      active: 'false'
    };
    
  }
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header noShadow={true}>
        <Left>
            <Button transparent onPress={() => navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({interval: setInterval(() => {
      this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
    }, 2000)});
    this.setState({ isReady: true });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container>           
            <Content>
                <ImageSlider
                        images={[
                            'https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg',
                            'https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg',
                            'https://image.tmdb.org/t/p/w780/xWPXlLKSLGUNYzPqxDyhfij7bBi.jpg',
                        ]}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({position})}/>
                <GridMenu navigation={navigate} />
            </Content>          
            <Footer>          
                <FooterTab>
                    <Button onPress={() => navigate("Course")}>
                      <Icon name="apps" />
                    </Button>
                    <Button>
                    <Icon name="camera" />
                    </Button>
                    <Button active>
                    <Icon active name="navigate" />
                    </Button>
                    <Button>
                    <Icon name="person" />
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
  }
}

