import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import Header from '../../components/Header'

import BpsApi from "../../services";

const Kondef = ({navigation}) => {
    const [variabel, setVariabel] = useState([])
    const [indikator, setIndikator] = useState([])
    const [show, setShow] = useState("indikator")

    // console.log("Inilah indikator", indikator[0])

    useEffect(() => {
        getVariabel()
        getIndikator()
    }, [])

    const getVariabel = async () => {
        await BpsApi.getKondefVariabel().then(res => {
            // console.log('Variabel', res.data)
            setVariabel(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    const getIndikator = async () => {
        await BpsApi.getKondefIndikator().then(res => {
            // console.log('Indikator', res.data)
            setIndikator(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    const renderItem = ({item}) => {
        return(
            <>
                <Collapse
                    style={{ margin: 4 }}
                >
                
                        <CollapseHeader
                            style={styles.conHead}
                        >
                            <Text
                                style={{ fontWeight: 'bold' }}
                            >
                                {item.judul}
                            </Text>
                        </CollapseHeader>

                        <CollapseBody>
                            <View
                                style={styles.con}
                            >
                                <Text>
                                    {item.deskripsi}
                                </Text>
                            </View>
                        </CollapseBody>
                
                </Collapse>
            </>
        )
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header title="Konsep dan Definisi" navigation={() => navigation.toggleDrawer()} />

            <View
                style={styles.tab}
            >
                <TouchableOpacity
                    onPress={() => {
                        setShow("indikator")
                    }}
                >
                    <View
                        style={ show == "indikator" ? styles.buttonSel : styles.buttonUnSel}
                    >
                        <Text>Indikator</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setShow("variabel")}
                >
                    <View
                        style={show == "variabel" ? styles.buttonSel : styles.buttonUnSel}
                    >
                        <Text>Variabel</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View
                style={{ paddingHorizontal: 20, paddingVertical: 10 }}
            >
                
                {show == "indikator" &&
                    <FlatList
                        data={indikator}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        maxToRenderPerBatch={5}
                        updateCellsBatchingPeriod={10}
                    />
                }

                {show == "variabel" &&
                    <FlatList
                        data={variabel}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        maxToRenderPerBatch={5}
                        updateCellsBatchingPeriod={10}
                    />
                }

            </View>

        </View>
    )
}

export default Kondef

const styles = StyleSheet.create({
    tab: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonSel : {
        backgroundColor: '#d1d1d1',
        margin: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonUnSel : {
        backgroundColor: '#fff',
        margin: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    conHead: {
        padding: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 10,
    },
    con: {
        padding: 10,
        backgroundColor: '#eaeaea',
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10, 
    }
})
