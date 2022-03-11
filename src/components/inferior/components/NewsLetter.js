import React from 'react';
import { useState } from 'react';

export default function NewsLetter({ textos }) {

  let newsText, subscribeText, inputText, sendingText, sentText
  let lang = textos.locale.substring(0, 2)
  if (lang === 'pt') {
    newsText = 'Inscreva-se para receber nossas últimas notícias e artigos.'
    subscribeText = 'Assine nossa Newsletter'
    inputText = 'Insira seu E-mail'
    sendingText = 'Enviando...'
    sentText = 'Enviada com sucesso!'
  }
  else {
    newsText = 'Subscribe to receive our latest news and articles.'
    subscribeText = 'Subscribe to our Newsletter'
    inputText = 'Enter your E-mail'
    sendingText = 'Sending...'
    sentText = 'Sent successfully!'
  }

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    if (submitted) {
      return;
    }
    let subscribed = document.getElementById('subscribed')
    let subscribing = document.getElementById('subscribing')
    console.log('Sending')
    subscribing.style.display = 'flex'

    let data = {
      email,
    }

    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log(res);
        subscribing.style.display = 'none'
        subscribed.style.display = 'flex'
        console.log('Response succeeded!')
        setSubmitted(true)
        setEmail('')
      }
    })
  }

  return (
    <div className="newsletter mx-3 mx-sm-0">
      <div>
        <span className="playfair fs-20 d-none d-md-block">Newsletter</span>
        <span className="playfair fs-20 d-md-none d-block">{subscribeText}</span>
        <span className="text-white d-none d-md-inline-block my-4">{newsText}</span>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input onChange={(e) => { setEmail(e.target.value) }} required="required" type="email" className="form-control news-input" placeholder={inputText} />
            <button className="btn btn-primary news-submit justify-content-center" type="submit">
              <svg height="12" width="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" className="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
            </button>
          </div>

          <div className="flex-center w-max-content mt-2 mt-sm-0" id="subscribed">
            <span className="d-inline-block checked-icon text-success">✓</span>
            <span className="d-inline-block text-white ms-2 fs-13">{sentText}</span>
          </div>

          <div className="flex-center w-max-content mt-2 mt-sm-0" id="subscribing">
            <div className="spinner-border text-dourado" role="status" />
            <span className="d-inline-block text-white ms-2">{sendingText}</span>
          </div>
        </form>
      </div>
    </div>
  )
}