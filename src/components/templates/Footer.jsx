import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <ul className='social'>
            <li className='social_item'>
              <a href='https://www.facebook.com/ivanova.nadenka'>
                <FacebookIcon />
              </a>
            </li>
            <li className='social_item'>
              <a href='https://t.me/Nadiia_Vinokhodova'>
                <TelegramIcon />
              </a>
            </li>
            <li className='social_item'>
              <a href='https://github.com/NadinVi'>
                <GitHubIcon />
              </a>
            </li>
          </ul>
          <div className='copyright'>
            <p className='fooText'>Front End Pro 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
