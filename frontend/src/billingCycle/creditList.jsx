import React, { Component } from 'react';
import { Field } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {
    renderRows() {
        return (
            <tr>

                <td><Field name='credits[0].name'
                    placeholder='Informe o nome'
                    readOnly={this.props.readOnly}
                    component={Input}></Field></td>
                <td><Field name='credits[0].value'
                    placeholder='Informe o valor'
                    readOnly={this.props.readOnly}
                    component={Input}></Field></td>
                <td></td>
            </tr>
        )
    }

    validar(event) {
        console.log(event);
    }
    render() {
        return (
            <Grid cols={this.props.cols}>

                <fieldset>
                    <legend>Créditos</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

export default CreditList;