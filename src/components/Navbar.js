import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import NavbarButton from './NavbarButton';
import {human, systemWeights} from 'react-native-typography';
import Modal from "react-native-modal";
import colors from '../styles/colors';
import globalStyles from '../styles/global';
import {withNavigation} from 'react-navigation';
import HelpScreen from '../screens/HelpScreen';
import CommentsScreen from '../screens/CommentsScreen';

class Navbar extends React.Component {

    state = {
        menuOpen: false,
        helpOpen: false,
    };

    render () {
        const whiteTheme = this.props.whiteTheme;
        return (
            <>
                {
                    !whiteTheme ?
                        <LinearGradient
                            colors={['#FCCC0B', '#DD2564']}
                            locations={[0, 1]}
                            useAngle={true}
                            angle={203.07}
                            angleCenter={{x: 0.5, y: 0.5}}
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                padding: 16
                            }}
                        >
                            <NavbarButton name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                                          onPress={this.props.goBack}
                            />

                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <NavbarButton name={Platform.OS === 'ios' ? 'ios-help' : 'md-help'}
                                              containerStyle={{marginRight: 16}}
                                              onPress={() => this.setState({helpOpen: true})}
                                />
                                <NavbarButton name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                                              onPress={this._openMenu.bind(this)}
                                />
                            </View>

                        </LinearGradient>
                        :
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                padding: 16,
                                backgroundColor: '#FFFFFF'
                            }}
                        >
                            <NavbarButton whiteTheme name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                                          containerStyle={{backgroundColor: colors.STORM}}
                                          iconStyle={{color: '#ffffff'}}
                                          onPress={this.props.goBack}
                            />

                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <NavbarButton whiteTheme name={Platform.OS === 'ios' ? 'ios-help' : 'md-help'}
                                              containerStyle={{marginRight: 16, backgroundColor: colors.STORM}}
                                              iconStyle={{color: '#ffffff'}}
                                              onPress={() => this.setState({helpOpen: true})}
                                />
                                <NavbarButton whiteTheme name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                                              containerStyle={{backgroundColor: colors.STORM}}
                                              iconStyle={{color: '#ffffff'}}
                                              onPress={this._openMenu.bind(this)}
                                />
                            </View>

                        </View>
                }
                <Modal
                    style={[
                            globalStyles.dropShadow,
                            {
                                position: 'absolute',
                                right: 0,
                                top: 64,
                                borderRadius: 20,
                                backgroundColor: '#ffffff',
                                paddingTop: 16,
                                paddingBottom: 16,
                                paddingLeft: 64,
                                paddingRight: 64
                            }
                        ]}
                        isVisible={this.state.menuOpen}
                        onBackdropPress={() => this.setState({menuOpen: false})}
                        onBackButtonPress={() => this.setState({menuOpen: false})}
                        hideModalContentWhileAnimating
                    >
                    <TouchableOpacity onPress={() => this._doNavigate('Home')}>
                        <Text style={[human.body, systemWeights.light]}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._doNavigate('Leaderboard')}>
                        <Text style={[human.body, systemWeights.light]}>Leadership Board</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._doNavigate('NearbyBusinesses')}>
                        <Text style={[human.body, systemWeights.light]}>Business by proximity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._doNavigate('Profile')}>
                        <Text style={[human.body, systemWeights.light]}>Account</Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            borderBottomColor: colors.LIGHT_BLUE,
                            borderBottomWidth: 1,
                            marginTop: 16,
                            marginBottom: 16
                        }}
                    />

                    <TouchableOpacity onPress={() => this.setState({helpOpen: true})}>
                    <Text style={[human.body, systemWeights.light]}>Help</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this._doNavigate('Login')}>
                        <Text style={[human.body, systemWeights.light]}>Exit</Text>
                    </TouchableOpacity>
                </Modal>

                <HelpScreen
                    open={this.state.helpOpen}
                    close={() => this.setState({helpOpen: false})}
                />
            </>
        );
    }

    _openMenu() {
        this.setState({menuOpen: true});
    }

    _doNavigate(routeName) {
        this.setState({menuOpen: false});
        this.props.navigation.navigate(routeName);
    }
}

export default withNavigation(Navbar);
