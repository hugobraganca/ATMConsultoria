import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    //hidden // hidden={true} == hidden
                    backgroundColor = '#B9C941'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} />

                <View style={styles.cabecalho}>
                    <Image source={detalheClientes}/>
                    <Text style={styles.txtTitulo}>Nossos Clientes</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image style={styles.clientesImagem} source={cliente1}/>
                    <Text style={styles.txtDetalheCliente}>Aleatóorio</Text>
                </View>

                <View style={styles.detalheCliente}>
                    <Image style={styles.clientesImagem} source={cliente2}/>
                    <Text style={styles.txtDetalheCliente}>Aleatório2</Text>
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
        color: '#B9C941',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
    },
    detalheCliente: {
        padding: 20,
        marginTop: 20
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});