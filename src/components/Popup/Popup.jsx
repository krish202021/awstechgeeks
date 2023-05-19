import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import Contact from '../Common/Contact';

function Popup() {

    const history = useHistory()
    return (
        <div>
            <div>
                <div class="popup-abc">
                  
                    <button onClick={() => history.goBack()} class="popup-close js-popup-close cd-nav-trigger popup-close-btn">
                        <span>×</span>
                    </button>


                    <div class="send-message-popup">
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup