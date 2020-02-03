import React from 'react';
import {ScrollView, View, TouchableOpacity, FlatList} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from '../components/Navbar';
import SearchResult from '../components/SearchResult';
import NearbyResult from '../components/NearbyResult';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchOptionsModal from '../components/SearchOptionsModal';
import NearbyBusinessListItem from '../components/NearbyBusinessListItem'
import Geolocation from '@react-native-community/geolocation';
import Loader from '../components/Loader';

export default class NearbyBusinessesScreen extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
          dataList:[],
          loading: true,
          item: null,
          moreInfoModalOpen: false
      };
      this.onClicked = this.onClicked.bind(this)
    }
  componentDidMount()
  {
    Geolocation.getCurrentPosition(info => {
        this.getData(info.coords.latitude, info.coords.longitude)
    });
  }
  getData(lat, lon)
  {
    var url = "http://www.demandmarketapp.com/API/findStoresWithCampaignsByDistance?lat=" + lat + "&amp&lng=" + lon + "&amp&distance=1423"
    // var url = "http://www.demandmarketapp.com/API/findStoresWithCampaignsByDistance?lat=23&amp&lng=43&amp&distance=1423"
    fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'   
        }
      }).then((response) => response.json())
          .then((responseJson) => {
           if(responseJson.success == 1)
           {
             this.setState({dataList:responseJson.result})
           }
           else
           {
                Alert.alert("Can not find campaign")
           }

           this.setState({ loading: false });
           
          })
          .catch((error) => {
            Alert.alert("Sever Connection error")
            return
    });  
  }
  onClicked(data)
  {
    
    // global.select_campaign_id = data.campaign_id
    this.setState({moreInfoModalOpen: true, item: data})
  }
    render () {
        console.log("item====>",this.state.item)
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar/>
                </Row>

                <Loader loading={this.state.loading} />

                <Row size={80}>
                        <FlatList
                            numColumns={1}
                            style={{ flex: 0, paddingTop:10}}
                            data={this.state.dataList}
                            removeClippedSubviews={true}
                            initialNumToRender={10}
                            extraData={this.state.refresh}
                            renderItem={({ item: rowData }) => {
                                return (
                                    <NearbyResult data={rowData} onClicked={this.onClicked}/>     
                                    );
                            }}
                            keyExtractor={(item, index) => index}
                        /> 
                </Row>
                {this.state.item&&
                    <NearbyBusinessListItem 
                        open={this.state.moreInfoModalOpen}
                        close={() => this.setState({moreInfoModalOpen: false})}
                        item={this.state.item}
                    />
                }
            </Grid>
        );
    }
}
