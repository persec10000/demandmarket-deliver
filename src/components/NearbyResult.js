import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import globalStyles from '../styles/global';
import { human, systemWeights } from 'react-native-typography'

export default class NearbyResult extends React.Component {
    render () {
        var imageUrl = this.props.data.image
        var s_image = imageUrl.split("\/").join("/")
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

                <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} 
                 onPress={()=>this.props.onClicked(this.props.data)}
                >

                    <View>
                        <Image source={{uri:s_image}} style={{width: 56, height: 56, borderRadius: 56/2}}/>
                    </View>

                    <View style={{flex: 1, marginLeft: 16}}>
                        <Text style={[human.headline, systemWeights.bold]}>
                            {this.props.data.title}
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
                                {this.props.data.description}
                            </Text>

                            <Text style={[human.footnote, systemWeights.bold]}>
                                {this.props.data.distance + " km"}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
