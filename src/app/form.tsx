"use client"

import React, { FormEvent, useState } from "react"

export const ContactForm = () => {

    const [name, setName] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('../../api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, apellidos, email, message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })
        } catch(err:any) {
            console.error('Err', err)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder="Nombre"/>
            <input 
                value={apellidos} 
                onChange={(e) => setApellidos(e.target.value)}
                type="text" 
                placeholder="Apellidos"/>
            <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Correo Electrónico"/>
            <textarea 
                value={message}
                placeholder="¿Qué nos quieres decir?"
                onChange={(e) => setMessage(e.target.value)}></textarea>
            <button 
                type="submit">Enviar</button>
        </form>
    )
}