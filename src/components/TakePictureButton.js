import React from 'react';
import {TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import colors from '../styles/colors';

const imagePickerOptions = {
    title: 'Take a picture',
    mediaType: 'photo',
};

export default class TakePictureButtonButton extends React.Component {

    state = {
        pic: null
    };

    render () {
        return (
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderWidth: 2,
                    borderColor: colors.STORM,
                    margin: 16,
                    borderRadius: 20,
                    width: 88,
                    height: 88
                }}
                onPress={() => this._showImagePicker()}
            >
                {
                    this.state.pic?
                        <ImageBackground source={this.state.pic} style={{ width: '100%', height: '100%' }} imageStyle={{borderRadius: 20}} />
                        :
                        <Icon
                            name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
                            size={32}
                            style={{textAlign: 'center', lineHeight: 40, color: colors.STORM}}
                        />
                }
            </TouchableOpacity>
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
                    pic: source,
                });
            }
        });
    }
}
