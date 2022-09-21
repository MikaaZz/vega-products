import './How_ami.scss';

import Image_vega from '../../assets/Image_vega.jpg';

export function How_ami() {
  return (
    <div id="how__ami" className="how-ami">
      <div className="how-ami__container">
        <img className="how-ami__image" src={Image_vega} />
        <p className="how-ami__content">
          Regina Luiza Gouvea, fundadora da Vega Produtos e Serviços, possui
          doutorado em Ciência e Tecnologia Ambiental pela Universidade do Vale
          do Itajaí - UNIVALI, mestrado em Engenharia Ambiental pela Fundação
          Universidade Regional de Blumenau (FURB) e graduação em Geografia pela
          Pontifícia Universidade Católica de Minas Gerais, PUC-MG. Realizou
          estudos voltados para a Gestão e Tecnologia Ambiental. Vem atuado no
          domínio da Geografia Técnica com uso de geotecologias com ênfase em
          geoprocessamento e Sistemas de Informação Geográfica (SIG).
        </p>
      </div>
    </div>
  );
}
export default How_ami;
