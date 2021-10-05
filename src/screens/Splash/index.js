import { useNavigation } from '@react-navigation/core';
import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Splash = () => {

    const { replace } = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            replace('DrawerNavigation')
        }, 2500)
    }, [])

    return (
        <View
            style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'white' }}
        >
            <View
                style={{ flex: 3, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}
            >
                <Image
                    style={{ marginBottom: 10, height: 135, width: 135 }}
                    source={require('../../assets/images/logo_kaonira.png')}
                />
                <Text
                    style={{ fontSize: 28, fontWeight: 'bold' }}
                >
                    Kata Kaonira
                </Text>
            </View>
            <View
                style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignSelf: 'center', alignItems: 'center' }}
            >
                <Image
                    style={{ marginRight: 10, height: 35, width: 48, marginTop: 5 }}
                    source={require('../../assets/images/bps_logo.png')}
                />
                <View>
                    <Text>
                        Badan Pusat Statistik
                    </Text>

                    <Text>
                        Kabupaten Nias Selatan
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
