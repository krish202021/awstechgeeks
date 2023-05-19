import React from 'react'

function Letstalkmsg() {
    return (
        <div>


            <div className="send-message-popup">
                <h5>Send a Message</h5>
                <p>Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnais.</p>
                <form className="form-validate contact-form" method="post" action="send_mail.php">
                    <div className="with-icon">
                        <input name="name" placeholder="Your Name" type="text" required="required" />
                        <svg className="utouch-icon utouch-icon-user">
                            <use xlinkHref="#utouch-icon-user"></use>
                        </svg>
                    </div>

                    <div className="with-icon">
                        <input name="email" placeholder="Email Adress" type="text" required="required" />
                        <svg className="utouch-icon utouch-icon-message-closed-envelope-1">
                            <use xlinkHref="#utouch-icon-message-closed-envelope-1"></use>
                        </svg>
                    </div>

                    <div className="with-icon">
                        <input className="with-icon" name="phone" placeholder="Phone Number" type="tel" required="required" />
                        <svg className="utouch-icon utouch-icon-telephone-keypad-with-ten-keys">
                            <use xlinkHref="#utouch-icon-telephone-keypad-with-ten-keys"></use>
                        </svg>
                    </div>

                    <div className="with-icon">
                        <input className="with-icon" name="subject" placeholder="Subject" type="text" required="required" />
                        <svg className="utouch-icon utouch-icon-icon-1">
                            <use xlinkHref="#utouch-icon-icon-1"></use>
                        </svg>
                    </div>

                    <div className="with-icon">
                        <textarea name="message" required="" placeholder="Your Message" ></textarea>
                        <svg className="utouch-icon utouch-icon-edit">
                            <use xlinkHref="#utouch-icon-edit"></use>
                        </svg>
                    </div>

                    <button className="btn btn--green btn--with-shadow full-width">
                        Send a Message
                    </button>

                </form>
            </div>


        </div>


    )
}

export default Letstalkmsg