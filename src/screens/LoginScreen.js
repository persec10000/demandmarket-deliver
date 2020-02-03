import React from 'react';
import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import { Col, Row, Grid } from "react-native-easy-grid";
import { human, systemWeights } from 'react-native-typography';
import { withNavigation } from 'react-navigation';

import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../styles/global';

class LoginScreen extends React.Component {
    render () {
        return (
            <ImageBackground source={require('../assets/Background-padrao.png')} style={{width: '100%', height: '100%' }}>
                <Grid style={{paddingLeft: 16, paddingRight: 16, paddingTop: 32, paddingBottom: 32}}>

                    <Row size={20} style={{alignItems: 'flex-end', marginBottom: 16}}>
                        <Col>
                            <Text style={[human.title1White, systemWeights.bold]}>demand</Text>
                            <Text style={[human.title1White, systemWeights.bold]}>market</Text>
                            <Text style={human.caption2White}>demand driven economy</Text>
                        </Col>
                    </Row>

                    <Row size={65} style={[globalStyles.dropShadow,{paddingBottom: 16, paddingTop: 16}]}>
                        <LinearGradient
                            colors={['#FFFFFF', '#C8D6E5']}
                            locations={[0, 1]}
                            useAngle={true}
                            angle={203.07}
                            angleCenter={{ x: 0.5, y: 0.5}}
                            style={{ borderRadius: 25, flex: 1}}
                        >
                            <Grid style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 25, padding: 16}}>

                                <Row size={30} style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={[human.title1, systemWeights.light]}>Login</Text>
                                </Row>

                                <Row size={55}>
                                    <Col>
                                        <Input placeholder={'Your name...'} keyboardType={'email-address'} iconName={Platform.OS === 'ios' ? 'ios-person': 'md-person'} secure={false}/>
                                        <Input placeholder={'Your password...'} type={'email-address'} iconName={Platform.OS === 'ios' ? 'ios-lock': 'md-lock'} secure={true}/>
                                    </Col>
                                </Row>

                                <Row size={15}>
                                    <Button text={'Login'} onPress={() => this.props.navigation.navigate('Home')}/>
                                </Row>

                            </Grid>
                        </LinearGradient>
                    </Row>

                    <Row size={15} style={{justifyContent: 'center', marginTop: 8}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={[human.footnoteWhite, systemWeights.semibold]}>Sign up | </Text>
                        </TouchableOpacity>
                        <Text style={[human.footnoteWhite, systemWeights.light]}>Forgot password?</Text>
                    </Row>

                </Grid>
            </ImageBackground>
        );
    }
}

export default withNavigation(LoginScreen);
