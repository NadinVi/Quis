import React from "react";


export default function QuizNavMenu() {
    return (
        <nav className="nav_container">   
            <div className="nav_row">
                <a href="#!">Quizzes of HTML, CSS, JS</a>
                <ul className="nav_menu">
                    <li className="nav-menu_item"><a href="#!" className="nav-list__link nav-list__link--active">Home</a></li>
                    <li className="nav-menu_item"><a href="#!" className="nav-list__link">Quizes</a></li>
                    <li className="nav-menu_item"><a href="#!" className="nav-list__link">Contacts</a></li>
                </ul>
            </div>
        
    </nav>
    )
}