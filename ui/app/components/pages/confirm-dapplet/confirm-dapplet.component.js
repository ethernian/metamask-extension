import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ConfirmTransactionBase from '../confirm-transaction-base'
import JsxParser from 'react-jsx-parser'

export default class ConfirmDeployContract extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { txData, update } = this.props;

    if (event.target.type === 'checkbox') {
      txData.origin.context.params[event.target.name] = event.target.checked;
      txData.txParams.data = txData.txParams.data.slice(0, -1).concat(event.target.checked ? '1' : '0')
    }

    update(txData);
  }

  static contextTypes = {
    t: PropTypes.func
  }

  static propTypes = {
    txData: PropTypes.object,
    update: PropTypes.func
  }

  renderDappletComponent() {
    const { data, jsx, params } = this.props;

    return (
      <div>
        <JsxParser
          bindings={{
            handleChange: this.handleChange,
            data,
            params
          }}
          blacklistedAttrs={[]}
          jsx={jsx}
        />
      </div>
    )
  }

  render() {
    return (
      <ConfirmTransactionBase
        dappletComponent={this.renderDappletComponent()}
      />
    )
  }
}