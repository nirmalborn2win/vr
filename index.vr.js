import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sound
} from 'react-vr';

export default class vr extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('tour.jpg')}/>
        <Sound
  source={{
        mp3: asset('ar.mp3'),
     }}
   />
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 0.3,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Welcome to the VR World
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr', () => vr);
