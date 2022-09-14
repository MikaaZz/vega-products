import './Main_cover.scss';

import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const Main_cover = () => {
  return (
    <div className="main_cover">
      <div className="main_cover--imageBg">
        <div className="main_cover--container">
          <h1 className="main_cover--title">
            Produção cartográfica
            <br />
            para seu
            <br />
            projeto
          </h1>
          <button
            onClick={() => {
              window.scroll({
                top: 653,
                behavior: 'smooth',
              });
            }}
            className="main_cover--continueButton"
          >
            <ArrowDownwardRoundedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main_cover;
