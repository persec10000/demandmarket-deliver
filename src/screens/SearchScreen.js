import React from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from '../components/Navbar';
import SearchResult from '../components/SearchResult';
import SearchResult2 from '../components/SearchResult2';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchOptionsModal from '../components/SearchOptionsModal';
import ImagePicker from 'react-native-image-picker';

const imagePickerOptions = {
    title: 'Select product',
    mediaType: 'photo',
};

export default class SearchScreen extends React.Component {
    state = {
        searchOptionsModalOpen: false,
        searchOption: 'product',
        productPic: null
    };

    render () {
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar/>
                </Row>

                <Row size={15} style={{width: '100%', padding: 16, justifyContent: 'space-between', alignItems: 'center'}}>
                    <SearchBar/>

                    <TouchableOpacity
                        onPress={() => this.setState({searchOptionsModalOpen: true})}
                        style={{ borderRadius: 25, height: 40, width: 40, backgroundColor: '#e2f0ff', borderWidth: 1, borderColor: '#8395A7', marginLeft: 16, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon
                            name={Platform.OS === 'ios' ? 'ios-options': 'md-options'}
                            size={26}
                            style={{ textAlign: 'center', lineHeight: 40 }}
                        />

                        <SearchOptionsModal
                            open={this.state.searchOptionsModalOpen}
                            close={() => this.setState({searchOptionsModalOpen: false})}
                            changeSearchOption={(searchOption) => this.setState({searchOption})}
                            searchOption={this.state.searchOption}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ScanBarcode')}
                        style={{ borderRadius: 25, height: 40, width: 40, backgroundColor: '#e2f0ff', borderWidth: 1, borderColor: '#8395A7', marginLeft: 16, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon
                            name={Platform.OS === 'ios' ? 'ios-barcode': 'md-barcode'}
                            size={26}
                            style={{ textAlign: 'center', lineHeight: 40 }}
                        />
                    </TouchableOpacity>
                </Row>

                <Row size={80}>
                    {
                        this.state.searchOption === 'product' &&
                        <ScrollView>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                            <SearchResult name={'Greg Hawkins'} company={'IBM'} distance={'20 Km'}/>
                        </ScrollView>
                    }
                    {
                        this.state.searchOption === 'campaign' &&
                        <ScrollView>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                            <SearchResult2 name={'Greg Hawkins'} company={'IBM'}/>
                        </ScrollView>
                    }
                </Row>
            </Grid>
        );
    }

    _showImagePicker() {
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    productPic: source,
                });
            }
        });
    }
}
