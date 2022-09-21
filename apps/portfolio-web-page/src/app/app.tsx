// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Header from '../../../../libs/ui/src/lib/header/Header';
import Footer from '../../../../libs/ui/src/lib/footer/Footer';
import How_ami from '../components/How_ami/How_ami';

import About_products from '../components/About_products/About_products';
import Main_cover from '../components/Main_cover/Main_cover';

// Avançados
import mapa_kernel from '../assets/Mapa_kernel_blumenau.jpg';
import mapa_ndvi from '../assets/Mapa_ndvi.jpg';
import mapa_hipsometrico from '../assets/Mapa_hipsometrico.jpg';

// Tematicos
import mapa_indigena from '../assets/Mapa_distribuicao_indigena.jpg';
import mapa_feminina from '../assets/Mapa_populacao_feminina.jpg';
import mapa_calor from '../assets/Mapa_foco_calor.jpg';

// Vintage
import mapa_vintage from '../assets/Mapa_vintage.png';

// Localização
import mapa_balneario from '../assets/Mapa_balneario.jpg';
import mapa_barraVelha from '../assets/Mapa_barra_velha.jpg';
import mapa_urubici from '../assets/Mapa_urubici.jpg';

import Maps_avancados from '../components/Maps/Mapas_avancados/Maps_avancados';
import Maps_localizacao from '../components/Maps/Mapas_localizacao/Maps_localizacao';
import Maps_tematico from '../components/Maps/Mapas_tematicos/Maps_tematicos';
import Maps_vintage from '../components/Maps/Mapas_vintage/Maps_vintage';

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
      <div id="products" className="swiperSlides">
        <Maps_localizacao
          mapTitle="Mapas de localização: "
          imageSrcOne={mapa_balneario}
          imageSrcTwo={mapa_barraVelha}
          imageSrcThree={mapa_urubici}
          mapDescription="São mapas bastante usuais. Estes mapas mostram a localização de uma área de estudo e a distribuição de dados. Podem ser encontrados em monografias, TCCs, dissertações, teses, artigos e relatórios. "
        />
        <Maps_tematico
          mapTitle="Mapas temáticos: "
          imageSrcOne={mapa_indigena}
          imageSrcTwo={mapa_feminina}
          imageSrcThree={mapa_calor}
          mapDescription="São mapas que abordam um tema. Estes mapas podem ser muito importantes na tomada de decisão, pois podem trazer algumas respostas a partir da associação de informações conhecidas. "
        />
        <Maps_avancados
          mapTitle="Mapas avançados: "
          imageSrcOne={mapa_kernel}
          imageSrcTwo={mapa_ndvi}
          imageSrcThree={mapa_hipsometrico}
          mapDescription="São mapas que permitem a visualização da distribuição de um fenômeno, a identificação e a interpretação de padrões do fenômeno representado."
        />
        <Maps_vintage
          mapTitle="Mapas Estilo Vintage: "
          imageSrcOne={mapa_vintage}
          mapDescription="São mapas cuja aparência lembra os mapas mais antigos. Passam a ideia de desenhos em papiro, planta de grande importância para os egípcios, que serviu de suporte para a escrita."
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
