import { connect } from 'react-redux'
import ConfirmWidget from './confirm-dapplet.component'
import { updateTransaction } from '../../../actions'


const mapStateToProps = state => {
    const { confirmTransaction: { txData } = {} } = state
    const { confirmTransaction: { txData: { origin: { context: { jsx, data, params } } } } = {} } = state

    return {
        txData,
        jsx,
        data,
        params
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: editingTx => {
            return dispatch(updateTransaction(editingTx))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmWidget)
