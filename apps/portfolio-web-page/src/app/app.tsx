// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Header from '../../../../libs/ui/src/lib/header/Header';
import Footer from '../../../../libs/ui/src/lib/footer/Footer';
import How_ami from '../components/How_ami/How_ami';
import Maps from '../components/Maps/Maps';
import About_products from '../components/About_products/About_products';
import Main_cover from '../components/Main_cover/Main_cover';

export function App() {
  return (
    <>
      <Header
        headerContentNav={
          <ul>
            <a href="#how__ami">
              <li>Quem somos</li>
            </a>
            <a href="#products">
              <li>Produtos</li>
            </a>
            <a href="#contact">
              <li>Contato</li>
            </a>
          </ul>
        }
      />
      <Main_cover />
      <How_ami />
      <About_products />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
