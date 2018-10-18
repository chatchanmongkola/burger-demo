import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
    salad: 1.5,
    cheese: 2,
    meat: 4.8,
    bacon: 6.2
}

class BurgerBuilder extends Component{
    
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat: 0
        },
        totalPrice: 0
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount + 1
        const updateIngredient = {...this.state.ingredients}
        updateIngredient[type] = updateCount
        const priceAddition = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice,ingredients: updateIngredient})
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return
        }
        const updateCount = oldCount - 1
        const updateIngredient = {...this.state.ingredients}
        updateIngredient[type] = updateCount
        const priceDeduction = INGREDIENT_PRICE[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updateIngredient})

    }

    render(){

        const disableInfo = {
            ...this.state.ingredients
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        // {salad:true, meat:false}

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo} 
                    price={this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder