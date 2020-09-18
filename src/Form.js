//Import dependencies
import React from 'react'

//Form component
export default function Form() {
    return (
        <div>
            <h2>Pizza Form</h2>

            <form>

                <div>
                    <label>
                        Name
                    <input
                            type='text'
                            name='name'
                            // value={}
                            placeholder='Name'
                            // onChange={onChange}
                            id='name-input'
                        />
                    </label>
                </div>
                
                <div>
                    <label>
                        Size
                        <select
                            // onChange={onChange}
                            // value={values.role}
                            name='size'
                        >
                            <option value=''>---Choose a size---</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                </div>
                
                <div>
                    <label>
                        Original
                        <input
                            type="radio"
                            name="sauce"
                            value="Original"
                            // checked={values.civil === 'single'}
                            // onChange={onChange}
                        />
                    </label>

                    <label>
                        BBQ
                        <input
                            type="radio"
                            name="sauce"
                            value="BBQ"
                            // checked={values.civil === 'single'}
                            // onChange={onChange}
                        />
                    </label>

                    <label>
                        ALfredo
                        <input
                            type="radio"
                            name="sauce"
                            value="Alfredo"
                            // checked={values.civil === 'single'}
                            // onChange={onChange}
                        />
                    </label>
                </div>
                
                <div>
                    <label>
                        Pepperoni
                        <input
                            type="checkbox"
                            name='pepperoni'
                            // checked={values.hiking}
                            // onChange={onChange}
                            id='pepperoni-input'
                        />
                    </label>

                    <label>
                        Sausage
                        <input
                            type="checkbox"
                            name='sausage'
                            // checked={values.hiking}
                            // onChange={onChange}
                            id='sausage=input'
                        />
                    </label>

                    <label>
                        Veggie
                        <input
                            type="checkbox"
                            name='veggie'
                            // checked={values.hiking}
                            // onChange={onChange}
                            id='veggie-input'
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Special Instructions
                        <input
                            type='text'
                            name='special instructions'
                            // value={formValues.name}
                            // onChange={onChange}
                            id='special-instructions'
                        />
                    </label>
                </div>

                <button id='submit-button'>Place Order</button>
            </form>
        </div>
    )
}