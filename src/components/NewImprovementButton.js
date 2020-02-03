import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {withNavigation} from 'react-navigation';

class NewImprovementButton extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        const {color, width, height} = this.props
        console.log("color====>", color)
        return (
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderStyle: 'dashed',
                    borderWidth: 2,
                    borderColor: color,
                    margin: 8,
                    borderRadius: width/4,
                    width: width,
                    height: height
                }}
                onPress={() => this.props.navigation.navigate('Review')}
            >
                <Icon
                    name={Platform.OS === 'ios' ? 'ios-add': 'md-add'}
                    size={28}
                    style={{ textAlign: 'center', lineHeight: 40, color: color }}
                />
            </TouchableOpacity>
        );
    }
}

export default withNavigation(NewImprovementButton);
