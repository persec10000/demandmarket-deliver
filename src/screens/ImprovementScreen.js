import React from 'react';
import {
    Content, 
  } from "native-base";
import {ImageBackground, Text, View, TouchableOpacity,Image, TextInput,
     Alert, Dimensions} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Navbar from '../components/Navbar';
import NavbarButton from '../components/NavbarButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { human, systemWeights } from 'react-native-typography'
import {ScrollView} from 'react-navigation';
import info from '../assets/img1.png'
import { withNavigation } from 'react-navigation';
import colors from '../styles/colors';
// import Global from './Global'
import ImagePicker from 'react-native-image-picker';
import MoreInfoModal from '../components/MoreInfoModal';

const imagePickerOptions = {
    title: 'Take a picture',
    mediaType: 'photo',
};
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
class ImprovementScreen extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
       name:'',
       desc:'',
       recommPrice:'',
       pic:'',
       moreInfoModalOpen: false,
       item: ''
      // picData:''
      };
      global.currentScreen == "improvement_screen"
      this.gotoInfo = this.gotoInfo.bind(this)
    }
    gotoInfo()
    {
        let item = this.props.navigation.state.params.item;
        this.setState({moreInfoModalOpen: true , item: item})
    }
    submit()
    {
      if(this.state.name == '')
      {
          Alert.alert("There is no title")
          return
      }
      if(this.state.desc == '')
      {
          Alert.alert("There is no description")
          return
      }
    //   if(this.state.recommPrice == '')
    //   {
    //       Alert.alert("There is no recommended price")
    //   }
    var imageSource= this.state.pic;
    const formData = new FormData();
    formData.append('image_tag', "1");
    formData.append('user_id', "1");
    formData.append('campaign_id', "1");
    formData.append('title',this.state.name);
    formData.append('description',this.state.desc);
    formData.append('price',this.state.recommPrice);
    formData.append('image', {
        uri: imageSource,
        name: 'photo',
        type: 'image/jpg'
    });

    if(!imageSource)
    {
          Alert.alert("There is no image")
          return
    }

    if(!global.currentlyUploading) {
      global.currentlyUploading = 1
      //http://www.demandmarketapp.com/API/uploadImage
        var url = 'http://www.demandmarketapp.com/API/uploadImage'
        fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            body: formData
          }).then((response) => response.json())
              .then((responseJson) => {
                global.currentlyUploading = 0
                if(responseJson.success == 1)
                {
                    alert("Successfully uploaded!")
                } else {
                  alert("Failed upload!")
                }
              })
              .catch((error) => {
               alert(JSON.stringify(error))
                return
        }); 

    } else {
      alert("Still Uploading - Please Wait")

    }


    }
    render () {
        // let item = this.props.navigation.state.params.item; 
        return (
            <ScrollView>
                <ImageBackground source={require('../assets/Background-padrao.png')} style={{width: '100%', height: '100%'}}>
                        <Navbar goBack={() => this.props.navigation.goBack()}/>
                    <View style={{height:DEVICE_HEIGHT*0.3}}>
                    <Text style={{textAlign: 'center', color:'white', fontSize:30, marginRight:20, fontWeight:'bold'}}>{"Improvement"}</Text>
                        {/* <View style={{marginTop:50, marginLeft:20, height:50, flexDirection:'row',justifyContent:'space-between'}}>
                            
                            <NavbarButton name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                                                    onPress={this.props.navigation.goBack}
                            />
                            
                        </View> */}
                        <View style={{height:DEVICE_HEIGHT*0.35 - 180 }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 16,
                                marginBottom: 16,
                            }}>
                                <TouchableOpacity
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderStyle: 'dashed',
                                        borderWidth: 2,
                                        borderColor: '#ffffff',
                                        margin: 16,
                                        borderRadius: 20,
                                        width: DEVICE_HEIGHT*0.35 - 200,
                                        height: DEVICE_HEIGHT*0.35 - 200
                                    }}
                                    onPress={() => this._showImagePicker()}
                                >
                                    {(this.state.pic == '' ) && <Icon
                                        name={Platform.OS === 'ios' ? 'ios-camera': 'md-camera'}
                                        size={45}
                                        style={{ textAlign: 'center', lineHeight: 40, color: '#ffffff' }}
                                    />}
                                    {(this.state.pic != '' ) &&<Image source={{uri:this.state.pic}} 
                                        style={{width: DEVICE_HEIGHT*0.35 - 200,
                                                height: DEVICE_HEIGHT*0.35 - 200}}/>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* <View style={{height:80, flexDirection:'row', justifyContent:'space-between'}}>
                            <View/>
                            <TouchableOpacity 
                              style={{width:60, height:60, borderRadius:35, backgroundColor:'white', marginRight:20, alignItems:'center', justifyContent:'center'}}
                               onPress={()=>this.gotoInfo()}
                              >
                                <Image source={{uri:item.image}} style={{width:42, height:42}}/>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                    <View style={{height:DEVICE_HEIGHT*0.7, backgroundColor:'#fff',overflow:'hidden', borderTopRightRadius:25, borderTopLeftRadius:25}}>
                        <View style={{height:DEVICE_HEIGHT*0.65 - 40,marginTop:40}}>
                            <Content>
                                <View style={{height:50, width:DEVICE_WIDTH - 40, borderRadius:25, 
                                            borderColor:'#606060', borderWidth:1, marginRight:20, 
                                            marginLeft:20, alignItems:'center', justifyContent:'center'}}>
                                <TextInput     
                                    style={{width:DEVICE_WIDTH - 80, height:40, color:'#000'}}    
                                    returnKeyType ="done"              
                                    placeholder={"Enter Improvement Title ..."}
                                    placeholderTextColor="#BBBBBB"
                                    onChangeText={name => this.setState({name})}
                                    underlineColorAndroid="transparent"
                                />
                                </View>

                                <View style={{height:120, width:DEVICE_WIDTH - 40, borderRadius:25, 
                                            borderColor:'#606060', borderWidth:1, marginRight:20, 
                                            marginTop:25,
                                            marginLeft:20, alignItems:'center', justifyContent:'center'}}>
                                <TextInput     
                                    style={{width:DEVICE_WIDTH - 80, height:100, color:'#000'}}    
                                    returnKeyType = "next"
                                    multiline={true}               
                                    placeholder={"Your Description ..."}
                                    placeholderTextColor="#BBBBBB"
                                    onChangeText={desc => this.setState({desc})}
                                    underlineColorAndroid="transparent"
                                />
                                </View>
                                <View style={{height:80, width:DEVICE_WIDTH - 40, borderRadius:25, 
                                            borderColor:'#606060', borderWidth:1, marginRight:20, marginTop:25,
                                            marginLeft:20, alignItems:'center', justifyContent:'center'}}>
                                    <TextInput     
                                        style={{width:DEVICE_WIDTH - 80, height:70, color:'#000'}}    
                                        returnKeyType ="done"              
                                        placeholder={"Your recommened price (optional)"}
                                        placeholderTextColor="#BBBBBB"
                                        onChangeText={recommPrice => this.setState({recommPrice})}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <TouchableOpacity style={{height:60, width:DEVICE_WIDTH - 40, borderRadius:30, 
                                            marginRight:20, marginTop:25, backgroundColor:colors.BLUE,
                                            marginLeft:20, alignItems:'center', justifyContent:'center'}}
                                            onPress={()=>this.submit()}
                                            >
                                            <Text style={{color:'white', fontWeight:'bold', fontSize:24}}>{"Improve"}</Text>
                                </TouchableOpacity>
                            </Content>
                        </View>
                    </View>
                </ImageBackground>
                <MoreInfoModal
                    open={this.state.moreInfoModalOpen}
                    close={() => this.setState({moreInfoModalOpen: false})}
                    item={this.state.item}
                />
            </ScrollView>
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
                //const source = { uri: response.uri };

                // You can also display the image using data:
               // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                
                this.setState({
                    pic:response.uri,
                });
            }
        });
    }
}

export default withNavigation(ImprovementScreen);
