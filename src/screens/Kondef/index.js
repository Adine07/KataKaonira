import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native'
import Header from '../../components/Header'

import BpsApi from "../../services";
import SearchIcon from '../../assets/icons/search.svg'

const Kondef = ({navigation}) => {
    const [variabel, setVariabel] = useState([])
    const [indikator, setIndikator] = useState([])
    const [show, setShow] = useState("indikator")
    const [keyword, setKeyword] = useState('')
    const [data, setData] = useState([])

    console.log("Inilah indikator", indikator[0])

    useEffect(() => {
        getVariabel()
        getIndikator()
        filter("indikator")
    }, [])

    const getVariabel = async () => {
        await BpsApi.getKondefVariabel().then(res => {
            // console.log('Variabel', res.data)
            setVariabel(res.data)
            setData(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    const getIndikator = async () => {
        await BpsApi.getKondefIndikator().then(res => {
            // console.log('Indikator', res.data)
            setIndikator(res.data)
            setData(res.data)
        }).catch(err => {
            console.log(err.message)
        })
    }

    const filter = (sel) => {
        if (sel === "indikator") {
            const filteredData = indikator.filter((indikator) => indikator.judul.match(keyword))
            console.log("Indikator Vilter", filteredData)
            setData(filteredData)
            setShow("indikator")
        }else{
            const filteredData = variabel.filter((variabel) => variabel.judul.match(keyword))
            console.log("Variabel Vilter", filteredData)
            setData(filteredData)
            setShow("variabel")
        }
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
                    onPress={() => filter(show)}
                >
                    <View
                        style={{ paddingRight: 10, paddingLeft: 30 }}
                    >
                        {/* <VectorIcon name="search" /> */}
                        <SearchIcon width={25} height={25} />
                    </View>
                </TouchableOpacity>
            </View>

            <View
                style={styles.tab}
            >
                <TouchableOpacity
                    onPress={() => filter("indikator")}
                >
                    <View
                        style={ show == "indikator" ? styles.buttonSel : styles.buttonUnSel}
                    >
                        <Text>Indikator</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => filter("variabel")}
                >
                    <View
                        style={show == "variabel" ? styles.buttonSel : styles.buttonUnSel}
                    >
                        <Text>Variabel</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View
                style={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 250,  }}
            >
                
                {/* {show == "indikator" &&
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        maxToRenderPerBatch={5}
                        updateCellsBatchingPeriod={10}
                    />
                } */}
                {data.length >= 1 &&
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        maxToRenderPerBatch={5}
                        updateCellsBatchingPeriod={10}
                    />
                }

                {/* {show == "variabel" &&
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        maxToRenderPerBatch={5}
                        updateCellsBatchingPeriod={10}
                    />
                } */}

            </View>

        </View>
    )
}

export default Kondef

const styles = StyleSheet.create({
    tab: {
        marginHorizontal: 20,
        marginBottom: 10,
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
