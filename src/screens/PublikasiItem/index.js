import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, Share, Linking, Modal, Pressable, TouchableOpacity } from 'react-native'
import Header from '../../components/Header'

import ShareIcon from '../../assets/icons/share.svg'
import DownloadIcon from '../../assets/icons/download.svg'
import InfoIcon from '../../assets/icons/info.svg'

const PublikasiItem = ({navigation, route}) => {
    const data = route.params.data

    const [modalVisible, setModalVisible] = useState(false)
    console.log(data)
    const onShare = async () => {
        try {
            const result = await Share.share({
            message:
                'Kata Konira | Publikasi - ' + data.title + '\n \nLink: ' + data.pdf,
            });
            if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
            } else {
                // shared
            }
            } else if (result.action === Share.dismissedAction) {
            // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        // <View style={{ backgroundColor: 'white', flex: 1 }}>
        //     <Modal
        //         animationType="fade"
        //         transparent={true}
        //         visible={modalVisible}
        //     >
        //         <View
        //             style={{ 
        //                 flex: 1,
        //                 flexDirection: 'column-reverse',
        //                 backgroundColor: 'rgba(0,0,0,0.5)',
        //                 justifyContent: 'flex-start',
        //                 alignItems: 'center',
        //              }}
        //         >
        //             <View
        //                 style={{ 
        //                     backgroundColor: 'white',
        //                     width: '90%',
        //                     padding: 20,
        //                     borderRadius: 10
        //                 }}
        //             >

        //                 <Text
        //                     style={styles.modalTitle}
        //                 >
        //                     Judul :
        //                 </Text>
        //                 <Text
        //                     style={styles.modalText}
        //                 >
        //                     {data.title}
        //                 </Text>
        //                 <Text
        //                     style={styles.modalTitle}
        //                 >
        //                     ISSN :
        //                 </Text>
        //                 <Text
        //                     style={styles.modalText}
        //                 >
        //                     {data.issn}
        //                 </Text>
        //                 <Text
        //                     style={styles.modalTitle}
        //                 >
        //                     Tanggal Rilis:
        //                 </Text>
        //                 <Text
        //                     style={styles.modalText}
        //                 >
        //                     {data.rl_date}
        //                 </Text>
        //                 <Text
        //                     style={styles.modalTitle}
        //                 >
        //                     Size :
        //                 </Text>
        //                 <Text
        //                     style={styles.modalText}
        //                 >
        //                     {data.size}
        //                 </Text>
        //                 <Pressable
        //                     style={{ 
        //                         backgroundColor: '#2ba0ff',
        //                         padding: 10,
        //                         borderRadius: 10,
        //                         marginTop: 10,
        //                      }}
        //                     onPress={() => setModalVisible(!modalVisible)}
        //                 >
        //                     <Text
        //                         style={{ 
        //                             color: 'white',
        //                             fontWeight: 'bold',
        //                             textAlign: 'center',
        //                          }}
        //                     >Close</Text>
        //                 </Pressable>
        //             </View>
        //         </View>
        //     </Modal>
        //     <Header title="Publikasi"  back navigation={() => navigation.goBack()} />
        //     <View
        //         style={{ 
        //             padding: 20,
        //          }}
        //     >
        //         <View
        //             style={{ 
        //                 flexDirection: 'row',
        //                 justifyContent: 'space-between',
        //                 paddingBottom: 20,
        //                 borderBottomColor: '#00000025',
        //                 borderBottomWidth: 2,
        //              }}
        //         >

        //             <ImageBackground
        //                 source={{ uri: data?.cover }}
        //                 style={{
        //                     width: Dimensions.get('window').width / 2.3,
        //                     height: Dimensions.get('window').height / 3.3,
        //                 }}
        //                 imageStyle={{ borderRadius: 5 }}
        //             >
        //             </ImageBackground>
        //             <View>
        //                 <Text
        //                     style={{ 
        //                         fontWeight: 'bold',
        //                         fontSize: 20,
        //                         width: Dimensions.get('window').width / 2.3,
        //                         borderBottomColor: 'black',
        //                         borderBottomWidth: 1,
        //                     }}
        //                 >{data?.title || "Tidak ada judul"}</Text>

        //                 <TouchableOpacity
        //                     onPress={() => setModalVisible(true) }
        //                     style={{ 
        //                         width: '100%',
        //                         backgroundColor: '#2ba0ff',
        //                         marginTop: 10,
        //                         borderRadius: 5,
        //                         paddingHorizontal: 10,
        //                         paddingVertical: 5,
        //                     }}
        //                 >
        //                     <View
        //                         style={{ 
        //                             flexDirection: 'row',
        //                             alignContent: 'center',
        //                             justifyContent: 'center',
        //                             alignItems: 'center'
        //                          }}
        //                     >
        //                         <InfoIcon width={25} height={25} />
        //                         <Text
        //                             style={{ paddingLeft: 5 }}
        //                         >Informasi</Text>
        //                     </View>
        //                 </TouchableOpacity>

        //                 <TouchableOpacity
        //                     onPress={() =>{ Linking.openURL(data.pdf) }}
        //                     style={{ 
        //                         width: '100%',
        //                         backgroundColor: '#2ba0ff',
        //                         marginTop: 10,
        //                         borderRadius: 5,
        //                         paddingHorizontal: 10,
        //                         paddingVertical: 5,
        //                     }}
        //                 >
        //                     <View
        //                         style={{ 
        //                             flexDirection: 'row',
        //                             alignContent: 'center',
        //                             justifyContent: 'center',
        //                             alignItems: 'center'
        //                          }}
        //                     >
        //                         <DownloadIcon width={25} height={25} />
        //                         <Text
        //                             style={{ paddingLeft: 5 }}
        //                         >Download</Text>
        //                     </View>
        //                 </TouchableOpacity>

        //                 <TouchableOpacity
        //                     onPress={onShare}
        //                     style={{ 
        //                         width: '100%',
        //                         backgroundColor: '#2ba0ff',
        //                         marginTop: 10,
        //                         borderRadius: 5,
        //                         paddingHorizontal: 10,
        //                         paddingVertical: 5,
        //                     }}
        //                 >
        //                     <View
        //                         style={{ 
        //                             flexDirection: 'row',
        //                             alignContent: 'center',
        //                             justifyContent: 'center',
        //                             alignItems: 'center'
        //                          }}
        //                     >
        //                         <ShareIcon width={25} height={25} />
        //                         <Text
        //                             style={{ paddingLeft: 5 }}
        //                         >Bagikan</Text>
        //                     </View>
        //                 </TouchableOpacity>
        //             </View>

        //         </View>


        //         <View
        //             style={{ 
        //                 paddingTop: 20
        //              }}
        //         >
        //             <Text>
        //                 AAA
        //             </Text>
        //         </View>

        //     </View>
        // </View>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View
                    style={{ 
                        flex: 1,
                        flexDirection: 'column-reverse',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                     }}
                >
                    <View
                        style={{ 
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 20,
                            borderRadius: 10
                        }}
                    >

                        <Text
                            style={styles.modalTitle}
                        >
                            Judul :
                        </Text>
                        <Text
                            style={styles.modalText}
                        >
                            {data.title}
                        </Text>
                        <Text
                            style={styles.modalTitle}
                        >
                            ISSN :
                        </Text>
                        <Text
                            style={styles.modalText}
                        >
                            {data.issn}
                        </Text>
                        <Text
                            style={styles.modalTitle}
                        >
                            Tanggal Rilis:
                        </Text>
                        <Text
                            style={styles.modalText}
                        >
                            {data.rl_date}
                        </Text>
                        <Text
                            style={styles.modalTitle}
                        >
                            Size :
                        </Text>
                        <Text
                            style={styles.modalText}
                        >
                            {data.size}
                        </Text>
                        <Pressable
                            style={{ 
                                backgroundColor: '#2ba0ff',
                                padding: 10,
                                borderRadius: 10,
                                marginTop: 10,
                             }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text
                                style={{ 
                                    color: 'white',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                 }}
                            >Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Header title="Publikasi"  back navigation={() => navigation.goBack()} />
            <View
                style={styles.box}
            >

                <Text
                    style={styles.title}
                >{data?.title || "Tidak ada judul"}</Text>

                <ImageBackground
                    source={{ uri: data?.cover }}
                    style={styles.item}
                    imageStyle={{ borderRadius: 10 }}
                >
                </ImageBackground>

                <View
                    style={styles.ButtonBox}
                >
                    <TouchableOpacity
                        onPress={() => setModalVisible(true) }
                        style={styles.button}
                    >
                        <InfoIcon width={25} height={25} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onShare}
                        style={styles.button}
                    >
                        <ShareIcon width={25} height={25} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>{ Linking.openURL(data.pdf) }}
                        style={styles.button}
                    >
                        <DownloadIcon width={25} height={25} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default PublikasiItem

const styles = StyleSheet.create({
    box: {
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item: {
        width: '100%',
        height: Dimensions.get('window').height / 1.5,
        borderRadius: 10,
        marginTop: 20,
    },
    itemBox: {
        padding: 10
    },
    button: {
        paddingVertical: 20,
        backgroundColor: 'white',
        paddingHorizontal: 25,
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
    ButtonBox: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalTitle: {
        fontWeight: 'bold'
    },
    modalText: {
        fontSize: 14,
        paddingBottom: 10
    }
})
