import '../Contact/ContactStyles.scss';
import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.png';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log('Email sent successfully', response);
        setButtonText('SENT!!');
        form.current.reset();
      })
      .catch((error) => {
        console.error('Error sending email', error);
      });
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <Row>
                  <Col size='xs' className='px-1'>
                    <input
                      type='text'
                      name='firstName'
                      placeholder='First Name'
                    />
                  </Col>
                  <Col xs={12} sm={6} className='px-1'>
                    <input
                      type='text'
                      name='lastName'
                      placeholder='Last Name'
                    />
                  </Col>
                  <Col xs={12} sm={6} className='px-1'>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email Address'
                    />
                  </Col>
                  <Col xs={12} sm={6} className='px-1'>
                    <input type='tel' name='phone' placeholder='Phone No.' />
                  </Col>
                  <Col xs={12} className='px-1'>
                    <textarea name='message' placeholder='Message' rows={6} />
                  </Col>
                </Row>
                {status.message && (
                  <Row>
                    <Col>
                      <p
                        className={
                          status.success === false ? 'danger' : 'success'
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  </Row>
                )}
                <Col size={12} className='px-1'>
                  <button type='submit'>
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
