import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Share, Linking } from 'react-native'

import Header from '../../components/Header'
import ShareIcon from '../../assets/icons/share.svg'
import DownloadIcon from '../../assets/icons/download.svg'

const InfografisItem = ({route, navigation}) => {
    const data = route.params.data
    console.log("Info Item", data)
    const onShare = async () => {
        try {
            const result = await Share.share({
            message:
                'Kata Konira | Infografis - ' + data.title + '\n \nLink: ' + data.dl,
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
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <Header title="Infografis" back navigation={() => navigation.goBack()} />

            <View
                style={styles.box}
            >
                <Text
                    style={styles.title}
                >{data?.title || "Tidak ada judul"}</Text>
                
                <Image
                    source={{ uri: data.img }}
                    style={styles.item}
                />

                <View
                    style={styles.ButtonBox}
                >
                    <TouchableOpacity
                        onPress={onShare}
                        style={styles.button}
                    >
                        <ShareIcon width={25} height={25} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>{ Linking.openURL(data.dl) }}
                        style={styles.button}
                    >
                        <DownloadIcon width={25} height={25} />
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default InfografisItem

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
    button: {
        paddingVertical: 20,
        backgroundColor: 'white',
        paddingHorizontal: 45,
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
        justifyContent: 'space-around'
    },
})
