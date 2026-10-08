
import { Link } from "react-router-dom";

function Contact() {
  const phoneNumber = "2349037075419";
  const whatsappNumber = "2348166836561";

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const whatsappMessage = `
Hello MIKKY'S CULINARY SCHOOL,

My name is ${name}.

Phone Number: ${phone}

Enquiry Type: ${subject}

Message:
${message}

I would like to get more information about the school.
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="hero-small">GET IN TOUCH</p>

          <h1>
            Let's Start Your
            <br />
            <span>Culinary Journey.</span>
          </h1>

          <p>
            Have questions about our programs, admission process or
            training? Our team is ready to help you take the next step.
          </p>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="section contact-main">
        <div className="section-heading">
          <p>CONTACT MIKKY'S</p>

          <h2>We'd Love to Hear From You.</h2>

          <span>
            Reach out to us through any of the channels below or send
            us a message directly.
          </span>
        </div>

        <div className="contact-grid">

          {/* PHONE */}
          <div className="contact-card">
            <span className="contact-number">01</span>

            <div className="contact-icon">☎</div>

            <h3>Call Us</h3>

            <p>
              Speak directly with our team for enquiries and admission
              information.
            </p>

            <a href="tel:+2349037075419">
              +234 903 707 5419
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="contact-card">
            <span className="contact-number">02</span>

            <div className="contact-icon">💬</div>

            <h3>WhatsApp</h3>

            <p>
              Send us a message on WhatsApp and our team will be happy
              to answer your questions.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* LOCATION */}
          <div className="contact-card">
            <span className="contact-number">03</span>

            <div className="contact-icon">📍</div>

            <h3>Visit Us</h3>

            <p>
              Come visit MIKKY'S CULINARY SCHOOL and experience our
              learning environment.
            </p>

            <span className="contact-location">
              No. 9 Balogun Street,
              <br />
              Taiwo Close, Oregun,
              <br />
              Ikeja, Lagos.
            </span>
          </div>

          {/* PROGRAM */}
          <div className="contact-card">
            <span className="contact-number">04</span>

            <div className="contact-icon">👨‍🍳</div>

            <h3>Our Program</h3>

            <p>
              Diploma in Culinary Art & Patisserie.
            </p>

            <Link to="/courses">
              View Our Courses
            </Link>
          </div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">

        <div className="contact-form-intro">
          <p>SEND A MESSAGE</p>

          <h2>Have a Question?</h2>

          <span>
            Fill out the form and continue the conversation with us
            directly on WhatsApp.
          </span>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />

          </div>

          <select
            name="subject"
            defaultValue=""
            required
          >
            <option value="" disabled>
              What can we help you with?
            </option>

            <option>
              Course Information
            </option>

            <option>
              Admission Enquiry
            </option>

            <option>
              Fees & Payment
            </option>

            <option>
              General Enquiry
            </option>
          </select>

          <textarea
            name="message"
            placeholder="Write your message..."
            required
          ></textarea>

          <button
            type="submit"
            className="primary-button"
          >
            Send Message on WhatsApp
          </button>

        </form>

      </section>

      {/* CTA */}
      <section className="cta">

        <div>
          <p>READY TO BEGIN?</p>

          <h2>
            Turn Your Passion Into a Profession.
          </h2>

          <span>
            Take the first step toward becoming a culinary professional.
          </span>
        </div>

        <Link
          to="/apply"
          className="primary-button"
        >
          Apply Now
        </Link>

      </section>

      <section className="section">
  <div className="section-heading">
    <p>OUR LOCATION</p>
    <h2>Visit MIKKY'S Culinary School</h2>

    <span>
      Find us at No. 9 Balogun Street, Taiwo Close,
      Oregun, Ikeja, Lagos.
    </span>
  </div>

  <div className="map-container">
    <iframe
      title="Mikky Culinary School Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2979254365096!2d3.351742639452319!3d6.6098548221812745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93cb55f9d2f1%3A0x972bb9fe9850580!2s9%20Balogun%20St%2C%20Oregun%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1791468026896!5m2!1sen!2sng"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>
</section>
    </>
  );
}

export default Contact;