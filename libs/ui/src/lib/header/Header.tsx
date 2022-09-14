import './Header.scss';
import Vega_logo from './Vega_logo';

interface childrens {
  headerContentNav: JSX.Element;
}

export function Header(props: childrens) {
  return (
    <header className="main-header">
      <div className="main-header__content">
        <nav className="main-header__navigation">{props.headerContentNav}</nav>
        <a className="main-header__logo" href="">
          <Vega_logo />
        </a>
      </div>
    </header>
  );
}

export default Header;
