import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {human, systemWeights} from 'react-native-typography';
import {withNavigation} from 'react-navigation';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

class NearbyBusinessListItem extends React.Component {
    render () {
        const {item} = this.props;
        console.log("image====>",item.image)
        let s_image = item.image.split("\/").join("/");
        return (
            <Modal
                style={[
                    {
                        flex: 1,
                        borderRadius: 20,
                        backgroundColor: '#ffffff',
                        alignItems: 'center',
                        marginVertical: 100,
                    }
                ]}
                isVisible={this.props.open}
                onBackdropPress={() => this.props.close()}
                onBackButtonPress={() => this.props.close()}
                hideModalContentWhileAnimating
            >
                <View style={{paddingVertical: 50, height: '100%'}}>
                    <View style={{alignItems:'center', marginBottom: 30}}>
                        <Image source={{uri:s_image}} style={{width: 100, height: 100, borderRadius: 50}}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[human.title3, systemWeights.bold, {marginBottom: 16, width: 100}]}>
                            Name: 
                        </Text>
                        <Text style={[human.title3, systemWeights.bold, {marginBottom: 16}]}>
                            {item.title}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[human.title3, systemWeights.bold, {marginBottom: 16, width:100}]}>
                            Address: 
                        </Text>
                        <Text style={[human.title3, systemWeights.bold, {marginBottom: 16}]}>
                            {item.address}
                        </Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[human.title3, systemWeights.bold, {marginBottom: 16, width: 100}]}>
                            Distance: 
                        </Text>
                        <Text style={[human.title3, systemWeights.bold, {marginBottom: 16}]}>
                            {item.distance}
                        </Text>
                    </View>
                    {/* <Text style={[human.body]}>
                        {this.props.item.description}
                    </Text> */}

                    <TouchableOpacity
                        style={{
                            borderRadius: 25,
                            backgroundColor: '#000000',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 16,
                            padding: 10
                        }}
                        onPress={() => this.props.close()}
                    >
                        <Text style={human.footnoteWhite}>Done</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
}

export default withNavigation(NearbyBusinessListItem);
