import React from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { withNavigation } from 'react-navigation';
import Navbar from '../components/Navbar';
import NumericKeyboard from '../components/NumericKeyboard';
import NavbarButton from '../components/NavbarButton';
import {View, Text} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { human, systemWeights } from 'react-native-typography'

class CodeScreen extends React.Component {

    state = {
        value: '',
        isDecimal: false,
    };

    render () {
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar goBack={() => this.props.navigation.goBack()}/>
                </Row>

                <Row size={25} style={{padding: 16}}>
                    <LinearGradient
                        colors={['#FCCC0B', '#DD2564']}
                        locations={[0, 1]}
                        useAngle={true}
                        angle={203.07}
                        angleCenter={{x: 0.5, y: 0.5}}
                        style={{
                            flex: 1,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            paddingTop: 16,
                            paddingBottom: 16,
                            paddingLeft: 32,
                            paddingRight: 32,
                            marginTop: 16,
                            marginBottom: 16,
                            borderRadius: 25
                        }}
                    >
                        <Text style={human.headlineWhite}>Insert Wish Value</Text>
                        <Text style={[human.largeTitleWhite, systemWeights.bold]}>$ {this.state.value}</Text>

                        <LinearGradient
                            colors={['#FCCC0B', '#DD2564', '#48DBFB', '#10AC84']}
                            locations={[0.0728, 0.4659, 0.8258, 1]}
                            useAngle={true}
                            angle={270}
                            angleCenter={{x: 0.5, y: 0.5}}
                            style={{
                                height: 3,
                                width: '100%'
                            }}
                        />

                    </LinearGradient>
                </Row>

                <Row size={60} style={{padding: 16}}>
                    <NumericKeyboard onKeypadPress={this._onKeypadPress.bind(this)}/>
                </Row>

            </Grid>
        );
    }

    _onKeypadPress(input) {
        if (input === 'backspace') {
            if (this.state.value[this.state.value.length-2] === '.') {
                this.setState({
                    value: this.state.value.substring(0, this.state.value.length - 2),
                    isDecimal: false
                });
            } else {
                this.setState({
                    value: this.state.value.substring(0, this.state.value.length - 1)
                });
            }
        } else if (input === '.' && !this.state.isDecimal) {
            this.setState({value: this.state.value.concat(input), isDecimal: true});
        } else if (input !== '.'){
            this.setState({value: this.state.value + input});
        }
    }
}

export default withNavigation(CodeScreen);
