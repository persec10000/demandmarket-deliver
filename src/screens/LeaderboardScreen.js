import React from 'react';
import {ScrollView} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from '../components/Navbar';
import LeaderboardItem from '../components/LeaderboardItem';
import {withNavigation} from 'react-navigation';

class LeaderboardScreen extends React.Component {
    render () {
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar goBack={() => this.props.navigation.goBack()} />
                </Row>

                <Row size={85}>
                    <ScrollView style={{padding: 16}}>
                        <LeaderboardItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <LeaderboardItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <LeaderboardItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <LeaderboardItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <LeaderboardItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <LeaderboardItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <LeaderboardItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    </ScrollView>
                </Row>
            </Grid>
        );
    }
}

export default withNavigation(LeaderboardScreen);
