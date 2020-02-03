import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import Comment from '../components/Comment';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CommentsScreen extends React.Component {
    render () {
        return (
            <Modal
                style={[
                    {
                        flex: 1,
                        borderRadius: 20,
                        backgroundColor: '#ffffff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 64,
                    }
                ]}
                isVisible={this.props.open}
                onBackdropPress={() => this.props.close()}
                onBackButtonPress={() => this.props.close()}
                hideModalContentWhileAnimating
            >
                <ScrollView>
                    <TouchableOpacity style={{width: '100%', justifyContent: 'flex-end', flexDirection: 'row'}} onPress={() => this.props.close()}>
                        <Icon name={Platform.OS === 'ios' ? 'ios-close': 'md-close'} size={34} style={{marginRight: 8, marginTop: 8}}/>
                    </TouchableOpacity>
                    <Comment name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    <Comment name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    <Comment name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    <Comment name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    <Comment name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    <Comment name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                    <Comment name={'Greg Hawkins'} subname={'eu id ex'} title={'non commodo ipsum'} subtitle={'ex excepteur ea reprehenderit consequat ad'}/>
                </ScrollView>
            </Modal>
        );
    }
}
