import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';
import { human, systemWeights } from 'react-native-typography'
import LinearGradient from "react-native-linear-gradient";

export default class SearchResult2 extends React.Component {
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
                                borderBottomColor: '#48DBFB',
                                borderBottomWidth: 1,
                                marginTop: 8,
                                marginBottom: 8
                            }}
                        />

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={[human.footnote]}>
                                {this.props.company}
                            </Text>
                        </View>
                    </View>

                    <View style={{alignSelf: 'center'}}>
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
                            }]}
                        >
                            <Text style={[human.footnoteWhite, systemWeights.bold, {padding: 6}]}>
                                $104.69
                            </Text>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        );
    }
}
