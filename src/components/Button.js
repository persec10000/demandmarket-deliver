import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import globalStyles from '../styles/global';
import { human, systemWeights } from 'react-native-typography'
import Icon from 'react-native-vector-icons/Ionicons';

export default class Button extends React.Component {
    render () {
        return (
            <TouchableOpacity
                style={[globalStyles.dropShadow, {
                    flex: 1,
                    borderRadius: 25,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                }]}
                onPress={() => this.props.onPress()}
            >
                {
                    this.props.iconName &&
                    <Icon
                        name={this.props.iconName}
                        size={28}
                        style={[human.title1, systemWeights.bold, {padding: 6}]}
                    />
                }
                {
                    this.props.text &&
                    <Text style={[human.title1, systemWeights.bold, {padding: 6}]}>
                        {this.props.text}
                    </Text>
                }
            </TouchableOpacity>
        );
    }
}
