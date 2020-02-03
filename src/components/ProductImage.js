import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import colors from '../styles/colors';
import { human, systemWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProductImage extends React.Component {
    render () {
        return (
            <ImageBackground source={{uri: this.props.product.image}} style={{flex: 1}} imageStyle={{ borderRadius: 25}}>
                <View style={{padding: 32, paddingBottom: 16}}>
                    <Text style={[human.title1White, systemWeights.bold]}>{this.props.product.title}</Text>
                    <Text style={human.subheadWhite}>{this.props.product.description}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    paddingTop: 8,
                    paddingBottom: 8,
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        backgroundColor: colors.GREEN,
                        borderBottomRightRadius: 25,
                        borderTopRightRadius: 25,
                        alignSelf: 'flex-start',
                        flexDirection: 'row',
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 32,
                        paddingRight: 32
                    }}>
                        <Text style={[human.title2White, systemWeights.light]}>$</Text>
                        <Text style={[human.title2White, systemWeights.bold]}>{this.props.product.price}</Text>
                    </View>

                    <View style={{
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingLeft: 32,
                        paddingRight: 32
                    }}>
                        <Text style={[human.title2White, systemWeights.light]}>
                            6 >
                            <Icon name={Platform.OS === 'ios' ? 'ios-person': 'md-person'} style={[human.title2White, systemWeights.light]}/>
                        </Text>
                    </View>
                </View>

                <View style={{padding: 32, paddingTop: 16}}>
                    <Text style={human.caption2White}>Recommended Price (each)</Text>
                </View>

                <View style={{position: 'absolute', bottom: 0, right: 0, flexDirection: 'row', justifyContent: 'flex-end', paddingBottom: 32}}
                >
                    <View style={{
                        backgroundColor: '#000000aa',
                        borderBottomLeftRadius: 25,
                        borderTopLeftRadius: 25,
                        flexDirection: 'row',
                        paddingTop: 6,
                        paddingBottom: 6,
                        paddingLeft: 32,
                        paddingRight: 32
                    }}>
                        <Text style={[human.footnoteWhite, systemWeights.bold]}>Expires: </Text>
                        <Text style={[human.footnoteWhite]}>15/20/2020</Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}
