import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');


export default class CenaEmpresa extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    //hidden // hidden={true} == hidden
                    backgroundColor = '#B9C941'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} />

                <View style={styles.cabecalho}>
                    <Image source={detalheEmpresa}/>
                    <Text style={styles.txtTitulo}>Empresa</Text>
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
        color: 'red',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
    },
    txtEmpresa: {
        padding: 20,
        marginTop: 20
    }
});