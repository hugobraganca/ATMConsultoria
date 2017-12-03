import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');


export default class CenaContatos extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
                <StatusBar
                    //hidden // hidden={true} == hidden
                    backgroundColor = '#61BD8C'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} background = '#61BD8C' />

                <View style={styles.cabecalho}>
                    <Image source={detalheContatos}/>
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>

                <View style={styles.detalheContatos}>
                    <Text style={styles.txtContatos}>TEL: (91) 1234-1234</Text>
                    <Text style={styles.txtContatos}>CEL: (91) 91234-1234</Text>
                    <Text style={styles.txtContatos}>EMAIL: teste@gmail.com</Text>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create ({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20,
    },
    txtTitulo: {
        color: '#61BD8C',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        padding: 20,
        marginTop: 20
    },
    txtContatos: {
        fontSize: 18
    }
});