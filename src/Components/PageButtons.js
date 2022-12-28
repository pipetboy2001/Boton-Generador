import React, { useState } from 'react';
import Button from './../Components/Button'
import './../Style/PageButtons.css'
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { BsFillExclamationCircleFill } from "react-icons/bs";


export const PageButtons = () => {
    const [variant, setVariant] = useState('default');
    const [disabled, setDisabled] = useState(false);
    const [color, setColor] = useState('default');
    const [size, setSize] = useState('md');
    const [shadow, setShadow] = useState(true);

    return (
        <>
            <center>
                <div className="container-class">
                    <center><h2 className='Titulo'>Botones</h2></center>
                    <div className='BotonesBasicos'>
                        <div id="item-0">
                            <p>Botón base</p>
                            <div title="<Button />">
                                <Button >Click me!</Button>
                            </div>
                        </div>
                        <div id="item-1">
                            <p>Botón con contorno</p>
                            <div title='<Button variant="outline" />'>
                                <Button variant="outline">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-2">
                            {/* Añadir boton con texto */}
                            <p>Botón con texto</p>
                            <div title='<Button variant="text" />'>
                                <Button variant="text">Click me!</Button>
                            </div>
                        </div>
                        <div id="item-3">
                            {/* Añadir boton con sombra */}
                            <p>Botón con sombra</p>
                            <div title='<Button shadow />'>
                                <Button shadow>Click me!</Button>
                            </div>
                        </div>
                    </div>

                    <div className='BotonesDesahbilitar'>
                        <div id="item-0">
                            {/* Añadir boton deshabilitado */}
                            <p>Botón deshabilitado</p>
                            <div title='<Button disabled />'>
                                <Button disabled>Click me!</Button >
                            </div>

                        </div>
                        <div id="item-1">
                            {/* Añadir boton disabled Shadow*/}
                            <p>Botón deshabilitado con sombra</p>
                            <div title='<Button disabledShadow />'>
                                <Button disabledShadow>Click me!</Button>
                            </div>
                        </div>
                        <div id="item-2">
                            {/* Añadir boton con contornor deshabilitado */}
                            <p>Botón con contorno deshabilitado</p>
                            <div title='<Button disable variant="outline">'>
                                <Button variant="outline" disabled>Click me!</Button>
                            </div>

                        </div>
                        <div id="item-3">
                            {/* Añadir boton con texto deshabilitado */}
                            <p>Botón con texto deshabilitado</p>
                            <div title='<Button disable variant="text">'>
                                <Button variant="text" disabled>Click me!</Button>
                            </div>
                        </div>
                    </div>

                    <div className='BotonesIconos'>
                        {/* Añadir boton con iconos */}
                        <div id='item-0'>
                            <p>Botón con icono</p>
                            <div title='<Button icon>'>
                                <Button icon={<BsFillBookmarkStarFill />} iconPosition="left" > Click me! </Button>
                            </div>
                        </div>
                        <div id='item-1'>
                            <p>Botón con icono y contorno</p>
                            <div title='<Button icon variant="outline">'>
                                <Button variant="outline" icon={<BsFillExclamationTriangleFill />} iconPosition="right"> Click me! </Button>
                            </div>
                        </div>
                        <div id='item-2'>
                            <p>Botón con icono y texto</p>
                            <div title='<Button icon variant="text">'>
                                <Button variant="text" icon={< BsFillExclamationOctagonFill />} iconPosition="left"> Click me! </Button>
                            </div>
                        </div>
                        <div id='item-3'>
                            <p>Botón con icono deshabilitado</p>
                            <div title='<Button icon disabled>'>
                                <Button disabled icon={<BsFillExclamationCircleFill />} iconPosition="right"> Click me! </Button>
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

                    <h2 className='Titulo'>Modificable</h2>
                    <center className='BotonModificable'>
                        <div id="item-0">
                            <Button variant={variant} disabled={disabled} size={size} color={color} shadow={shadow}>Click me!</Button>

                        </div>
                        <div id='item-1'>
                            <div>
                                <label>
                                    Variante:
                                    <select value={variant} onChange={event => setVariant(event.target.value)}>
                                        <option value="default">Default</option>
                                        <option value="outline">Outline</option>
                                        <option value="text">Text</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className='Checkbox'>
                                    Deshabilitado:
                                    <input type="checkbox" checked={disabled} onChange={event => setDisabled(event.target.checked)} />
                                </label>
                            </div>
                            <div>
                                <label className='Checkbox'>
                                    Sombra:
                                    <input type="checkbox" checked={shadow} onChange={event => setShadow(event.target.checked)} />
                                </label>
                            </div>
                            <div>
                                <label>
                                    Color:
                                    <select value={color} onChange={event => setColor(event.target.value)}>
                                        <option value="default">Default</option>
                                        <option value="primary">Primary</option>
                                        <option value="secondary">Secondary</option>
                                        <option value="danger">Danger</option>
                                    </select>

                                </label>
                            </div>
                            <div>
                                <label>
                                    Tamaño:
                                    <select value={size} onChange={event => setSize(event.target.value)}>
                                        <option value="
                                    ">Default</option>
                                        <option value="sm">Small</option>
                                        <option value="md">Medium</option>
                                        <option value="lg">Large</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </center>

                </div>
            </center>
        </>
    )
}
