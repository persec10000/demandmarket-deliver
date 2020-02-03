import React from 'react';
import {ImageBackground, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from '../components/Navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import { human, systemWeights } from 'react-native-typography'
import NewImprovementButton from '../components/NewImprovementButton';
import {ScrollView} from 'react-navigation';
import RestrictCodeInput from '../components/RestrictCodeInput';
import { withNavigation } from 'react-navigation';
import colors from '../styles/colors';

class AddScreen extends React.Component {
    render () {
        return (
            <ImageBackground source={require('../assets/Background-padrao.png')} style={{width: '100%', height: '100%'}}>
                <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Row size={15}>
                        <Navbar whiteTheme goBack={() => this.props.navigation.goBack()}/>
                    </Row>

                    <Row size={10} style={[
                        {
                            width: '100%',
                            paddingLeft: 32,
                            paddingRight: 32,
                            paddingTop: 16,
                            paddingBottom: 16,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#ffffff',
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50
                        }
                        ]}
                    >
                        <RestrictCodeInput/>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ScanBarcode')}
                            style={{ borderRadius: 25, height: 40, width: 40, borderWidth: 1, borderColor: '#8395A7', marginLeft: 16, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon
                                name={Platform.OS === 'ios' ? 'ios-barcode': 'md-barcode'}
                                size={26}
                                style={{ textAlign: 'center', lineHeight: 40 }}
                            />
                        </TouchableOpacity>
                    </Row>

                    <Row size={75}>
                        <ScrollView>
                            <Col style={{padding: 32}}>
                                <Text style={[human.title1White, systemWeights.bold]}>Officia ipsum ut dolore</Text>

                                <View
                                    style={{
                                        borderBottomColor: '#ffffff',
                                        borderBottomWidth: 2,
                                        marginTop: 16,
                                        marginBottom: 16
                                    }}
                                />

                                <View style={{
                                    flexDirection: 'row',
                                    paddingTop: 8,
                                    marginBottom: 16,
                                    justifyContent: 'space-between'
                                }}>
                                    <View style={{
                                        alignSelf: 'flex-start',
                                        flexDirection: 'row',
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                        paddingRight: 32
                                    }}>
                                        <Text style={[human.bodyWhite, systemWeights.bold]}>Bank of America</Text>
                                    </View>

                                    <View style={{
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                        paddingLeft: 32,
                                    }}>
                                        <Text style={[human.title2White, systemWeights.light]}>
                                            6 >
                                            <Icon name={Platform.OS === 'ios' ? 'ios-person': 'md-person'} style={[human.title2White, systemWeights.light]}/>
                                        </Text>
                                    </View>
                                </View>

                                <Text style={[human.calloutWhite, systemWeights.light]}>
                                    Culpa excepteur mollit consectetur pariatur eu aliqua duis ad adipisicing sit. Consequat duis in elit cupidatat. Aliquip et anim nulla amet aliquip deserunt eiusmod mollit ex ex nisi. Veniam nostrud sit id pariatur officia consectetur tempor sunt reprehenderit dolor est
                                    fugiat laboris velit.
                                </Text>

                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 16,
                                    marginBottom: 16,
                                }}>
                                    <NewImprovementButton color="#ffffff" width={88} height={88}/>
                                </View>

                                <View style={{
                                    backgroundColor: '#000000aa',
                                    borderRadius: 25,
                                    flexDirection: 'row',
                                    paddingTop: 6,
                                    paddingBottom: 6,
                                    paddingLeft: 8,
                                    paddingRight: 8,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 16,
                                    marginBottom: 16,
                                }}>
                                    <Text style={[human.footnoteWhite, systemWeights.bold]}>Expires: </Text>
                                    <Text style={[human.footnoteWhite]}>15/20/2020</Text>
                                </View>

                                <View style={{justifyContent: 'center'}}>
                                    <Text style={[human.subheadWhite, systemWeights.light, {textAlign: 'center'}]}>
                                        Budget available
                                    </Text>

                                    <View
                                        style={{
                                            borderBottomColor: '#ffffff',
                                            borderBottomWidth: 2,
                                            marginTop: 8,
                                            marginBottom: 8
                                        }}
                                    />

                                    <Text style={[human.title2White, {textAlign: 'center'}]}>
                                        $ 8.930,00
                                    </Text>
                                </View>
                            </Col>
                        </ScrollView>
                    </Row>
                </Grid>
            </ImageBackground>
        );
    }
}

export default withNavigation(AddScreen);
