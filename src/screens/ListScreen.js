import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Grid, Row} from 'react-native-easy-grid';
import Navbar from '../components/Navbar';
import MarketListItem from '../components/MarketListItem';

export default class ListScreen extends React.Component {
    render () {
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar/>
                </Row>

                <Row size={85}>
                    <ScrollView>
                        <MarketListItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <MarketListItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <MarketListItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <MarketListItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <MarketListItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <MarketListItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                        <MarketListItem name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    </ScrollView>
                </Row>
            </Grid>
        );
    }
}
