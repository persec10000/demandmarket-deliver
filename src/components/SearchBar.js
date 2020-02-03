import React from 'react';
import {TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

export default class SearchBar extends React.Component {

    state = {
        focused: false,
        query: '',
    };

    render () {
        return (
            <View style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderRadius: 25,
                borderWidth: 1,
                padding: 12,
                flex: 1,
            }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                    <Icon name={Platform.OS === 'ios' ? 'ios-search': 'md-search'} style={{
                        textAlign: 'center',
                        fontSize: 16,
                        marginRight: 16,
                        borderTopLeftRadius: 25,
                        borderBottomLeftRadius: 25,
                    }}/>
                    <TextInput placeholder={'Search by name or code...'}
                               placeholderColor={'#8395A7'}
                               underlineColorAndroid="transparent"
                               onFocus={() => this.setState({ focused: true })}
                               onBlur={() => this.setState({ focused: false })}
                               onChangeText={i => this.setState({query: i})}
                               value={this.state.query}
                               style={{
                                   color: '#222F3E',
                                   borderTopRightRadius: 25,
                                   borderBottomRightRadius: 25,
                                   fontSize: 16,
                                   lineHeight: 17,
                               }}
                    />
                </View>

                {
                    this.state.focused &&
                        <View style={{width: '100%', marginTop: 4}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-time': 'md-time'} style={{
                                    textAlign: 'center',
                                    fontSize: 16,
                                    marginRight: 16,
                                    borderTopLeftRadius: 25,
                                    borderBottomLeftRadius: 25,
                                    color: colors.STORM
                                }}/>
                                <Text style={{color: colors.STORM}}>
                                    Floyd Warren
                                </Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-time': 'md-time'} style={{
                                    textAlign: 'center',
                                    fontSize: 16,
                                    marginRight: 16,
                                    borderTopLeftRadius: 25,
                                    borderBottomLeftRadius: 25,
                                    color: colors.STORM
                                }}/>
                                <Text style={{color: colors.STORM}}>
                                    Gregory Bell
                                </Text>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-time': 'md-time'} style={{
                                    textAlign: 'center',
                                    fontSize: 16,
                                    marginRight: 16,
                                    borderTopLeftRadius: 25,
                                    borderBottomLeftRadius: 25,
                                    color: colors.STORM
                                }}/>
                                <Text style={{color: colors.STORM}}>
                                    Wade Richards
                                </Text>
                            </View>

                            {
                                this.state.query.length > 0 &&
                                <View style={{flexDirection: 'row', marginTop: 8}}>
                                    <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                                          style={{
                                              textAlign: 'center',
                                              fontSize: 16,
                                              marginRight: 16,
                                              borderTopLeftRadius: 25,
                                              borderBottomLeftRadius: 25,
                                              color: colors.STORM
                                          }}/>
                                    <Text style={{color: colors.STORM}}>
                                        All searches with: {this.state.query}
                                    </Text>
                                </View>
                            }
                        </View>
                }
            </View>
        );
    }
}
