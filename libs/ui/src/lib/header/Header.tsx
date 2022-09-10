import './Header.scss';

interface childrens {
  headerContentNav: JSX.Element;
}

export function Header(props: childrens) {
  return (
    <header className="main-header">
      <div className="main-header__content">
        <nav className="main-header__navigation">
          <ul>{props.headerContentNav}</ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
