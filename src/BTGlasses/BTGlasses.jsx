import React from 'react'
import { Header } from './Header'
import { Modal } from './Modal'

export const BTGlasses = () => {
    return (
        <div className="bg-dark body1">

            <Header />
            <div className="d-flex justify-content-around   ">
                <div className="img__left">
                    <img className="img-fluid img__model " src="./image/model.jpg" alt="" />
                    <div className="img__text bg-success     ">
                        <p className="text-danger">FENDI F8750</p>
                        <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                    </div>
                </div>

                <img className="img-fluid img__model" src="./image/model.jpg" alt="" />
            </div>
            <div className="img__glasses ">
                  <img src="./image/v8.png" alt="" />  <img src="./image/v8.png" alt="" />  <img src="./image/v8.png" alt="" />  <img src="./image/v8.png" alt="" />

            </div>
        </div>
    )
}
