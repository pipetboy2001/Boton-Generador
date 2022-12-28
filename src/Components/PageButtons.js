import React from 'react'
import Button from './../Components/Button'
import './../Style/PageButtons.css'
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { BsFillExclamationDiamondFill } from "react-icons/bs";


export const PageButtons = () => {
    return (
        <>
            <div className="container-class">
                <h2>Botones</h2>
                <div className='BotonesBasicos'>
                    <div id="item-0">
                        <p>Boton base</p>
                        <Button>Click me!</Button>
                    </div>
                    <div id="item-1">
                        <p>Boton con contorno</p>
                        <Button variant="outline">Click me!</Button>
                    </div>
                    <div id="item-2">
                        {/* Añadir boton con texto */}
                        <p>Boton con texto</p>
                        <Button variant="text">Click me!</Button>
                    </div>
                </div>

                <div className='BotonesDesahbilitar'>
                    <div id="item-0">
                        {/* Añadir boton deshabilitado */}
                        <p>Boton deshabilitado</p>
                        <Button disabled>Click me!</Button>
                    </div>
                    <div id="item-1">
                        {/* Añadir boton disabled Shadow*/}
                        <p>Boton deshabilitado con sombra</p>
                        <Button disabledShadow>Click me!</Button>
                    </div>
                    <div id="item-2">
                        {/* Añadir boton con contornor deshabilitado */}
                        <p>Boton con contorno deshabilitado</p>
                        <Button variant="outline" disabled>Click me!</Button>
                    </div>
                    <div id="item-3">
                        {/* Añadir boton con texto deshabilitado */}
                        <p>Boton con texto deshabilitado</p>
                        <Button variant="text" disabled>Click me!</Button>
                    </div>
                </div>

                <div className='BotonesIconos'>
                    {/* Añadir boton con iconos */}
                    <div id='item-0'>
                        <p>Boton con icono</p>
                        <Button>Click me! <BsFillBookmarkStarFill /></Button> 
                    </div>
                    <div id='item-1'>
                        <p>Boton con icono y contorno</p>
                        <Button variant="outline">Click me! <BsFillExclamationTriangleFill /></Button>
                    </div>
                    <div id='item-2'>
                        <p>Boton con icono y texto</p>
                        <Button variant="text">Click me! <BsFillExclamationOctagonFill /></Button>
                    </div>
                    <div id='item-3'>
                        <p>Boton con icono deshabilitado</p>
                        <Button disabled>Click me! <BsFillExclamationCircleFill /></Button>
                    </div>
                    <div id='item-4'>
                        <p>Boton con icono deshabilitado con sombra</p>
                        <Button disabledShadow>Click me! <BsFillExclamationDiamondFill /></Button>
                    </div>
                </div>

                <div className='BotonesTamaños'>
                    {/* Añadir botones con distintos tamaños */}
                    <div id="item-0">
                        <p>Pequeño</p>
                        <Button size="sm">Click me!</Button>
                    </div>
                    <div id="item-1">
                        <p>Mediano</p>
                        <Button size="md">Click me!</Button>
                    </div>
                    <div id="item-2">
                        <p>Grande</p>
                    <Button size="lg">Click me!</Button>
                    </div>
                </div>

                <div className='BotonesColores'>
                    {/* Añadir botones con distintos colores */}
                    <div id="item-0">
                        <p>Color por defecto</p>
                        <Button color="default">Click me!</Button>
                    </div>
                    <div id="item-1">
                        <p>Color primario</p>
                        <Button color="primary">Click me!</Button>
                    </div>
                    <div id="item-2">
                        <p>Color secundario</p>
                        <Button color="secondary">Click me!</Button>
                    </div>
                    <div id="item-3">
                        <p>Color terciario</p>
                        <Button color="danger">Click me!</Button>
                    </div>





                </div>
            </div>
        </>
    )
}
