import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Header from '../../components/Header'

const IndikatorItem = ({navigation, route}) => {
    const data = route.params.data
    console.log("Info Item", data)

    const IndiItem = data?.map((data) => {
        return(
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <View
                        style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                width: '50%'
                        }}
                    >
                        <Text
                            style={{
                                margin: 5,
                                textAlign: 'center',
                            }}
                        >
                            {data.tahun}
                        </Text>
                    </View>
                    <View
                        style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                width: '50%'
                        }}
                    >
                        <Text
                            style={{
                                margin: 5,
                                textAlign: 'center',
                            }}
                        >
                            {data.nilai}
                        </Text>
                    </View>
                </View>
            </>
        )
    })

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header title="Indikator" back navigation={() => navigation.goBack()} />
            
            <ScrollView>

                <View
                    style={{ padding: 20 }}
                >
                    <Text
                        style={styles.title}
                    >{route.params.judul || "Tidak ada judul"}</Text>

                    <View
                        style={{
                            backgroundColor: '#eaeaea',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                backgroundColor: '#15309e'
                            }}
                        >
                            <View
                                style={{
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        width: '50%'
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        margin: 5,
                                        textAlign: 'center',
                                        fontWeight: '500'
                                    }}
                                >
                                    Tahun
                                </Text>
                            </View>
                            <View
                                style={{
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        width: '50%'
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        margin: 5,
                                        textAlign: 'center',
                                        fontWeight: '500'
                                    }}
                                >
                                    {route.params.satuan || "-"}
                                </Text>
                            </View>
                        </View>
                        
                        {IndiItem}
                        
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default IndikatorItem

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
})
