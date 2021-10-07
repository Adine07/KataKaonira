import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

import BpsApi from "../../services";

import Header from '../../components/Header';

const Indikator = ({navigation}) => {

    useEffect(() => {
        getIndikator()
    }, [])
    
    const [indikator, setIndikator] = useState([])
    
    const getIndikator = async () => {
        await BpsApi.getIndikator().then(res => {
            console.log('Indikator', res.data)
            setIndikator(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    const IndiItem = indikator?.map((data) => {
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

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header title="Indikator" navigation={() => navigation.toggleDrawer()} />

            <ScrollView>

                <View
                    style={{ padding: 20 }}
                >
                    {IndiItem}
                </View>

            </ScrollView>
        </View>
    )
}

export default Indikator

const styles = StyleSheet.create({
    
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
})
