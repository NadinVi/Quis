import React from "react";
import github from "./../images/github.png";
import telegram from "./../images/telegram.png";
import viber from "./../images/viber.png";

export default function QuizFooter() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <ul className="social">
                        <li className="social_item"><a href="#!"><img src={viber} alt="telegram" /></a></li>
                        <li className="social_item"><a href="#!"><img src={github} alt="github" /></a></li>
                        <li className="social_item"><a href="#!"><img src={telegram} alt="telegram" /></a></li>
                    </ul>
                    <div className="copyright">
                        <p>Front End Pro 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}