import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

export default class NavbarButton extends React.Component {

    render () {
        return (
            <TouchableOpacity
                style={[{ borderRadius: 20, height: 40, width: 40, backgroundColor: '#FFFFFF', opacity: 0.8}, this.props.containerStyle]}
                onPress={() => this.props.onPress? this.props.onPress() : console.log('navbar button pressed')}
            >
                <Icon
                    name={this.props.name}
                    size={26}
                    style={[{ textAlign: 'center', color: colors.RED, lineHeight: 40 }, this.props.iconStyle]}
                />
            </TouchableOpacity>
        );
    }
}
