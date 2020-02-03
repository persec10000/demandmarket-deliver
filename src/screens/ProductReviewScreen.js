import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from '../components/Navbar';
import {withNavigation} from 'react-navigation';
import Input from '../components/Input';
import {human, systemWeights} from 'react-native-typography';
import TakePictureButtonButton from '../components/TakePictureButton';
import GradientButton from '../components/GradientButton';

class ProductReviewScreen extends React.Component {
    render () {
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar goBack={() => this.props.navigation.goBack()}/>
                </Row>

                <Row size={15} style={{justifyContent: 'center'}}>
                    <TakePictureButtonButton/>
                </Row>

                <Row size={70}>
                    <Col style={{padding: 16}}>
                        <Text style={[human.title2, systemWeights.bold, {padding: 16}]}>Improvement</Text>
                        <Input placeholder={'Enter your name...'} keyboardType={'email-address'} secure={false}/>
                        <Input placeholder={'Your description...'} type={'email-address'} secure={false}/>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Code')}>
                            <Input textInputProps={{placeholder:'Your recommended price...', type:'decimal-pad', editable:false, secure:false}}/>
                        </TouchableOpacity>

                        <GradientButton iconName={Platform.OS === 'ios' ? 'ios-checkmark-circle': 'md-checkmark-circle'} text={'Save'}/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default withNavigation(ProductReviewScreen);
