import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import Colors from '../styles/Colors'
import {r} from '../styles/Responsive'
import {connect} from 'react-redux'

const Home_Details = (props) => {
    const { itemId, titlee, _urlPoster, _releaseDate, _rating, _synopsis } = props.route.params
    // console.log(itemId)
    return (
        <ScrollView style={{flex: 1, backgroundColor: Colors.primaryColor }}>
            <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.img_cover} source={{uri: _urlPoster}} resizeMode={'repeat'}  />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={[styles.title, {marginLeft: r(13), marginTop: r(15)}]}>{titlee}</Text>
                </View> 
                <View style={{borderBottomWidth: 1, borderColor: '#B7B7B7', width: r(294), marginVertical: r(12), alignSelf: 'center'}}/>
            </View>
            <TouchableOpacity onPress={() => {props.navigation.navigate('AllReview')}}>
                <Text>all review page</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = () => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Home_Details)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center'
    },
    title:{
        fontFamily: 'Roboto-Bold',
        fontSize: r(25)
    },
    img_cover: {
        width: r(300),
        height: r(168.75),
        marginTop: r(20),
        alignSelf: 'center'
    },
    card: {
        marginTop: r(50),
        width: r(326),
        height: r(441),
        backgroundColor: 'white',
        borderRadius: r(20),
        // alignItems: 'center'
    }
})
