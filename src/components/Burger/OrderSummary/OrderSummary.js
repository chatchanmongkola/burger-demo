import React, { Component } from 'react'
import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component{

    componentWillUpdate () {
        console.log('[OrderSummay] WillUpdate')
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}
                </li>)
        })
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A Delicious burger wuth the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.summaryPrice.toFixed(2)}</strong></p>
                <p>Continue to CheckOut?</p>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            </Aux>
        )
    }
} 
export default OrderSummary