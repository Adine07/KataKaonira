import React, {useState, useEffect} from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BpsApi from "../../services";

import Header from '../../components/Header';

const Infografis = ({navigation}) => {

    const [infografis, setInfografis] = useState([])
    const [page, setpage] = useState(1)
    console.log("Inilah Info", infografis)
    console.log("Inilah page", page)
    

    useEffect(() => {
        getInfografis(1)
    }, [])
    
    const getInfografis = async (page) => {
        await BpsApi.getAllInfografis(page).then(res => {
            console.log('Infografis', res.data)
            setInfografis(res.data.data[1])
            setpage(res.data.data[0])
        }).catch(err => {
            console.log(err.message)
        })
    }

    const LoadMore = async () => {
        await BpsApi.getAllInfografisPusat(page.page + 1).then(res => {
            // console.log('Infografis', res.data)
            // setInfografis(res.data.data)
            infografis.push(...res.data.data[1])
            setpage(res.data.data[0])
        }).catch(err => {
            console.log(err.message)
        })
    }
    
    const Item = infografis?.map((data) => {
        return(
            <>
                <TouchableOpacity
                    onPress={() => navigation.navigate('InfografisItem', {data})}
                >
                    <View style={{ marginBottom: 20 }}>
                        <Image
                            style={{ width: '100%', height: 200, borderRadius: 10 }}
                            source={{ uri: data.img}}
                        />
                        <Text
                            style={{ paddingTop: 5, fontWeight: 'bold', textAlign: 'center' }}
                        >{data.title}</Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    })

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header title="Infografis" navigation={() => navigation.toggleDrawer()} />
            
            <ScrollView>

                <View
                    style={{ padding: 20 }}
                >

                    {Item}
                    
                    {page?.page < page?.pages &&
                        <View
                            style={{ justifyContent: 'center', flexDirection: 'row' }}
                        >
                            <TouchableOpacity
                                onPress={() => LoadMore(page)}
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


                </View>

            </ScrollView>
        </View>
    )
}

export default Infografis

const styles = StyleSheet.create({})
