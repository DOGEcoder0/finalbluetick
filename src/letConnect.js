import "./letConnect.css";
import connect from './Assets/connect.jpg'
function letconnect(){
    return(
        <form className="connect_container">
            <img src={connect} alt="connect"/>
            <div className="component_connect">
            <h3>LET'S CONNECT</h3>
            <h4>Contact our support team or make an appointment with our experts.</h4>
            <div className="form_details">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" required/>

                <label htmlFor="email">E-mail:</label>
                <input type= "email" id="email" required/>

                <label htmlFor="contactnumber">Contant Number:</label>
                <input type= "number" id="contactnumber" required/>
                <label htmlFor="subject">Subject:</label>
                <textarea id="subject" required/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" required/>

                <button type="submit">Submit Form</button>

            </div>
            
            </div>
        </form>
    )
}

export default letconnect