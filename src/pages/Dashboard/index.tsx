import React, { useContext } from 'react'
import { Container } from './styles'
import * as Yup from 'yup'
import FormContext from '../../context/form'
import { maskDate, maskCPF } from '../../utils/masks'

export const Dashboard: React.FC = () => {

    const { state, setState: setGlobalState } = useContext(FormContext)

    const handleDate = (dateStr: string) => {
        const [day, month, year] = dateStr.split('/')
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
        setGlobalState({ ...state, birthDate: date })
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(state)
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='input-box'>
                        <label>
                            Nome
                        </label>
                        <input type="text" onChange={e => setGlobalState({ ...state, name: e.target.value })} />
                    </div>
                    <div className='input-box'>
                        <label>
                            Email
                        </label>
                        <input type="email" onChange={e => setGlobalState({ ...state, email: e.target.value })} />
                    </div>
                </div>
                <div className='row'>
                    <div className='input-box'>
                        <label>
                            Data de nascimento
                        </label>
                        <input type="text" placeholder='dd/mm/yyyy' onChange={e => { handleDate(e.target.value) }} onKeyPress={e => maskDate(e)} />
                    </div>
                    <div className='input-box'>
                        <label>
                            CPF
                        </label>
                        <input type="string" onChange={e => setGlobalState({ ...state, CPF: e.target.value })} onKeyPress={e => { maskCPF(e) }} />
                    </div>
                </div>
                <div className='row'>
                    <div className='input-box'>
                        <label>
                            Altura
                        </label>
                        <input type="number" step="0.01" onChange={e => setGlobalState({ ...state, height: parseFloat(e.target.value) })} />
                    </div>
                    <div className='input-box'>
                        <label>
                            Peso
                        </label>
                        <input type="number" step="0.01" onChange={e => setGlobalState({ ...state, weigth: parseFloat(e.target.value) })} />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </Container>
    )
}

export default Dashboard;