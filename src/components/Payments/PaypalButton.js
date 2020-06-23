import React from "react"
import ReactDOM from "react-dom"
import scriptLoader from "react-async-script-loader"

let PayPalButton = null

const CLIENT = {
  sandbox:
    "xxxxxx",//to be replaced by client id
  production: "xxxXXX",
}

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox"

class PaypalButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showButton: false,
    }

    window.React = React
    window.ReactDOM = ReactDOM
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM })
      this.setState({ loading: false, showButton: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps

    const scriptJustLoaded =
      !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM,
        })
        this.setState({ loading: false, showButton: true })
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"Mercedes G-Wagon",
          amount: {
            currency_code: data.currency,
            value: data.total,
          },
        },
      ],
    })
  }

  onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID,
      }
      console.log("Payment Approved: ", paymentData)
      this.setState({ showButton: false, paid: true })
    })
  }

  render() {
    const { showButton } = this.state
    return (
      <div>
        {showButton && (
          <PayPalButton
            createOrder={(data, actions) =>
              this.createOrder(this.props, actions)
            }
            onApprove={(data, actions) => this.onApprove(data, actions)}
          />
        )}
      </div>
    )
  }
}

export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=${CLIENT.sandbox}`
)(PaypalButton)
