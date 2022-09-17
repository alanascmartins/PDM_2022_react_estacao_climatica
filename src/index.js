import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'

//Função que define um componente react
//export default function App (){

//classe
class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
            estacao: null, 
            data: null,
            icone: null,
            mensagemDeErro: null
        }
    }

    obterEstacao = (data, latitude) => {
        const ano = data.getFullYear();
        const d1 = new Date(ano, 5, 21)
        const d2 = new Date(ano, 8, 24)
        const d3 = new Date(ano, 11, 22)
        const d4 = new Date(ano, 3, 21)
        const sul = latitude < 0
        if (data >= d1 && data < d2){
            return sul ? 'Inverno' : 'Verão'
        }
        if (data >= d2 && data < d3){
            return sul ? 'Primavera' : 'Outono'
        }
        if (data >= d3 && data < d4){
            return sul ? 'Verão' : 'Inverno'
        }
        return sul ? 'Outono' : 'Primavera'
    }

    icones = {
        "Primavera" : "fa-seedling",
        "Verão": "fa-umbrella-beach",
        "Outono": "fa-tree",
        "Inverno": "fa-snowman"
    }

    obterLocalizacao = () =>{
        //para acessar a api de localizaçõa (geolocation)

        //função que faz a janelinha que pergunta ao usuario se ele permite usar a localização dele ou não
        window.navigator.geolocation.getCurrentPosition(
            //arrow function para obter a localização do usuario
            (position) => {
                let data = new Date()//obtem a data atual do sistema
                let estacao = this.obterEstacao(data, position.coords.latitude) //passa a data atual do sistema e a latitude da localização do usuario
                let icone = this.icones[estacao] //acessando os icones de cada estação
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    data: data.toLocaleString(),//faz a conversao da data para aparecer data e hora
                    estacao: estacao,
                    icone: icone
                })

            },
            (err) => {
                console.log(err)
                this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
            }
        )
    }

        render(){
        return (
            <div className='container mt-2'>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center border rounded mb-2" style={{height: '6rem'}}>
                                    <i className={`p-2 fas fa-5x ${this.state.icone}`}></i>
                                    <p className="w-75 ms-3 text-center fs-1">
                                        {this.state.estacao}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-center">
                                        {
                                            this.state.latitude ?
                                                `Coordenadas: ${this.state.latitude}, ${this.state.longitude}, Data: ${this.state.data}.`
                                            :
                                            this.state.mensagemDeErro ?
                                                `${this.state.mensagemDeErro}`
                                            :
                                                `Clique no botão para saber sua estação climática`
                                        } 
                                    </p>
                                </div>
                                <button onClick={this.obterLocalizacao} className="btn btn-outline-primary w-100 mt-2">Qual a minha estação?</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
