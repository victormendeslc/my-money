import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import Tabcontent from '../common/tab/tabContent'
import {selectTab, showTabs} from '../common/tab/tabActions'
import List from './billingCycleList';
import Form from './billingCycleForm'

class BillingCycle extends Component {

    componentDidMount(){
        this.props.selectTab('tabList');
        this.props.showTabs('tabList','tabCreate');
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader
                                label='Listar'
                                icon='bars'
                                target='tabList' />

                            <TabHeader
                                label='Incluir'
                                icon='plus'
                                target='tabCreate' />

                            <TabHeader
                                label='Alterar'
                                icon='pencil'
                                target='tabUpdate' />

                            <TabHeader
                                label='Excluir'
                                icon='trash-o'
                                target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <Tabcontent id="tabList"><h1>Lista</h1>
                                <List/>
                            </Tabcontent>
                            <Tabcontent id="tabCreate">
                                <Form/>
                            </Tabcontent>
                            <Tabcontent id="tabUpdate"><h1>Alterar</h1></Tabcontent>
                            <Tabcontent id="tabDelete"><h1>Excluir</h1></Tabcontent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab,showTabs},dispatch)
export default connect(null,mapDispatchToProps)(BillingCycle)