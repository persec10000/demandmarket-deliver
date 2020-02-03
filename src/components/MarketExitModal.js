import React from 'react';
import Modal from 'react-native-modal';
import {Text, View, TouchableOpacity} from 'react-native';
import {human, systemWeights} from 'react-native-typography';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MarketExitModal extends React.Component {
    render () {
        return (
            <Modal
                style={[
                    {
                        flex: 0,
                        borderRadius: 20,
                        backgroundColor: '#ffffff',
                        justifyContent: 'center',
                        marginTop: 64,
                        paddingTop: 16,
                        paddingBottom: 16,
                        paddingLeft: 64,
                        paddingRight: 64,
                    }
                ]}
                isVisible={this.props.open}
                onBackdropPress={() => this.props.close()}
                onBackButtonPress={() => this.props.close()}
                hideModalContentWhileAnimating
            >
                <View style={{flex: 0, justifyContent: 'center'}}>
                    <Text style={[human.subhead, systemWeights.bold]}>Confirm Market Exit</Text>

                    <View
                        style={{
                            borderBottomColor: colors.STORM,
                            borderBottomWidth: 1,
                            marginTop: 16,
                            marginBottom: 16,
                            opacity: 0.7
                        }}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={[human.footnote, systemWeights.light]}>Are you sure you want to confirm market exit?</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity
                            onPress={() => console.log('Cancel pressed')}
                            style={{ borderRadius: 20, borderWidth: 1, backgroundColor: 'white', padding: 8, flexDirection: 'row'}}
                        >
                            <Icon name={Platform.OS === 'ios' ? 'ios-remove-circle-outline': 'md-remove-circle-outline'}
                                  style={[human.footnote, {marginRight: 6}]}/>
                            <Text style={[human.footnote]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log('Exit pressed')}
                            style={{ borderRadius: 20, backgroundColor: colors.RED, padding: 8, flexDirection: 'row'}}
                        >
                            <Icon name={Platform.OS === 'ios' ? 'ios-trash': 'md-trash'}
                                  style={[human.footnoteWhite, {color: 'white', marginRight: 6}]}/>
                            <Text style={[human.footnoteWhite]}>Exit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}
