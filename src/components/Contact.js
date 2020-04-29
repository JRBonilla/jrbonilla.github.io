import React, { Component } from 'react';
import '../App.css';

// The contact page contents
class Contact extends Component {
  state = {
    name: '',
    message: '',
    subject: '',
    email: '',
    sent: false,
    buttonText: 'Send'
  }

  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: '...sending'
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    }

    /*
    axios.post('API_URI', data)
    .then(res => {
      this.setState({ sent: true }, this.resetForm())
    })
    .catch(() => {
      console.log('Message not sent')
    });
    */
  }

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      subject: '',
      email: '',
      buttonText: 'Message sent'
    });
  }

  render() {
    return (
        <div className="page">
          <p className="page-title">Contact</p>
          <div id="contact" className="animated fadeInUp">
            <div className="social-media">
              <a href="https://www.linkedin.com/in/jonathan-bonilla210"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/JRBonilla"><i className="fab fa-github-square"></i></a>
            </div>
            {/*<form className="contact-form" onSubmit={ (e) => this.formSubmit(e) }>
              <input onChange={(e) => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Name" value={this.state.name} required/>
              <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" value={this.state.email} required/><br/>
              <input onChange={(e) => this.setState({ subject: e.target.value})} name="subject" class="message-subject" type="text" placeholder="Subject" value={this.state.subject} required/><br/>
              <textarea onChange={(e) => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Write your message here" value={this.state.message} required/><br/>
              <div className="button">
                  <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
              </div>
            </form>*/}
          </div>
        </div>
    )
  }
}

export default Contact;