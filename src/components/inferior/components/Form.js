import React from 'react';
import { useState } from 'react';

export default function Form({ areas, contact }) {

    let solicite, btnEnviar, nameText, mailText, areaText, msgText, sendingText, sentText
    let lang = contact.locale.substring(0, 2)
    if (lang === 'pt') {
        solicite = 'Solicite uma Consulta'
        nameText = 'Nome e Sobrenome'
        mailText = 'Seu E-mail'
        areaText = 'Área de Atuação'
        msgText = 'Sua Mensagem'
        btnEnviar = 'Enviar Mensagem'
        sendingText = 'Enviando...'
        sentText = 'Enviada com sucesso!'
    }
    else {
        solicite = 'Request an Appointment'
        nameText = 'Name and Surname'
        mailText = 'Your E-mail'
        areaText = 'Area of Expertise'
        msgText = 'Your Message'
        btnEnviar = 'Send Message'
        sendingText = 'Sending...'
        sentText = 'Sent successfully!'
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [area, setArea] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if (submitted) {
            return;
        }
        let sent = document.getElementById('sent')
        let sending = document.getElementById('sending')
        console.log('Sending')
        sending.style.display = 'flex'

        let data = {
            name,
            email,
            area,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                sending.style.display = 'none'
                sent.style.display = 'flex'
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
                setArea('')
            }
        })
    }

    return (
        <>
            <div className="consulta-header bg-dourado text-white playfair">
                <strong className="fs-24">{solicite}</strong>
            </div>
            <div className="consulta-body bg-white">
                <form onSubmit={ handleSubmit }>
                    <div className="form-floating">
                        <input required="required" type="text" id="nome-e-sobrenome" placeholder="Nome e Sobrenome" className="form-control border-radius-0" onChange={ (e) => { setName(e.target.value) } } />
                        <label className="placeholder-text" htmlFor="nome-e-sobrenome">{nameText}</label>
                    </div>

                    <div className="form-floating">
                        <input required="required" type="email" id="mail" placeholder="Seu E-mail" className="form-control border-radius-0" onChange={ (e) => { setEmail(e.target.value) } } />
                        <label className="placeholder-text" htmlFor="mail">{mailText}</label>
                    </div>

                    <div>
                        <select required="required" defaultValue="Área" id="atuacao" className="form-select border-radius-0" onChange={(e) => { setArea(e.target.value) }}>
                            <option value="Não informado">{areaText}</option>
                            {/*<option value="Consultivo Cível">Consultivo Cível</option>
                            <option value="Direito Empresarial">Direito Empresarial</option>
                            <option value="LGPD">LGPD</option>
                            <option value="Direito Administrativo">Direito Administrativo</option>
                            <option value="Contencioso Civil">Contencioso Civil</option>
                            <option value="Trabalhista/Previdenciário">Trabalhista/Previdenciário</option>
                            <option value="Direito e Saúde">Direito e Saúde</option>*/}
                            {
                                areas.map(area => {
                                    return (
                                        <option key={`area-option-${area.title}`} value={area.title}>{area.title}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-floating mb-4">
                        <textarea required="required" id="msg" placeholder="Descrição da Demanda" className="form-control border-radius-0" onChange={ (e) => { setMessage(e.target.value) } } />
                        <label className="placeholder-text" htmlFor="msg">{msgText}</label>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between">
                        <button className="btn btn-primary msg-btn btn-h-45 w-max-content" id="submit-btn" type="submit">
                            <span className="d-inline-block">{btnEnviar}<img src="/img/seta.svg" alt="Seta" /></span>
                        </button>

                        <div className="flex-center w-max-content mt-2 mt-sm-0" id="sent">
                            <span className="d-inline-block checked-icon text-success">✓</span>
                            <span className="d-inline-block ms-2 fs-13">{sentText}</span>
                        </div>

                        <div className="flex-center w-max-content mt-2 mt-sm-0" id="sending">
                            <div className="spinner-border text-dourado" role="status" />
                            <span className="d-inline-block ms-2">{sendingText}</span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}