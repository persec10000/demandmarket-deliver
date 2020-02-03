import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';
import { human, systemWeights } from 'react-native-typography';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MarketExitModal from './MarketExitModal';

export default class MarketListItem extends React.Component {

    state = {
        modalOpen: false,
    };

    render () {
        return (
            <View
                style={[globalStyles.dropShadow, {
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    padding: 16,
                    marginBottom: 16
                }]}
            >
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{backgroundColor: colors.GREEN, height: '100%', width: 3, borderRadius: 3, marginRight: 8}}/>

                        <View style={{justifyContent: 'space-between', paddingTop: 4, paddingBottom: 4}}>
                            <Text style={[human.headline, systemWeights.bold]}>
                                {this.props.name}
                            </Text>

                            <View style={{flexDirection: 'row', marginTop: 8}}>

                                <View>
                                    <Text style={[human.body, systemWeights.bold, {color: colors.GREEN}]}>
                                        $24.78
                                    </Text>
                                    <Text style={[human.footnote]}>
                                        Current Price
                                    </Text>
                                </View>

                                <View style={{backgroundColor: colors.LIGHT_BLUE, height: '100%', width: 1, borderRadius: 3, marginLeft: 8, marginRight: 8}}/>

                                <View>
                                    <Text style={[human.body, systemWeights.bold, {color: colors.RED}]}>
                                        $62.68
                                    </Text>
                                    <Text style={[human.footnote]}>
                                        Open Price
                                    </Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>

                        <View style={{alignItems: 'flex-end'}}>
                            <TouchableOpacity
                                onPress={() => this.setState({modalOpen: true})}
                                style={{ borderRadius: 14, height: 28, width: 28, backgroundColor: colors.RED, marginBottom: 16}}>
                                <Icon
                                    name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'}
                                    size={22}
                                    style={{ textAlign: 'center', color: '#ffffff', lineHeight: 28 }}
                                />
                            </TouchableOpacity>

                            <MarketExitModal open={this.state.modalOpen} close={() => this.setState({modalOpen: false})}/>

                            <View style={{backgroundColor: colors.GREEN, padding: 6, borderRadius: 8}}>
                                <Text style={[human.bodyWhite, systemWeights.bold, {textAlign: 'right'}]}>
                                    4681.09
                                </Text>
                                <Text style={[human.footnoteWhite, {textAlign: 'right'}]}>
                                    PnL
                                </Text>
                            </View>
                        </View>

                        <View style={{justifyContent: 'flex-end', paddingBottom: 6, marginLeft: 8}}>

                            <Image source={require('../assets/img1.png')} style={{width: 56, height: 56, borderRadius: 56/2}}/>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}
