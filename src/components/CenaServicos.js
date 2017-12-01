import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');


export default class CenaServicos extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    //hidden // hidden={true} == hidden
                    backgroundColor = '#B9C941'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} />

                <View style={styles.cabecalho}>
                    <Image source={detalheServicos}/>
                    <Text style={styles.txtTitulo}>Serviços</Text>
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
        color: '#26A69A',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
    },
    txtServicos: {
        padding: 20,
        marginTop: 20
    }
});