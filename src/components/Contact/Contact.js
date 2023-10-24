import '../Contact/contact.scss';

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-content">
        <div className="contact-title">
          <h1>Vous souhaitez me contacter ?</h1>
        </div>
        <div className="contact-links">
          <a href="https://www.linkedin.com/feed/" className="contact-link">
            Linkedin
          </a>
          <a href="https://github.com/rmymartinet" className="contact-link">
            Github
          </a>
          <a href="https://www.instagram.com/remymtr/" className="contact-link">
            Instagram
          </a>
          <a href="mailto:remymartin.bk@gmail.com" className="contact-link">
            @remymartin.bk@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
