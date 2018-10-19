import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
                </li>)
        })
    // <li></li>

    return (
    <Aux>
        <h3>Your Order</h3>
        <p>A Delicious burger wuth the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {props.summaryPrice.toFixed(2)}</strong></p>
        <p>Continue to CheckOut?</p>
        <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
    </Aux>
    )

}

export default orderSummary