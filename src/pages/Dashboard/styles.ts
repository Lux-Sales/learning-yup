import styled from 'styled-components'

export const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
form{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
        height: 40px;
        width: 150px;
        border-radius: 15px;
        cursor: pointer;
    }
    button:hover{
        background-color: #5f5656;
    }
}
.row{
        display:flex;
        justify-content: center;
        align-items: center;
        margin: 15px 15px;
    }
.input-box{
    display:flex;
    flex-direction: column;
    margin: 0 7px 0;
}
input{
            height: 2em;
            border-radius: 10px;
            padding-left: 5px;
        }
`