import '../Contact/contact.scss';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <div className="contact-title">
          <h1>Vous souhaitez me contacter ?</h1>
        </div>
        <div className="contact-links">
          <a className="contact-link">Linkedin</a>
          <a className="contact-link">Github</a>
          <a className="contact-link">Instagram</a>
          <a className="contact-link">Mail</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
