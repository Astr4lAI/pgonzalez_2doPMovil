import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TextInput, Touchable, TouchableOpacity, ScrollView, Modal, FlatList} from "react-native";
import tw from 'tailwind-react-native-classnames'; 
import { useTailwind } from 'tailwind-rn';
import tailwindConfig from "../tailwind.config";
import LinearGradient from "react-native-linear-gradient";


const Inicio = ({ navigation }: {navigation:any}) => {
    const tailwind = useTailwind();
    // const {t} = useTranslation();
    const [visible, setVisible] = useState(false);
    // const changeLanguage = (lng: string | undefined) => {
    //     i18next.changeLanguage(lng);
    //     setVisible(false);
    // }
    return (
    <ScrollView style = {tw `bg-blue-300 h-full`}>


            <View style = {styles.container}>
                <Image
                  source = {require('/Users/astral/Documents/Web Programming/Agenda/agenda-app/assets/dapper.png')}
                  style = {styles.image}
                />
                <Text>Bienvenidos</Text>
                {/* { Login Button } */}
                <TouchableOpacity style = {styles.buttonLogin}>
                    <Text style = {styles.buttonText}>Iniciar sesión</Text>
                </TouchableOpacity>

                {/* Translate button */}
                {/* <TouchableOpacity style = {styles.buttonTranslate}>
                    <Text style = {styles.buttonText}>{t("Change language")}</Text>
                </TouchableOpacity> */}

                <TouchableOpacity style = {styles.buttonForgot} onPress = {() => navigation.navigate('Forgot Password')}>
                <Text style = {tw `text-white p-10 pb-1 text-base font-semibold text-center`}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
                <Text style = {tw `text-white p-1 text-base font-semibold text-center`}>────────  o  ────────</Text>
                <TouchableOpacity style = {styles.buttonNewAcc} onPress = {() => navigation.navigate('Register')}>
                <Text style = {tw `text-white p-1 text-base font-semibold text-center`}>¿No tienes una cuenta? <Text style = {styles.boldText}>Regístrate</Text></Text>
                </TouchableOpacity>
            </View>

            {/* <Modal visible = {visible} onRequestClose = {() => setVisible(false)}>
                <View>
                    <FlatList data = {Object.keys(languageResources)} renderItem = {({item}) => (
                        <TouchableOpacity style = {styles.buttonTranslate} onPress= {() => changeLanguage(item)}> */}
                            {/* <Text>{languagesList[item].nativeName}</Text> */}
                        {/* </TouchableOpacity>
                    )} />
                </View>
            </Modal> */}

        </ScrollView>
        // </LinearGradient>
    );
};

export default Inicio;

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        justifyContent: 'center',
        paddingHorizontal: 30,
        // backgroundColor: '#1E3A8A',
    },
    image:{
        width: 320,
        borderRadius: 25,
        height: 105,
        resizeMode: 'cover',
        marginTop: 100,
        marginBottom: 40,
        marginLeft: 20,
        top: -25,
        left: -15,

    },
    text: {
        color: "black",
        fontWeight: 500,
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 300,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 18,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
    buttonLogin: {
        backgroundColor: '#000',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
    },
    buttonTranslate: {
        backgroundColor: '#000',
        borderRadius: 25,
        paddingVertical: 15,
        top: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonForgot: {

    },
    buttonNewAcc: {

    },
    boldText: {
        fontWeight: '800',
    },
});

