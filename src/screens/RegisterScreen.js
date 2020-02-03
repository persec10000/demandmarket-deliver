import React from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/Ionicons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { human, systemWeights } from 'react-native-typography';
import ImagePicker from 'react-native-image-picker';

import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import globalStyles from '../styles/global';

const imagePickerOptions = {
    title: 'Select Avatar',
    mediaType: 'photo',
};

export default class RegisterScreen extends React.Component {

    state = {
        avatarSource: null
    };

    render () {
        return (
            <ImageBackground source={require('../assets/Background-padrao.png')} style={{width: '100%', height: '100%' }}>
                <Grid style={{paddingLeft: 16, paddingRight: 16, paddingTop: 64, paddingBottom: 32}}>

                    <Row size={90} style={[globalStyles.dropShadow,{paddingBottom: 16, paddingTop: 16}]}>
                        <LinearGradient
                            colors={['#FFFFFF', '#C8D6E5']}
                            locations={[0, 1]}
                            useAngle={true}
                            angle={203.07}
                            angleCenter={{ x: 0.5, y: 0.5}}
                            style={{ borderRadius: 25, flex: 1}}
                        >
                            <Grid style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderRadius: 25, padding: 16}}>

                                <Row size={15} style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={[human.title1, systemWeights.light]}>Sign Up</Text>
                                </Row>

                                <Row size={20}>
                                    <View style={[globalStyles.dropShadow,
                                        {
                                            width: 80,
                                            height: 80,
                                            borderRadius: 40,
                                            borderWidth: 5,
                                            borderColor: '#ffffff',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }]}>
                                        <ImageBackground source={this.state.avatarSource}
                                                         imageStyle={{ borderRadius: 40}}
                                                         style={{width: '100%', height: '100%'}}
x                                        >
                                            <TouchableOpacity onPress={() => this._showImagePicker()} style={{position: 'absolute', right: 0, bottom: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: '#FE6819', alignItems: 'center'}}>
                                                <Icon name={Platform.OS === 'ios'?  'ios-camera':'md-camera'} style={{
                                                    fontSize: 16,
                                                    lineHeight: 24,
                                                    height: '100%',
                                                    color: '#ffffff'
                                                }}/>
                                            </TouchableOpacity>
                                        </ImageBackground>
                                    </View>
                                </Row>

                                <Row size={55}>
                                    <Col>
                                        <Input placeholder={'Your name...'} keyboardType={'email-address'} iconName={Platform.OS === 'ios' ? 'ios-person': 'md-person'} secure={false}/>
                                        <Input placeholder={'Your email...'} keyboardType={'email-address'} iconName={Platform.OS === 'ios' ? 'ios-mail': 'md-mail'} secure={false}/>
                                        <Input placeholder={'Choose your password...'} type={'email-address'} iconName={Platform.OS === 'ios' ? 'ios-lock': 'md-lock'} secure={true}/>
                                        <Input placeholder={'Repeat your password...'} type={'email-address'} iconName={Platform.OS === 'ios' ? 'ios-lock': 'md-lock'} secure={true}/>
                                    </Col>
                                </Row>

                                <Row size={10}>
                                    <Button text={'Sign Up'} onPress={() => {}}/>
                                </Row>

                            </Grid>
                        </LinearGradient>
                    </Row>

                    <Row size={10} style={{justifyContent: 'center', marginTop: 8}}>
                        <Text style={[human.footnoteWhite, systemWeights.light]}>Already have an account? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={[human.footnoteWhite, systemWeights.semibold]}>Login here!</Text>
                        </TouchableOpacity>
                    </Row>

                </Grid>
            </ImageBackground>
        );
    }

    _showImagePicker() {
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }
}
