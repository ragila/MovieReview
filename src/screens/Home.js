import React, {useState, useEffect} from 'react'
import { ActivityIndicator, StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import Colors from '../styles/Colors'
import {r} from '../styles/Responsive'
import Icon from 'react-native-vector-icons/EvilIcons'
import Icons from 'react-native-vector-icons/Entypo'
import {connect} from 'react-redux'
import {getMovie} from '../redux/action/movie'


const Home = (props) => {
    const [search, setSearch] = useState('')
    const [movie, setMovie] = useState('') 

    useEffect(() => {
        props.getMovies()
    }, [])

    return (
        <ScrollView style={{flex: 1, backgroundColor: Colors.primaryColor }}>
            <View style={styles.container}>
                {props.isLoading ? (
                    <View style={{justifyContent: 'center', flex: 1}}>
                        <ActivityIndicator size="large" color={'white'}/>
                    </View>
                ): (
                    <>
                        <View>
                    <TextInput 
                        underlineColorAndroid="transparent"
                        style={styles.search_bar}
                        placeholder='Search Movies'>
                    </TextInput>
                </View>
                <View style={{flexDirection: 'row' , justifyContent: 'space-between', marginHorizontal: r(30), marginTop: r(25)}}>
                    <Text style={styles.title}>Best Genre</Text>
                    {/* <TouchableOpacity onPress={() => console.log(props.movie)}>

                    </TouchableOpacity> */}
                    {/* <Text style={[styles.txt]}>More</Text> */}
                </View>
                <View style={{flexDirection: 'row', marginTop: r(20), marginLeft: r(30)}}>
                    <ScrollView horizontal={true}>
                        {props.movie.map((item, i) => {
                            return (
                                <TouchableOpacity key={i} style={styles.btn_genre}>
                                    <Text style={{...styles.txt, color:'black', fontSize: r(13)}}>{item.genres[0].genre}</Text>
                                </TouchableOpacity>   
                            )
                        })}
                    </ScrollView>
                </View>
                <Text style={[styles.title, {marginTop: 20, marginLeft: r(30)}]}>Hot Thriller Movies</Text>
                <View style={{alignItems: 'center', marginTop: 20}}>
                    {props.movie.map((item,index) => {
                        return(
                            <View style={styles.card} key={index}>
                        <TouchableOpacity style={{alignItems: 'center'}} 
                            onPress={() => props.navigation.navigate('Home_Details', 
                                    {itemId: item.id,
                                     titlee: item.title,
                                     _urlPoster: item.urlPoster,
                                     _releaseDate: item.releaseDate,
                                     _rating: item.rating,
                                     _synopsis: item.synopsis
                                    })} >
                            <Image resizeMode={'repeat'} style={styles.img_cover} source={{uri: item.urlPoster}} />
                        </TouchableOpacity>
                        <Text numberOfLines={4} style={styles.txt_desc}>{item.synopsis}</Text>
                    <View style={{borderBottomWidth:1, width: r(307), borderColor: '#B7B7B7', marginTop: r(20), alignSelf: 'center'}}/>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: r(10), marginTop: r(5)}}>
                            <TouchableOpacity style={{flexDirection: 'row' }}
                                onPress={() => console.log(props.movie[1].title)}>
                                <Icon name='comment' size={r(35)} color='black' />
                                <Text style={{alignSelf: 'center'}}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{alignItems: 'center'}}>
                                <Icons name='share' size={r(30)} color='black' />
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                        )
                    })}
                    
                </View>
                    </>
                )}
                
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.movie.isLoading,
    movie:  state.movie.movies
})

const mapDispatchToProps = (dispatch) => ({
    getMovies: () => dispatch(getMovie())
})


export default connect(mapStateToProps, mapDispatchToProps )(Home);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primaryColor
    },
    search_bar:{
        width: r(330), height: r(36), backgroundColor: 'white', borderRadius: r(10),
        marginTop: r(26), justifyContent: 'center', alignSelf: 'center',paddingHorizontal: r(10)
    },
    txt:{
        fontFamily: 'Roboto',
        color: 'white',
        fontSize: r(15)
    },
    txt_desc: {
        fontFamily: 'Roboto',
        fontSize: r(12),
        marginHorizontal: r(15),
        marginTop: r(18),

    },
    title:{
        fontFamily:'Roboto-Bold', alignItems: 'flex-start', fontSize: r(20), color: 'white'
    },
    img_cover:{
        width: r(300),
        height: r(170),
        marginTop: r(20)
    },
    card: {
        width: r(330),
        height: r(337),
        backgroundColor: 'white',
        borderRadius: r(20),
        marginTop: r(20)
    },
    btn_genre: {
        width:r(85),
        height:r(32),
        backgroundColor: 'white',
        borderRadius: r(10),
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 10
    }
})
