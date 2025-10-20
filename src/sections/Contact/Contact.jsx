import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus('Sending...');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xldpvaab', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('Message sent');
        form.reset();
      } else {
        setStatus('Something went wrong. Please try again ❌');
      }
    } catch (err) {
      setStatus('Network error. Please try again ❌');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      <form onSubmit={handleSubmit}>
        {/* Honeypot (spam protection): keep hidden */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
        {/* Optional: custom email subject */}
        <input type="hidden" name="_subject" value="New message from Lawrence’s portfolio" />

        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea id="message" name="message" placeholder="Message" required></textarea>
        </div>

        <input className="hover btn" type="submit" value={submitting ? 'Sending…' : 'Submit'} disabled={submitting} />
      </form>

      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
}

export default Contact;
