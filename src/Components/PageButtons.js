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
            <center>
                <div className="container-class">
                    <center><h2 className='Titulo'>Botones</h2></center>
                    <div className='BotonesBasicos'>
                        <div id="item-0">
                            <p>Boton base</p>
                            <div title="<Button />">
                                <Button >Click me!</Button>
                            </div>
                        </div>
                        <div id="item-1">
                            <p>Boton con contorno</p>
                            <div title='<Button variant="outline" />'>
                                <Button variant="outline">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-2">
                            {/* Añadir boton con texto */}
                            <p>Boton con texto</p>
                            <div title='<Button variant="text" />'>
                                <Button variant="text">Click me!</Button>
                            </div>
                        </div>
                    </div>

                    <div className='BotonesDesahbilitar'>
                        <div id="item-0">
                            {/* Añadir boton deshabilitado */}
                            <p>Boton deshabilitado</p>
                            <div title='<Button disabled />'>
                                <Button className="button-disabled" disabled>Click me!</Button >
                            </div>

                        </div>
                        <div id="item-1">
                            {/* Añadir boton disabled Shadow*/}
                            <p>Boton deshabilitado con sombra</p>
                            <div title='<Button disabledShadow />'>
                                <Button className="button-disabled-shadow" disabledShadow>Click me!</Button>
                            </div>
                        </div>
                        <div id="item-2">
                            {/* Añadir boton con contornor deshabilitado */}
                            <p>Boton con contorno deshabilitado</p>
                            <div title='<Button disable variant="outline">'>
                                <Button variant="outline" disabled>Click me!</Button>
                            </div>

                        </div>
                        <div id="item-3">
                            {/* Añadir boton con texto deshabilitado */}
                            <p>Boton con texto deshabilitado</p>
                            <div title='<Button disable variant="text">'>
                                <Button variant="text" disabled>Click me!</Button>
                            </div>
                        </div>
                    </div>

                    <div className='BotonesIconos'>
                        {/* Añadir boton con iconos */}
                        <div id='item-0'>
                            <p>Boton con icono</p>
                            <div title='<Button icon>'>

                            </div>
                            <Button>Click me! <BsFillBookmarkStarFill /></Button>
                        </div>
                        <div id='item-1'>
                            <p>Boton con icono y contorno</p>
                            <div title='<Button icon variant="outline">'>
                                <Button variant="outline">Click me! <BsFillExclamationTriangleFill /></Button>
                            </div>
                        </div>
                        <div id='item-2'>
                            <p>Boton con icono y texto</p>
                            <div title='<Button icon variant="text">'>
                                <Button variant="text">Click me! <BsFillExclamationOctagonFill /></Button>
                            </div>
                        </div>
                        <div id='item-3'>
                            <p>Boton con icono deshabilitado</p>
                            <div title='<Button icon disabled>'>
                                <Button disabled>Click me! <BsFillExclamationCircleFill /></Button>
                            </div>
                        </div>
                        <div id='item-4'>
                            <p>Boton con icono deshabilitado con sombra</p>
                            <div title='<Button icon disabledShadow>'>
                                <Button disabledShadow>Click me! <BsFillExclamationDiamondFill /></Button>
                            </div>
                        </div>
                    </div>

                    <div className='BotonesTamaños'>
                        {/* Añadir botones con distintos tamaños */}
                        <div id="item-0">
                            <p>Pequeño</p>
                            <div title='<Button size="sm">'>
                                <Button size="sm">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-1">
                            <p>Mediano</p>
                            <div title='<Button size="md">'>
                                <Button size="md">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-2">
                            <p>Grande</p>
                            <div title='<Button size="lg">'>
                                <Button size="lg">Click me!</Button>
                            </div>
                        </div>
                    </div>

                    <div className='BotonesColores'>
                        {/* Añadir botones con distintos colores */}
                        <div id="item-0">
                            <p>Color por defecto</p>
                            <div title='<Button color="default">'>
                                <Button color="default">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-1">
                            <p>Color primario</p>
                            <div title='<Button color="primary">'>
                                <Button color="primary">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-2">
                            <p>Color secundario</p>
                            <div title='<Button color="secondary">'>
                                <Button color="secondary">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-3">
                            <p>Color terciario</p>
                            <div title='<Button color="tertiary">'>
                                <Button color="danger">Click me!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
