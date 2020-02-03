import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import Navbar from '../components/Navbar';
import {human, systemWeights} from 'react-native-typography';
import colors from '../styles/colors';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {LineChart} from "react-native-chart-kit";
import Carousel from 'react-native-snap-carousel';

export default class ProfileScreen extends React.Component {
    state = {
        height: 0,
        entries: [
            { percentage: 77, name: 'Usage Ranking' },
            { percentage: 52, name: 'Idea Ranking' },
            { percentage: 22, name: 'Equity Accumulation' }
        ]
    };

    onPageLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        this.setState({height})
    };


    render () {
        return (
            <Grid style={{justifyContent: 'center'}}>
                <Row size={15}>
                    <Navbar/>
                </Row>

                <Row size={15}>
                    <Col style={{padding: 32}}>
                        <Text style={[human.title2, systemWeights.bold]}>
                            Elit in irure exercitation magna ex
                        </Text>
                        <Text style={[human.caption1, systemWeights.light]}>
                            Expires: 15/02/2020
                        </Text>

                        <View
                            style={{
                                borderBottomColor: '#C8D6E5',
                                borderBottomWidth: 1,
                                marginTop: 8,
                                marginBottom: 8
                            }}
                        />

                        <Text style={[human.title1, systemWeights.bold]}>
                            $ 436,00
                        </Text>
                        <Text style={[human.caption1, systemWeights.thin]}>
                            Budget available
                        </Text>
                    </Col>
                </Row>

                <Row size={70}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderItem}
                        sliderWidth={Dimensions.get("window").width}
                        itemWidth={Dimensions.get("window").width}
                    />
                </Row>
            </Grid>
        );
    }

    _renderItem = ({item, index}) => {
        return (
            <Grid style={{justifyContent: 'center', marginTop: 16}}>
                <Row style={{padding: 32}} onLayout={this.onPageLayout}>
                    <Col>
                        <View style={{marginTop: 16, justifyContent: 'center', alignItems: 'center'}}>
                            <AnimatedCircularProgress
                                size={200}
                                width={16}
                                backgroundWidth={16}
                                fill={item.percentage}
                                rotation={0}
                                tintColor={colors.RED}
                                backgroundColor='#ffffff'
                                style={{
                                    shadowColor: colors.STORM,
                                    shadowOffset: {
                                        width: 0,
                                        height: 0,
                                    },
                                    shadowOpacity: 1,
                                    shadowRadius: 16,

                                    elevation: 5
                                }}>
                                {
                                    (fill) => (
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={[human.largeTitle]}>
                                                {item.percentage + '%'}
                                            </Text>
                                            <Text style={[human.body, systemWeights.thin]}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    )
                                }
                            </AnimatedCircularProgress>

                            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                                <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: index === 0? colors.RED : colors.STORM, margin: 8}}/>
                                <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: index === 1? colors.RED : colors.STORM, margin: 8}}/>
                                <View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: index === 2? colors.RED : colors.STORM, margin: 8}}/>
                            </View>

                        </View>

                        <View style={{marginTop: 16, justifyContent: 'center', alignItems: 'center'}}>
                            <LineChart
                                data={{
                                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
                                width={Dimensions.get("window").width - 64} // from react-native
                                height={220}
                                //yAxisLabel={"$"}
                                //yAxisSuffix={"k"}
                                chartConfig={{
                                    backgroundColor: "#ffffff",
                                    backgroundGradientFrom: "#ffffff",
                                    backgroundGradientTo: "#ffffff",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(72, 219, 251, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(34, 47, 62, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#48DBFB"
                                    }
                                }}
                                bezier
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                }}
                            />
                        </View>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
