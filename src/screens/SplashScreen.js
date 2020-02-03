import React from 'react';
import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { human, systemWeights } from 'react-native-typography';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class SplashScreen extends React.Component {
    render () {
        return (
            <ImageBackground source={require('../assets/Background-padrao.png')} style={{width: '100%', height: '100%' }}>
                <Grid style={{paddingLeft: 16, paddingRight: 16, paddingTop: 32, paddingBottom: 32}}>
                    <Row>
                        <Col style={{justifyContent: 'center', padding: 32}}>

                            <Icon name={Platform.OS === 'ios' ? 'ios-checkmark': 'md-checkmark'}
                                  size={72}
                                  style={{color: 'white', padding: 6}}
                            />

                            <Text style={[human.largeTitleWhite, systemWeights.bold]}>Welcome to:</Text>
                            <Text style={[human.largeTitleWhite, systemWeights.bold, {fontSize: 72, lineHeight: 72}]}>demand</Text>
                            <Text style={[human.largeTitleWhite, systemWeights.bold, {fontSize: 72, lineHeight: 72}]}>market</Text>
                            <Text style={human.largeTitleWhite}>demand driven economy</Text>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={{justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{flexDirection: 'row'}}>
                                <Text style={[human.largeTitleWhite, systemWeights.semibold]}>Continue </Text>
                                <Icon name={Platform.OS === 'ios' ? 'ios-arrow-dropright-circle': 'md-arrow-dropright-circle'}
                                      size={34}
                                      style={{color: 'white', padding: 6}}
                                />
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </ImageBackground>
        );
    }
}

export default withNavigation(SplashScreen);
