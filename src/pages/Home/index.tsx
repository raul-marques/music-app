import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Slider } from 'react-native';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { Wrapper, Title } from './styles';
import AssetsImg from '../../../assets';



const gray = "#91A1BD";

const Home: React.FC = () => {
  const MenuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottonShadow}>
          <View style={[
            styles.inner,
            { width: size || 48, height: size || 48, borderRadius: size / 2 || 48/2 },
            style
            ]}>
              {children}
          </View>
        </View>
      </View>
    )
  }
  return (
    <Wrapper>
      <SafeAreaView style={{ alignSelf: "stretch"}}>
        <View style={{ marginHorizontal: 32, marginTop: 32 }}>
          <View style={styles.topContainer}>
            <MenuMorph size={48}>
              <AntDesign name="arrowleft" size={20} color={gray} />
            </MenuMorph>
            <View>
              <Text style={styles.playing}>PLAYING NOW</Text>
            </View>

            <MenuMorph size={48}>
              <Entypo name="menu" size={24} color={gray} />
            </MenuMorph>
          </View>

          <View style={styles.songArtContainer}>
            <MenuMorph size={230}>
              <Image source={AssetsImg.flower} style={styles.songArt}/>
            </MenuMorph>
          </View>

          <View style={styles.songContainer}>
              <Text style={styles.title}>Lost it</Text>
              <Text style={styles.artist}>Flume ft. Vic Mensa</Text>
          </View>

          <View style={styles.trackContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.time}>1:21</Text>
                <Text style={styles.time}>3:46</Text>
              </View>
              <Slider minimumValue={0} maximumValue={1}
                minimumTrackTintColor="#8AAAFF"
                thumbTintColor="#7B9BFF"
                maximumTrackTintColor="#DAE6F4" />
          </View>

          <View style={styles.controlsContainer}>
            <MenuMorph size={80}>
              <Ionicons name="ios-rewind" size={24} color={gray} />
            </MenuMorph>
            <MenuMorph size={80} style={{ backgroundColor: '#8AAAFF', borderColor: '#8AAAFF' }}>
              <Ionicons name="ios-pause" size={24} color={'#fff'} />
            </MenuMorph>
            <MenuMorph size={80}>
              <Ionicons name="ios-fastforward" size={24} color={gray} />
            </MenuMorph>
          </View>
        </View>
      </SafeAreaView>
    </Wrapper>
  );
};


const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  playing: {
    color: gray,
    fontWeight: '800'
  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
    elevation: 10
  },
  bottonShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD',
    elevation: 10
  },
  songArtContainer: {
    marginVertical: 35,
    alignItems: 'center',
  },
  songArt: {
    width: 230,
    height: 230,
    borderRadius: 150,
    borderColor: '#D7E1F3',
    borderWidth: 10
  },
  songContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#6C7A93',
    fontWeight: '600'
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: gray,
    fontWeight: '500'
  },
  trackContainer: {
    marginTop: 20,
  },
  time: {
    fontSize: 10,
    color: gray,
    fontWeight: '700'
  },
  controlsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})


export default Home;
