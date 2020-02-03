import React from 'react';
import {TouchableOpacity, Text, Dimensions, View} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { withNavigation } from 'react-navigation';
import ProductImage from '../components/ProductImage';
import Navbar from '../components/Navbar';
import {human, systemWeights} from 'react-native-typography';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductGraph from '../components/ProductGraph';
import Carousel from 'react-native-snap-carousel';
import MoreInfoModal from '../components/MoreInfoModal';
import Loader from '../components/Loader';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this._loadMoreProducts = this._loadMoreProducts.bind(this);
        global.currentScreen = "swipe_screen"
    }

    state = {
        loading: true,
        entries: [
            //{name: 'Pêssegos Australianos', description: 'Lorem ipsum dolor sir amet', price: '260,00', image: require('../assets/img1.png')},
            //{name: 'Banana da Madeira', description: 'Lorem ipsum dolor sir amet', price: '420,00', image: require('../assets/img2.jpg')},
        ],
        moreInfoModalOpen: false
    };

    componentDidMount() {
        this._loadMoreProducts();
    }

    render () {
        return (
            <Grid style={{justifyContent: 'center', alignItems: 'center'}}>
                <Row size={15}>
                    <Navbar/>
                </Row>

                <Loader loading={this.state.loading} />

                <Row size={85}>
                    {
                        this.state.entries.length > 0 &&
                        <Carousel
                            ref={(c) => {
                                this._carousel = c;
                            }}
                            initialNumToRender={5}
                            data={this.state.entries}
                            renderItem={this._renderItem}
                            sliderWidth={Dimensions.get("window").width}
                            itemWidth={Dimensions.get("window").width}
                            extraData={this.state}
                            onBeforeSnapToItem={(slideIndex) => {if(slideIndex === this.state.entries.length - 3) this._loadMoreProducts()}}
                        />
                    }
                </Row>
            </Grid>
        );
    }

    _renderItem = ({item, index}) => {
        return (
            <Product item={item} _gotoHome={this.gotoHome}/>
        );
    };

    _getAnotherProduct() {
        return fetch('http://www.demandmarketapp.com/API/getItemStats')
    };

    gotoHome = (item) => {
        this.props.navigation.navigate("Improvement", {item: item})
    };

    async _loadMoreProducts() {
        await Promise.all([
            this._getAnotherProduct().then(e => e.json()),
            this._getAnotherProduct().then(e => e.json()),
            this._getAnotherProduct().then(e => e.json()),
            this._getAnotherProduct().then(e => e.json()),
            this._getAnotherProduct().then(e => e.json()),
        ]).then((data) => {
            let entries = this.state.entries;

            entries = entries.filter((item) => {
              return item !== undefined
            })

            this.setState({ loading: false });

            entries = entries.concat(data);

            this.setState({ entries: entries });
        });
    }
}

export default withNavigation(HomeScreen);

class Product extends React.Component {

    state = {
        moreInfoModalOpen: false,
    };

    constructor(props) {
        super(props);
    }

   

    render() {
        return (
            <Grid>
                <Row size={66} style={{padding: 16}}>
                    <ProductImage product={this.props.item}/>
                </Row>

                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 5}}>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignSelf: 'flex-end', paddingRight: 16}}
                        onPress={() => this.props._gotoHome(this.props.item)}
                    >
                        <Text style={[human.body]}>
                            Improvement
                        </Text>
                        <Icon name={Platform.OS === 'ios' ? 'ios-arrow-dropdown': 'md-arrow-dropdown'} style={[human.body, {marginLeft: 8}]}/>
                    </TouchableOpacity>   
                    {this.props.item.description.length > 0 && 
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignSelf: 'flex-end', paddingRight: 16}}
                        onPress={() => this.setState({moreInfoModalOpen: true})}
                    >
                        <Text style={[human.body]}>
                            More information
                        </Text>
                        <Icon name={Platform.OS === 'ios' ? 'ios-arrow-dropdown': 'md-arrow-dropdown'} style={[human.body, {marginLeft: 8}]}/>
                    </TouchableOpacity>
                    }
                </View>
                <MoreInfoModal
                        open={this.state.moreInfoModalOpen}
                        close={() => this.setState({moreInfoModalOpen: false})}
                        item={this.props.item}
                />
                <Row size={33} style={{padding: 16}}>
                    <ProductGraph/>
                </Row>
            </Grid>
        );
    }
}