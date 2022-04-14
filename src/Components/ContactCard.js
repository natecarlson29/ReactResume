import React from 'react'
import emailjs from '@emailjs/browser';

class ContactCard extends React.Component {
  
    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xqm5e8f', 'template_0ns5dui', e.target, 'AxNy4nzCU6XXWzZXc');
        e.target.reset();
    }

    render() {
      return (
            <div className="contactCard">
                <hr></hr>
                <h1 className="">Contact</h1>
                <hr></hr>
                <div>
                    <form className="contactForm" onSubmit={this.sendEmail}>
                        <p><input className="contactInput" type="text" placeholder="Name" required name="name"></input></p>
                        <p><input className="contactInput" type="text" placeholder="Email" required name="email"></input></p>
                        <p><input className="contactInput" type="text" placeholder="Company" required name="company"></input></p>
                        <textarea className="contactInput" name="message" type="textarea" placeholder="Message"></textarea>
                        <p><input className="contactSubmit" type="submit" value="Submit"/></p>
                    </form>
                </div>
            </div>
      );
    }
  }

  export default ContactCard;