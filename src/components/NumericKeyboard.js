import React from 'react';
import {Grid, Col, Row} from 'react-native-easy-grid';
import Button from './Button';
import globalStyles from '../styles/global';
import Icon from 'react-native-vector-icons/Ionicons';
import {human, systemWeights} from 'react-native-typography';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export default class NumericKeyboard extends React.Component {
    render () {
        return (
            <Grid>
                <Row style={{marginBottom: 16, justifyContent: 'center', alignItems: 'center'}}>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'1'} onPress={() => this.props.onKeypadPress(1)}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'2'} onPress={() => this.props.onKeypadPress(2)}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'3'} onPress={() => this.props.onKeypadPress(3)}/>
                    </Col>
                </Row>
                <Row style={{marginBottom: 8, justifyContent: 'center', alignItems: 'center'}}>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'4'} onPress={() => this.props.onKeypadPress(4)}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'5'} onPress={() => this.props.onKeypadPress(5)}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'6'} onPress={() => this.props.onKeypadPress(6)}/>
                    </Col>
                </Row>
                <Row style={{marginBottom: 8, justifyContent: 'center', alignItems: 'center'}}>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'7'} onPress={() => this.props.onKeypadPress(7)}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'8'} onPress={() => this.props.onKeypadPress(8)}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'9'} onPress={() => this.props.onKeypadPress(9)}/>
                    </Col>
                </Row>
                <Row style={{marginBottom: 8, justifyContent: 'center', alignItems: 'center'}}>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'.'} onPress={() => this.props.onKeypadPress('.')}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button text={'0'} onPress={() => this.props.onKeypadPress(0)}/>
                    </Col>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <Button iconName={Platform.OS === 'ios' ? 'ios-backspace': 'md-backspace'} onPress={() => this.props.onKeypadPress('backspace')}/>
                    </Col>
                </Row>
                <Row>
                    <Col style={{padding: 8, justifyContent: 'center'}}>
                        <TouchableOpacity
                            style={[globalStyles.dropShadow, {
                                flex: 1,
                                borderRadius: 25,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                backgroundColor: '#ffffff',
                            }]}
                        >
                            <LinearGradient
                                colors={['#FCCC0B', '#DD2564']}
                                locations={[0, 1]}
                                useAngle={true}
                                angle={203.07}
                                angleCenter={{x: 0.5, y: 0.5}}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 25
                                }}
                            >
                                <Icon name={Platform.OS === 'ios' ? 'ios-arrow-round-forward': 'md-arrow-round-forward'}
                                      size={28}
                                      style={[human.largeTitleWhite, systemWeights.bold, {padding: 6}]}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
