//Import dependencies
import React from 'react'
import { useHistory } from 'react-router-dom'

//Form component
export default function Form(props) {
    //Deconstruct props
    const { updateForm, formValues, submitForm, formErrors, disabled } = props

    //onChange handler
    const onChange = (event) => {
        const { name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        updateForm(name, valueToUse)
    }

    //History helper called onSubmit
    const history = useHistory()

    //onSubmit handler
    const onSubmit = (event) => {
        event.preventDefault()
        submitForm()
        history.push('/')
    }

    //Return Form
    return (
        <div className='order-form'>
            <h2>Pizza Form</h2>

            <form onSubmit={onSubmit}>

                <div>
                    <label>
                        Name
                    <input
                            type='text'
                            name='name'
                            value={formValues.name}
                            placeholder='Name'
                            onChange={onChange}
                            id='name-input'
                        />
                    </label>
                </div>

                {formErrors.name ? <p style={{color: 'red'}} id='name-error'>{formErrors.name}</p> : null}
                
                <div>
                    <label>
                        Size
                        <select
                            onChange={onChange}
                            value={formValues.size}
                            name='size'
                        >
                            <option value=''>---Choose a size---</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>

                {formErrors.size ? <p style={{color: 'red'}} id='sauce-error'>{formErrors.size}</p> : null}
                
                <div>
                    Sauce
                    <div className='sauce'>
                        <label>
                            Original
                            <input
                                type="radio"
                                name="sauce"
                                value="Original"
                                checked={formValues.sauce === 'Original'}
                                onChange={onChange}
                            />
                        </label>

                        <label>
                            BBQ
                            <input
                                type="radio"
                                name="sauce"
                                value="BBQ"
                                checked={formValues.sauce === 'BBQ'}
                                onChange={onChange}
                                id='bbq-select'
                            />
                        </label>

                        <label>
                            ALfredo
                            <input
                                type="radio"
                                name="sauce"
                                value="Alfredo"
                                checked={formValues.sauce === 'Alfredo'}
                                onChange={onChange}
                            />
                        </label>
                     </div>  
                </div>
                
                <div>
                    Toppings
                    <div className='toppings'>
                        <label>
                            Pepperoni
                            <input
                                type="checkbox"
                                name='pepperoni'
                                checked={formValues.pepperoni}
                                onChange={onChange}
                                id='pepperoni-input'
                            />
                        </label>

                        <label>
                            Sausage
                            <input
                                type="checkbox"
                                name='sausage'
                                checked={formValues.sausage}
                                onChange={onChange}
                                id='sausage-input'
                            />
                        </label>

                        <label>
                            Peppers
                            <input
                                type="checkbox"
                                name='peppers'
                                checked={formValues.peppers}
                                onChange={onChange}
                                id='peppers-input'
                            />
                        </label>

                        <label>
                            Onions
                            <input
                                type="checkbox"
                                name='onions'
                                checked={formValues.onions}
                                onChange={onChange}
                                id='onions-input'
                            />
                        </label>
                    </div>
                    
                </div>

                <div>
                    <label>
                        Special Instructions
                        <input
                            type='text'
                            name='specialInstructions'
                            value={formValues.specialInstructions}
                            onChange={onChange}
                            id='special-instructions'
                        />
                    </label>
                </div>

                <button id='submit-button' disabled={disabled}>Place Order</button>
            </form>
        </div>
    )
}