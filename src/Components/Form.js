import React from 'react'

export default function Form (props) {
   
    const {
    values,
    submit,
    change,
    disabled,
    errors,
    } = props


    
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='pizza-form' onSubmit={onSubmit}>
            <div className='submit'>
                <h2>Create Your Pizza</h2>

                <button disabled={disabled}>submit</button>

                <div className='errors'>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
                <div>{errors.instructions}</div>
                </div>
            </div>
           
           
        <div> <h3>Choose a Size</h3>
        <label>Size
          <select
            value={values.size}
            onChange={onChange}
            name='size'
            >
            <option value=''>- Select an option -</option>
            <option value='12in'>12''</option>
            <option value='24in'>24''</option>
          </select>
        </label>
        </div>
        
        <div> <h3>Choose a Sauce</h3>
        <label>Marinara
        <input
            type='radio'
            name='sauce'
            value='marinara'
            onChange={onChange}
            checked={values.sauce === 'marinara'}
          />
        </label>

        <label>BBQ
        <input
            type='radio'
            name='sauce'
            value='bbq'
            onChange={onChange}
            checked={values.sauce === 'bbq'}
          />
        </label>
        </div>

        <div> <h3>Choose Toppings</h3>
        <label>Cheese
            <input 
              type='checkbox'
              name='cheese'
              onChange={onChange}
              checked={values.cheese}
            />
        </label>

        <label>Pepperoni
            <input 
              type='checkbox'
              name='pepperoni'
              onChange={onChange}
              checked={values.pepperoni}
            />
        </label>

        <label>Pineapple
            <input 
              type='checkbox'
              name='pineapple'
              onChange={onChange}
              checked={values.pineapple}
            />
        </label>

        <label>Ham
            <input 
              type='checkbox'
              name='ham'
              onChange={onChange}
              checked={values.ham}
            />
        </label>
        </div>
        

        <div> <h3>Special Instructions:</h3>
        <label>Instructions
            <input
            value={values.instructions}
            onChange={onChange}
            name='instructions'
            type='text'
            />
        </label>
        </div>
       
        </form>
    )


}