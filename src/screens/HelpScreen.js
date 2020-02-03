import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {human, systemWeights} from 'react-native-typography';
import {withNavigation} from 'react-navigation';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

class HelpScreen extends React.Component {
    render () {
        return (
            <Modal
                style={[
                    {
                        flex: 1,
                        borderRadius: 20,
                        backgroundColor: '#ffffff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 64,
                    }
                ]}
                isVisible={this.props.open}
                onBackdropPress={() => this.props.close()}
                onBackButtonPress={() => this.props.close()}
                hideModalContentWhileAnimating
            >
                <View style={{padding: 32}}>
                    <Text style={[human.title1, systemWeights.bold, {marginBottom: 16}]}>
                        Help
                    </Text>

                    <Text style={[human.body]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>

                    <TouchableOpacity
                        style={{
                            borderRadius: 25,
                            backgroundColor: '#000000',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 16,
                            padding: 6
                        }}
                        onPress={() => this.props.close()}
                    >
                        <Icon
                            name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                            size={12}
                            style={{ color: 'white', marginRight: 8}}
                        />
                        <Text style={human.footnoteWhite}>Back</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default withNavigation(HelpScreen);
