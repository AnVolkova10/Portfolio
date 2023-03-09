import '../Contact/ContactStyles.scss';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.png';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

/*import 'animate.css';
import TrackVisibility from 'react-on-screen';*/

export const Contact = () => {
  const { contactData, handleSubmit, status, buttonText, setButtonText } =
    useContext(AppContext);

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
              <form onSubmit={handleSubmit}>
                <Row>
                  {contactData.map((input) => (
                    <Col
                      key={input.placeholder}
                      {...input.size}
                      className='px-1'
                    >
                      {input.type === 'textarea' ? (
                        <textarea {...input} />
                      ) : (
                        <input {...input} />
                      )}
                    </Col>
                  ))}
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? 'danger' : 'success'
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                  <Col size={12} className='px-1'>
                    <button type='submit'>
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
