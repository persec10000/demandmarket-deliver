import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

export default class Input extends React.Component {
    render () {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderColor: colors.RED,
                borderRadius: 25,
                borderWidth:1,
                marginBottom: 12
            }}>
                <Icon name={this.props.iconName} style={{
                    padding: 20,
                    fontSize: 16,
                    height: '100%',
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                }}/>
                <TextInput placeholder={this.props.placeholder}
                           keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
                           placeholderColor={'#8395A7'}
                           underlineColorAndroid="transparent"
                           style={{
                               flex: 1,
                               color: '#222F3E',
                               borderTopRightRadius: 25,
                               borderBottomRightRadius: 25,
                               fontSize: 16,
                               lineHeight: 17,
                            }}
                           secureTextEntry={this.props.secure}
                           {...this.props.textInputProps}
                />
            </View>
        );
    }
}
