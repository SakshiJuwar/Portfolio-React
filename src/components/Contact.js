import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'; // You need to install this package

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            emailjs.sendForm('service_emakjp9', 'template_irj2czj', e.target, 'WVxFANhFuSW2cWtRM')
                .then((result) => {
                    setSuccessMessage('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                })
                .catch((error) => {
                    setErrors({ apiError: 'Failed to send message. Please try again later.' });
                });
        }
    };
    

    return (
        <div className="contact-container">
            <img src="shape1.png" alt="Vector-Shape5" className="vector-shape5" />
            <center>
                                <h3>CONTACT ME</h3>
                <h1>_____________________________________</h1>
            </center>
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit">Send Message</button>
                    {errors.apiError && <span className="error">{errors.apiError}</span>}
                    {successMessage && <span className="success">{successMessage}</span>}
                </form>
                <div className="contact-info">
                    <h4>My Contact Information</h4>
                    <p>Email: sakshijuwar81120@gmail.com</p>
                    <p>Phone: +91-7821053848</p>
                    <p>Location: Pune, India</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;

