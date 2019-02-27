import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ConfirmTransactionBase from '../confirm-transaction-base'

export default class ConfirmDeployContract extends Component {
  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    txData: PropTypes.object,
  }

  renderDappletComponent() {
    const { style, html } = this.props;

    //TODO: may be it's well to use something like DOMPurify for XSS protection
    return (
      <div style={{ padding: '16px' }}>
        <style type="text/css" dangerouslySetInnerHTML={{ __html: style }} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
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