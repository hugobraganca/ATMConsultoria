import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class ATMConsultoria extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{ id: 'principal'}}
            renderScene={(route, navigator) => {
                /*definir a cena na rota*/
                if (route.id === 'principal') {
                    //exibir a CenaPrincipal
                    return (<CenaPrincipal navigator={navigator} />);
                }
                if (route.id === 'cliente') {
                    //ebibir CenaClientes
                    return (<CenaClientes navigator={navigator} />);
                }
                if (route.id === 'contato') {
                    //exibir a CenaContatos
                    return (<CenaContatos nacigator={navigator} />);
                }
                if (route.id === 'empresa') {
                    //exibir CenaServico
                    return (<CenaEmpresa navigator={navigator} />);
                }
                if (route.id === 'servicos') {
                    return (<CenaServicos navigator={navigator} />);
                }
            }}

        />
    );
  }
}


AppRegistry.registerComponent('ATMConsultoria', () => ATMConsultoria);
