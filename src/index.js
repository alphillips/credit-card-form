import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Payment from 'payment'

import Input from '@react-ag-components/input'

class CreditCardForm extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        cardError:'',
        expiryError:'',
        cvcError:''
      }
      this.card = {}
  }

  componentDidMount() {
    const { number,  expiry, cvc} = this.refs
    Payment.formatCardNumber(ReactDOM.findDOMNode(number).querySelector('input'))
    Payment.formatCardExpiry(ReactDOM.findDOMNode(expiry).querySelector('input'))
    Payment.formatCardCVC(ReactDOM.findDOMNode(cvc).querySelector('input'))
  }

  onCardBlur = (value) => {
    if(Payment.fns.validateCardNumber(value)){
      this.setState((prevState, props) => ({
        cardError: '',
      }))
    } else {
      this.setState((prevState, props) => ({
        cardError: 'Card number not valid',
      }))
    }
  }

  onExpiryBlur = (value) => {
    if(Payment.fns.validateCardExpiry(value)){
      this.setState((prevState, props) => ({
        expiryError: '',
      }))
    } else {
      this.setState((prevState, props) => ({
        expiryError: 'Expiry date not valid',
      }))
    }
  }

  onCvcBlur = (value) => {
    if(Payment.fns.validateCardCVC(value)){
      this.setState((prevState, props) => ({
        cvcError: '',
      }))
    } else {
      this.setState((prevState, props) => ({
        cvcError: 'CVC not valid',
      }))
    }
  }

  onChange = (field) => {
    return (value) => {
      this.card[field] = value
      if(this.props.onChange){
        this.props.onChange(this.card)
      }
    }
  }

  render() {
    return (
      <div>
        <Input
          ref="name"
          label="Name on card"
          error={this.state.error}
          onBlur={this.onBlur}
          onChange={this.onChange('name')}
        />

        <Input
          ref="number"
          label="Card number"
          error={this.state.cardError}
          onBlur={this.onCardBlur}
          onChange={this.onChange('number')}
        />

        <Input
          ref="expiry"
          label="Expiry date"
          error={this.state.expiryError}
          onBlur={this.onExpiryBlur}
          onChange={this.onChange('expiry')}
          maxWidth="200px"
        />

        <Input
          ref="cvc"
          label="CVC"
          error={this.state.cvcError}
          onBlur={this.onCvcBlur}
          onChange={this.onChange('cvc')}
          maxWidth="100px"
        />

      </div>
    )
  }
}

CreditCardForm.propTypes = {
  onChange: PropTypes.func
}

export default CreditCardForm
