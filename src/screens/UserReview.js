import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TouchableHighlight, Modal, TextInput } from 'react-native'
import Colors from '../styles/Colors'
import { r } from '../styles/Responsive'
import Icon from 'react-native-vector-icons/Entypo'
import Icons from 'react-native-vector-icons/FontAwesome'
import Trash from 'react-native-vector-icons/FontAwesome5'

const UserReview = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [defaultRating, setDefaultRating] = useState(2);
    const [maxRating, setMaxRating] = useState([1,2,3,4,5,6,7,8,9,10]);
     // Filled Star. You can also give the path from local
    const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

const CustomRatingBar = () => {
  return (
    <View style={styles.customRatingBarStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setDefaultRating(item)}>
            <Image
              style={styles.starImageStyle}
              source={
                item <= defaultRating
                  ? { uri: starImageFilled }
                  : { uri: starImageCorner }
              }
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

    return (
        <ScrollView style={{flex: 1, backgroundColor: Colors.primaryColor }}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={{flex: 1, flexDirection: 'row', marginLeft:r(10), marginTop: r(13)}}>
                        <View style={{}}>
                            <Image source={{uri: 'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png'}}
                                style={styles.img_cover}
                            />
                        </View>
                        <View style={{flexDirection: 'column', marginLeft: r(18)}}>
                            <Text style={{fontFamily: 'Roboto-Bold', fontSize: r(20)}}>Parasite (2019)</Text>
                            <Text style={{fontFamily: 'Roboto', fontSize: r(14)}}>Reviewed February 24, 2020</Text>
                            <View style={{flexDirection: 'row', marginTop: r(5)}}>
                                <Icon name='star' color={Colors.accentColor} size={r(20)}/>
                                <Text style={{fontFamily: 'Roboto', fontSize: 14, alignSelf: 'center', marginLeft: r(11)}}>9 / 10</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginTop: r(15)}}>
                                <TouchableOpacity style={styles.btn_action}
                                    onPress={() => setModalVisible(true)}>
                                    <Icons name='pencil' size={r(20)} color={'white'} />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btn_action, {marginLeft:r(15)}]}>
                                    <Trash name='trash' size={r(20)} color={'white'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginHorizontal: r(12), marginBottom: r(15)}}>
                        <Text style={{fontFamily: 'Roboto-Bold', fontSize: r(14)}}>Greate Mantab!</Text>
                        <Text style={{fontFamily: 'Roboto', fontSize: r(12), marginTop:r(10)}}>Unbelievable! Great movie! I’m lovin' it! Maybe, I think, someday another country will remake this movie.</Text>
                    </View>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{fontFamily: 'Roboto-Bold', fontSize: r(16)}}>How do you think about this movie?</Text>
                            <CustomRatingBar />
                        <Text style={[styles.textStyle, {marginTop: r(15)}]}>
                            Your Rating: {defaultRating} / {Math.max.apply(null, maxRating)}
                        </Text>
                        <TextInput style={[styles.txt_input, {marginTop: r(5), paddingHorizontal: r(10)}]}>
                            <Text style={[styles.textStyle, {fontSize: r(12)}]}>HEADLINE</Text>
                        </TextInput>
                        <TextInput 
                            numberOfLines={10}
                            style={[styles.txt_input, {marginTop: r(10), paddingHorizontal: r(10), height: r(100)}]}>
                            <Text style={[styles.textStyle, {fontSize: r(12), fontFamily: 'Roboto'}]}>HEADLINE</Text>
                        </TextInput>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: Colors.primaryColor, width: r(100), height:r(30), marginTop: r(15), justifyContent: 'center' }}
                            onPress={() => {
                                alert(defaultRating)
                                setModalVisible(!modalVisible);
                            }}>
                            <Text style={[styles.textStyle, { color: 'white'}]}>Submit</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

export default UserReview

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center'
    },
    txt_input: {
        width: r(270),height: r(30),backgroundColor: 'white', borderRadius:r(10), padding: 0
    },
    img_cover: {
        width: r(81), height: r(117)
    },
    btn_action:{
        width: r(30), height: r(30), borderRadius: r(30)/ 2, backgroundColor: Colors.accentColor, justifyContent: 'center', alignItems: 'center'
    },
    card: {
        width:r(326),
        height:r(217),
        backgroundColor: Colors.card,
        borderRadius: r(20),
        marginTop: r(20),
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
      },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: r(15),
        },
    starImageStyle: {
        width: r(25),
        height: r(25),
        resizeMode: 'cover',
        },
    modalView: {
        width: r(326),
        height: r(326),
        margin: r(20),
        backgroundColor: "#FFE7AB",
        borderRadius: r(20),
        padding: r(15),
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        fontFamily: 'Roboto-Bold', fontSize: r(16),
        textAlign: "center", color: Colors.primaryColor,
        // marginTop: r(15)
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
})
