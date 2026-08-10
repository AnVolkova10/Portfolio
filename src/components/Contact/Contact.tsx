import '../Contact/ContactStyles.scss'
import { useState, useRef, type FormEvent } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../../assets/img/contact-img.png'
import emailjs from 'emailjs-com'
import { useLanguage } from '../../i18n/LanguageProvider'

type SubmissionState = 'idle' | 'sending' | 'sent'
type ContactStatus = 'success' | 'error' | null

export const Contact = () => {
  const { messages } = useLanguage()
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>('idle')
  const [status, setStatus] = useState<ContactStatus>(null)
  const form = useRef<HTMLFormElement>(null)
  const buttonText =
    submissionState === 'sending'
      ? messages.contact.sending
      : submissionState === 'sent'
        ? messages.contact.sent
        : messages.contact.send
  const statusMessage = status ? messages.contact[status] : undefined

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmissionState('sending')
    setStatus(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? import.meta.env.REACT_APP_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY

    if (!form.current || !serviceId || !templateId || !publicKey) {
      setSubmissionState('idle')
      setStatus('error')
      return
    }

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then((response) => {
        console.log('Email sent successfully', response)
        setSubmissionState('sent')
        setTimeout(() => setSubmissionState('idle'), 3000)
        setStatus('success')
        form.current?.reset()
      })
      .catch((error) => {
        console.error('Error sending email', error)
        setSubmissionState('idle')
        setStatus('error')
      })
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <img src={contactImg} alt={messages.contact.imageAlt} />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>{messages.contact.title}</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col size='xs' className='px-1'>
                    <input
                      type='text'
                      name='firstName'
                      aria-label={messages.contact.firstName}
                      placeholder={messages.contact.firstName}
                    />
                  </Col>
                  <Col xs={12} sm={6} className='px-1'>
                    <input
                      type='text'
                      name='lastName'
                      aria-label={messages.contact.lastName}
                      placeholder={messages.contact.lastName}
                    />
                  </Col>
                  <Col xs={12} sm={6} className='px-1'>
                    <input
                      type='email'
                      name='email'
                      aria-label={messages.contact.email}
                      placeholder={messages.contact.email}
                    />
                  </Col>
                  <Col xs={12} sm={6} className='px-1'>
                    <input
                      type='tel'
                      name='phone'
                      aria-label={messages.contact.phone}
                      placeholder={messages.contact.phone}
                    />
                  </Col>
                  <Col xs={12} className='px-1'>
                    <textarea
                      name='message'
                      aria-label={messages.contact.message}
                      placeholder={messages.contact.message}
                      rows={6}
                    />
                  </Col>
                </Row>
                {statusMessage && (
                  <Row>
                    <Col>
                      <p
                        aria-live='polite'
                        className={status === 'error' ? 'danger' : 'success'}
                        role='status'
                      >
                        {statusMessage}
                      </p>
                    </Col>
                  </Row>
                )}
                <Col size={12} className='px-1'>
                  <button
                    disabled={submissionState === 'sending'}
                    type='submit'
                  >
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
