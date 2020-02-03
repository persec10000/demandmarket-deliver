import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import globalStyles from '../styles/global';
import { human, systemWeights } from 'react-native-typography'
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from "react-native-linear-gradient";

export default class GradientButton extends React.Component {
    render () {
        return (
            <LinearGradient
                colors={['#10AC84', '#48DBFB']}
                locations={[0, 1]}
                useAngle={true}
                angle={203.07}
                angleCenter={{ x: 0.5, y: 0.5}}
                style={[globalStyles.dropShadow, {
                    borderRadius: 25,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                }, this.props.style]}
            >
                <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={() => this.props.onPress()}
                >
                        {
                            this.props.iconName &&
                            <Icon
                                name={this.props.iconName}
                                size={28}
                                style={[human.title1White, systemWeights.bold, {padding: 6}]}
                            />
                        }
                        {
                            this.props.text &&
                            <Text style={[human.title1White, systemWeights.bold, {padding: 6}, this.props.textStyle]}>
                                {this.props.text}
                            </Text>
                        }
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}
