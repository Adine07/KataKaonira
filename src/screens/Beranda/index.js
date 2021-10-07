import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-banner-carousel';
import BpsApi from "../../services";

import Header from '../../components/Header'


const Beranda = ({navigation, route}) => {
    // const item = route.params

    // console.log('Params', item)
    useEffect(() => {
        getPublication(1)
        getInfografis(1)
        getIndikator()
    }, [])


    const [publication, setPublication] = useState([])
    const [infografis, setInfografis] = useState([])
    const [indikator, setIndikator] = useState([])

    const getPublication = async (page) => {
        await BpsApi.getAllPublication(page, '').then(res => {
            console.log('Publication', res.data)
            setPublication(res.data.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    const getInfografis = async (page) => {
        await BpsApi.getAllInfografis(page).then(res => {
            console.log('Infografis', res.data)
            setInfografis(res.data.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    const getIndikator = async () => {
        await BpsApi.getIndikator().then(res => {
            console.log('Indikator', res.data)
            setIndikator(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    
    const CarouselItem = infografis[1]?.slice(0,5).map((data) => {
        return(
            <>
                <View
                    style={styles.box}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('InfografisItem', {data})}
                    >
                        <View
                            style={styles.imageWrapper}
                        >
                            <Image
                                source={{ uri: data.img }}
                                style={styles.image}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    })

    const PubItem = publication[1]?.slice(0,6).map((data) => {
        return(
            <>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PublikasiItem', {data})}
                >
                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: data.cover }}
                        style={styles.PubItem}
                        imageStyle={styles.imageBackground}
                    >
                        <LinearGradient colors={['#00000020', '#00000099']} style={styles.pubLayer}>
                            <Text
                                style={styles.pubText}
                            >
                                {data.title}
                            </Text>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>
            </>
        )
    })

    const IndiItem = indikator?.slice(0,5).map((data) => {
        return(
            <>
                <TouchableOpacity
                    onPress={() => navigation.navigate('IndikatorItem', {data: data.data, judul: data.judul, satuan: data.satuan})}
                >
                    <View
                        style={styles.indikatorWrapper}
                    >
                        {/* <Text
                            style={styles.indikatorUpdate}
                        >
                            Update: 26 Oct 2020
                        </Text> */}
                        <Text
                            style={styles.indikatorContent}
                        >
                            {data.judul}
                        </Text>
                        <Text
                            style={styles.indikatorTag}
                        >
                            dalam satuan {data.satuan || "-"}
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    })
    // console.log("ininih publikasi", publication[1])
    // console.log("ininih infografis", infografis[1])

    return (
        <View
            style={styles.wrapper}
        >
            <Header navigation={() => navigation.toggleDrawer()} title="Kata Kaonira" />

            <ScrollView>

                <View
                    style={{ flex: 1, paddingBottom: 30 }}
                >

                    <Text
                        style={{ fontWeight: '500', fontSize: 18, paddingHorizontal: 20, paddingTop: 20 }}
                    >Infografis</Text>

                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={Dimensions.get('window').width}
                    >

                        {CarouselItem}
                        
                    </Carousel>

                    <View
                        style={styles.box}
                    >
                        <Text
                            style={styles.h1}
                        >Indikator Populer</Text>

                        {IndiItem}
                        
                    </View>

                    <View
                        style={styles.box}
                    >
                        <Text
                                style={styles.h1}
                            >Publikasi</Text>

                        <View
                            style={styles.pubWrapper}
                        >

                            {PubItem}

                        </View>


                    </View>

                </View>
                
            </ScrollView>

        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    box: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    imageWrapper: {
        borderRadius: 10,
    },
    image: {
        height: 200,
        borderRadius: 10,
    },
    h1: {
        fontWeight: '500',
        fontSize: 18,
    },
    indikatorWrapper: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    indikatorUpdate: {
        fontSize: 10,
        color: '#9b00e3',
        fontWeight: '500',
    },
    indikatorContent: {
        fontSize: 14,
        paddingVertical: 2,
        fontWeight: '500',
    },
    indikatorTag: {
        fontSize: 12,
        color: '#fc035a',
    },
    pubWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    PubItem: {
        width: Dimensions.get('window').width / 2.4,
        height: 230,
        borderRadius: 10,
        marginTop: 20,
    },
    imageBackground: {
        borderRadius: 10
    },
    pubLayer: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'flex-end',
        padding: 10,
    },
    pubText: {
        color: 'white',
        fontWeight: 'bold'
    }

})
