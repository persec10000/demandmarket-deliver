import React from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native';
import { RNCamera } from 'react-native-camera';
import GradientButton from '../components/GradientButton';
import {human} from 'react-native-typography';
import NavbarButton from '../components/NavbarButton';
import {withNavigation} from 'react-navigation';
import colors from '../styles/colors';

class CameraScreen extends React.Component {
    render() {
        const { height, width } = Dimensions.get('window');
        const maskRowHeight = Math.round((height - 300) / 20);
        const maskColWidth = (width - 300) / 2;

        return (
            <View style={styles.container}>
                <RNCamera
                    RNCamera={cam => {
                        this.camera = cam;
                    }}
                    onBarCodeRead={this._onBarCodeRead}
                    style={styles.cameraView}
                    playSoundOnCapture
                    captureAudio={false}
                >
                    <View style={styles.maskOutter}>

                        <View style={{width: '100%'}}>
                            <NavbarButton whiteTheme name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                                          containerStyle={{backgroundColor: colors.STORM}}
                                          iconStyle={{color: '#ffffff'}}
                                          onPress={() => this.props.navigation.goBack()}
                            />
                        </View>

                        <Text style={human.bodyWhite}>veniam aute in aute ad mollit ipsum exercitation est elit ullamco eiusmod exercitation do ea</Text>

                        <View style={styles.maskCenter}>
                            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                            <View style={styles.maskInner} />
                            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                        </View>

                        <Text style={human.bodyWhite}>esse est quis dolor Lorem fugiat</Text>

                        <GradientButton text={'Capture'} style={{width: '100%'}} iconName={Platform.OS === 'ios'? 'ios-camera' : 'md-camera'}/>
                    </View>
                </RNCamera>
            </View>
        );
    }

    _onBarCodeRead(barcode) {
        console.log(barcode);
    }
}

export default withNavigation(CameraScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraView: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    maskOutter: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 32,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    maskInner: {
        width: 300,
        backgroundColor: 'transparent',
        borderRadius: 22,
        borderColor: 'white',
        borderWidth: 1
    },
    maskFrame: {
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    maskRow: {
        width: '100%',
    },
    maskCenter: { flexDirection: 'row', height: 150 },
});
