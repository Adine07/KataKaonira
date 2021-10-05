import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MenuIcon from '../assets/icons/menu.svg'
import BackIcon from '../assets/icons/back.svg'

const Header = ({navigation, title, back}) => {
    return (
        <>
            <View
                style={styles.headerBox}
            >

                <Image
                    source={require('../assets/images/logo_kaonira.png')}
                    style={styles.headerLogo}
                />
                <Text
                    style={styles.headerText}
                >{title}</Text>

                <TouchableOpacity
                    onPress={navigation}
                    style={styles.menu}
                >
                    
                    {back ? <BackIcon width={25} height={25} /> : <MenuIcon width={25} height={25} /> }
                </TouchableOpacity>

            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    menu: {
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        padding: 15,
        alignContent: 'center',
    },
    headerLogo: {
        width: 35,
        height: 35,
        margin: 15,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15,
    }
})
