import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from '../components/Navbar';
import {withNavigation} from 'react-navigation';
import MapView from 'react-native-maps';
import GradientButton from '../components/GradientButton';
import colors from '../styles/colors';
import {systemWeights, human} from 'react-native-typography';

class MapScreen extends React.Component {
    render () {
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar goBack={() => this.props.navigation.goBack()}/>
                </Row>

                <Row size={85} style={{backgroundColor: colors.STORM}}>
                    <ImageBackground source={require('../assets/map.png')}
                                     style={{width: '100%', height: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>

                        {
                            /*
                            <MapView
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            />
                            */
                        }


                        <View style={{
                            alignSelf: 'flex-end',
                            width: '90%',
                            borderTopRightRadius: 22,
                            borderTopLeftRadius: 22,
                            backgroundColor: '#ffffff',
                            padding: 32
                        }}>
                            <View style={{marginBottom: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={systemWeights.light}>Lat:  22.9345226</Text>
                                <Text style={systemWeights.light}>Long: -42.2995636</Text>
                            </View>
                            <GradientButton text={'Copy Location Address'} style={{marginBottom: 16}} textStyle={human.bodyWhite}/>
                            <GradientButton text={'Send to Email'} textStyle={human.bodyWhite}/>
                        </View>
                    </ImageBackground>
                </Row>
            </Grid>
        );
    }
}

export default withNavigation(MapScreen);
