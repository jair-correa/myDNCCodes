/* eslint-disable no-undef */
import { useState, useEffect } from 'react';

// ASSETS
import './ContactForm.css';

// COMPONENTS
import Button from '@components/Button/Button';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormValid) {
      setFormSubmitLoading(true);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            access_key: 'ebba954b-2c47-4913-9df7-c432e48d1372',
          }),
        });

        if (response.ok) {
          setFormSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          console.error('Erro ao enviar formulário');
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally {
        setFormSubmitLoading(false);
      }
    }
  };

  useEffect(() => {
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValid = formData.name.trim() && formData.email.trim() && isValidEmail(formData.email) && formData.message.trim();

    setIsFormValid(Boolean(isValid));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className='contact-form d-flex fd-column al-center'>
      <h2>We love meeting new people and helping them.</h2>

      <form onSubmit={handleSubmit}>
        <div className='d-flex form-group'>
          <input className='form-input' type='text' id='name' name='name' placeholder='Name *' value={formData.name} onChange={handleChange} />
          <input className='form-input' type='email' id='email' name='email' placeholder='Email *' value={formData.email} onChange={handleChange} />
        </div>

        <div className='d-flex form-group'>
          <textarea className='form-input' id='message' name='message' placeholder='Message *' value={formData.message} onChange={handleChange} rows='4'></textarea>
        </div>

        <div className='al-center d-flex jc-end form-group'>
          <Button type='submit' buttonStyle='secondary' disabled={!isFormValid || formSubmitLoading}>
            {formSubmitLoading ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
      </form>

      {formSubmitted && <p>Mensagem enviada com sucesso!</p>}
    </div>
  );
}

export default ContactForm;
