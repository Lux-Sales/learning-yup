import React from 'react'

import { FormContextProvider } from './form'

const GlobalContext: React.FC = ({children}) =>{
    return <FormContextProvider>{children}</FormContextProvider>
}

export default GlobalContext