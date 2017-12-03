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
            <View style={{ flex: 1, backgroundColor: '#fff'}}>
                <StatusBar
                    //hidden // hidden={true} == hidden
                    backgroundColor = '#19D1C8'
                />

                <BarraNavegacao voltar navigator={this.props.navigator} background = '#19D1C8' />

                <View style={styles.cabecalho}>
                    <Image source={detalheServicos}/>
                    <Text style={styles.txtTitulo}>Nossos Serviços</Text>
                </View>

                <View style={styles.detalheServicos}>
                    <Text style={styles.txtServicos}>. Consultaria</Text>
                    <Text style={styles.txtServicos}>. Processos</Text>
                    <Text style={styles.txtServicos}>. Acompanhamento de Projetos</Text>
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
        color: '#19D1C8',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 25
    },
    detalheServicos: {
        padding: 20,
        marginTop: 20
    },
    txtServicos: {
        fontSize: 18
    }
});