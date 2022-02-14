import React, { createContext, useState } from 'react'

interface FormData {
    name: string
    email: string
    birthDate: Date
    CPF: string
    height: number
    weigth: number
}

interface PropsFormContext {
    state: FormData
    setState: React.Dispatch<React.SetStateAction<FormData>>
}

const DEFAULT_VALUE = {
    state: {
        name: '',
        email: '',
        birthDate: new Date(1900, 1, 1),
        CPF: '',
        height: 0,
        weigth: 0
    },
    setState: () => { }
}

const FormContext = createContext<PropsFormContext>(DEFAULT_VALUE)

const FormContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <FormContext.Provider
            value={{
                state,
                setState
            }}

        >
            {children}
        </FormContext.Provider>
    )
}

export { FormContextProvider }
export default FormContext