import './Footer.scss';
import Vega_logo from './Vega_logo';

import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Footer() {
  return (
    <footer id="contact" className="main-footer">
      <div className="main-footer__content">
        <div className="main-footer__contact">
          <h3>Para solicitar seu o orçamento:</h3>
          <p>Entre em contato conosco:</p>
          <a href="mailto:vegaprodutos@gmail.com" target="_blank">
            <EmailIcon /> E-mail : vegaprodutos@gmail.com
          </a>
          <a
            href="https://web.whatsapp.com/send?phone=5547984772255"
            target="_blank"
          >
            <WhatsAppIcon /> WhatsApp : +55 47 9 8477-2255
          </a>
        </div>
        <a className="main-footer__logo" href="">
          <Vega_logo />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
