import React from 'react';
import {View, Text, Image} from 'react-native';
import globalStyles from '../styles/global';
import { human, systemWeights } from 'react-native-typography'

export default class SearchResult extends React.Component {
    render () {
        return (
            <View
                style={[globalStyles.dropShadow, {
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    marginBottom: 16,
                    padding: 16,
                }]}
            >

                <View style={{flex: 1, flexDirection: 'row'}}>

                    <View>
                        <Image source={require('../assets/img1.png')} style={{width: 56, height: 56, borderRadius: 56/2}}/>
                    </View>

                    <View style={{flex: 1, marginLeft: 16}}>
                        <Text style={[human.headline, systemWeights.bold]}>
                            {this.props.name}
                        </Text>

                        <View
                            style={{
                                borderBottomColor: '#C8D6E5',
                                borderBottomWidth: 1,
                                marginTop: 8,
                                marginBottom: 8
                            }}
                        />

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={[human.footnote]}>
                                {this.props.company}
                            </Text>

                            <Text style={[human.footnote, systemWeights.bold]}>
                                {this.props.distance}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
