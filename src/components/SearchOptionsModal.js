import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {human, systemWeights} from 'react-native-typography';
import globalStyles from '../styles/global';
import colors from '../styles/colors';
import Modal from 'react-native-modal';

export default class SearchOptionsModal extends React.Component {

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
                    <Text style={[human.subhead, systemWeights.bold]}>Filter Search by:</Text>

                    <View
                        style={{
                            borderBottomColor: colors.STORM,
                            borderBottomWidth: 1,
                            marginTop: 16,
                            marginBottom: 16
                        }}
                    />
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => this.props.changeSearchOption('campaign')}
                    >
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: colors.STORM, marginTop: 8, marginRight: 8, alignItems: 'center', justifyContent: 'center'}}>
                            {
                                this.props.searchOption === 'campaign' &&
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: colors.BASE_COLOR,
                                }}/>
                            }
                        </View>

                        <Text style={[human.body, systemWeights.light]}>Campaign</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}
                        onPress={() => this.props.changeSearchOption('product')}
                    >
                        <View style={{width: 20, height: 20, borderRadius: 10, backgroundColor: colors.STORM, marginTop: 8, marginRight: 8, alignItems: 'center', justifyContent: 'center'}}>
                            {
                                this.props.searchOption === 'product' &&
                                <View style={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: 5,
                                    backgroundColor: colors.BASE_COLOR,
                                }}/>
                            }
                        </View>
                        <Text style={[human.body, systemWeights.light]}>Products</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}
