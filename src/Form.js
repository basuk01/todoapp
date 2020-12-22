
import React, { useState } from 'react'

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const hundleSubmit = e => {
        e.preventDefault()
        addTodo(value)
    }
    return (
        <form onSubmit={hundleSubmit}>
            <input
                type='text'
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form