import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, Dimensions, TextInput, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import BpsApi from "../../services";

import Header from '../../components/Header'
import SearchIcon from '../../assets/icons/search.svg'

const Publikasi = ({navigation}) => {

    useEffect(() => {
        getPublication(1)
    }, [])


    const [publication, setPublication] = useState([])
    const [page, setpage] = useState(1)
    const [keyword, setKeyword] = useState('')
    console.log("Inilah Info", publication)
    console.log("Inilah page", page)

    const getPublication = async (page) => {
        await BpsApi.getAllPublication(page, '').then(res => {
            console.log('Publication', res.data)
            setPublication(res.data.data[1])
            setpage(res.data.data[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    const LoadMore = async (one) => {
        await BpsApi.getAllPublication(one || page.page + 1, keyword).then(res => {
            if (one) {
                if (res.data.data[1]) {
                    console.log('Publication', res.data)
                    setPublication(res.data.data[1])
                    setpage(res.data.data[0])
                }else{
                    Alert.alert("Oopps...!", "Maaf, data tidak ditemukan")
                }
            }else{
                publication.push(...res.data.data[1])
                setpage(res.data.data[0])
            }
            // console.log('Infografis', res.data)
            // setInfografis(res.data.data)
        }).catch(err => {
            console.log("Load more", err.message)
        })
    }

    const PubItem = publication?.map((data) => {
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

    return (
        <View>
            <Header title="Publikasi" navigation={() => navigation.toggleDrawer()} />

            <View
                style={{ paddingVertical: 0, paddingLeft: 8, flexDirection: 'row', alignItems: 'center', backgroundColor: '#eaeaea', marginHorizontal: 20, marginVertical: 10, borderRadius: 15 }}
            >
                <TextInput
                    value={keyword}
                    onChangeText={val => setKeyword(val)}
                    color="black"
                    multiline={false}
                    placeholder="Search"
                    placeholderTextColor="gray"
                    style={{ flex: 1 }}
                    // rightIconSource={require("../../assets/illustrations/search.png")}
                />
                <TouchableOpacity
                    onPress={() => LoadMore(1)}
                >
                    <View
                        style={{ paddingRight: 10, paddingLeft: 30 }}
                    >
                        {/* <VectorIcon name="search" /> */}
                        <SearchIcon width={25} height={25} />
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView>

                <View
                    style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}
                >
                    {PubItem}

                </View>

                {page?.page < page?.pages &&
                    <View
                        style={{ justifyContent: 'center', flexDirection: 'row', paddingBottom: 140 }}
                    >
                        <TouchableOpacity
                            onPress={() => LoadMore()}
                        >
                            <View
                                style={{
                                    backgroundColor: '#2ba0ff',
                                    width: 150,
                                    justifyContent: 'center',
                                    padding: 10,
                                    borderRadius: 10
                                }}
                            >
                                <Text
                                    style={{ 
                                        textAlign: 'center'
                                    }}
                                >
                                    Load More
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }


            </ScrollView>
        </View>
    )
}

export default Publikasi

const styles = StyleSheet.create({
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
