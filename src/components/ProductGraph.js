import React from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../styles/colors';
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

export default class ProductGraph extends React.Component {

    state = {
        height: 0
    };

    onPageLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        this.setState({width, height})
    };

    render () {
        return (
            <View style={{flex: 1}}>
                <Slider
                    style={{width: '100%', height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    value={0.5}
                    minimumTrackTintColor={colors.GREEN}
                    maximumTrackTintColor={colors.RED}
                />

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: colors.GREEN}}>Buy</Text>
                    <Text style={{color: colors.RED}}>Sell</Text>
                </View>

                <View style={{flex: 1}} onLayout={this.onPageLayout}>
                    <LineChart
                        data={{
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - 32} // from react-native
                        height={this.state.height - 12}
                        yAxisLabel={"$"}
                        yAxisSuffix={"k"}
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#fb8c00",
                            backgroundGradientTo: "#ffa726",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
            </View>
        );
    }
}
