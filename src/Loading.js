import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div 
      className='d-flex justify-content-center align-items-center border rounded p-3'>
        <div 
            className="spinner-border text-info" style={{width: '3em', height: '3rem'}}>
                <span className="visually-hidden">
                    Carregando...
                </span>

            </div>
      </div>
    )
  }
}
