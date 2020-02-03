import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

export default class RestrictCodeInput extends React.Component {
    render () {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderRadius: 25,
                borderWidth: 1,
                borderColor: colors.STORM,
                padding: 16,
                width: '100%'
            }}>
                <Icon name={Platform.OS === 'ios' ? 'ios-lock': 'md-lock'} style={{
                    textAlign: 'center',
                    fontSize: 16,
                    marginRight: 16,
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    color: colors.STORM
                }}/>
                <TextInput placeholder={'Restrict Code...'}
                           placeholderColor={'#8395A7'}
                           underlineColorAndroid="transparent"
                           keyboardType={'numeric'}
                           style={{
                               color: '#222F3E',
                               borderTopRightRadius: 25,
                               borderBottomRightRadius: 25,
                               fontSize: 16,
                               lineHeight: 17,
                           }}
                />
            </View>
        );
    }
}
