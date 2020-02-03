import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';
import { human, systemWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Ionicons';

export default class LeaderboardItem extends React.Component {
    render () {
        return (
            <View
                style={[globalStyles.dropShadow, {
                    flex: 1,
                    borderRadius: 25,
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    padding: 16,
                    marginBottom: 16
                }]}
            >

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text style={[human.headline, systemWeights.bold]}>
                            {this.props.name}
                        </Text>
                        <Text style={[human.caption1]}>
                            {this.props.subname}
                        </Text>
                    </View>

                    <Icon name={Platform.OS === 'ios' ? 'ios-trophy': 'md-trophy'} style={[human.body, {marginLeft: 8}]}/>
                </View>

                <View
                    style={{
                        borderBottomColor: '#C8D6E5',
                        borderBottomWidth: 1,
                        marginTop: 8,
                        marginBottom: 8
                    }}
                />

                <Text style={[human.footnote, systemWeights.bold]}>
                    {this.props.title}
                </Text>
                <Text style={[human.footnote]}>
                    {this.props.subtitle}
                </Text>
            </View>
        );
    }
}
