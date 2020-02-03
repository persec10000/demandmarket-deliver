import React from 'react';
import {View, Text} from 'react-native';
import { human, systemWeights } from 'react-native-typography'

export default class Comment extends React.Component {
    render () {
        return (
            <View
                style={{
                    flex: 1,
                    borderRadius: 25,
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    padding: 16,
                    marginBottom: 16
                }}
            >

                <Text style={[human.headline, systemWeights.bold]}>
                    {this.props.name}
                </Text>
                <Text style={[human.caption1]}>
                    {this.props.subname}
                </Text>

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
