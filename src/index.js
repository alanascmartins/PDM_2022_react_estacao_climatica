import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import React from 'react'


//Função que define um componente react
//export default function App (){

//classe
class App extends React.Component{
    render(){
        return (
            <div>
                Meu App
            </div>
        )

    }
}

/*
    //API js. geolocation dá acesso à localização do usuário
    window.navigator.geolocation.getCurrentPosition(
        //para não ficar bloqueado aguardando resposta do usuário, colocamos a instrução abaixo, para quando estiver disponível, executar:
        (position) => {
            console.log(position)
        }
    )
    return (
        <div>
            Meu App
        </div>
    )
}*/

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
