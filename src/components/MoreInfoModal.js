import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {human, systemWeights} from 'react-native-typography';
import {withNavigation} from 'react-navigation';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

class MoreInfoModal extends React.Component {
    render () {

        console.log(this.props.item)
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
                    {this.props.item.image&&
                    <View style={{alignItems:'center'}}>
                        <Image source={{uri: this.props.item.image}} style={{width: 150, height: 150}}/>
                    </View>
                    }
                    <Text style={[human.title1, systemWeights.bold, {marginBottom: 16, textAlign:'center'}]}>
                        {this.props.item.title}
                    </Text>

                    <Text style={[human.body]}>
                        {this.props.item.description}
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

export default withNavigation(MoreInfoModal);
