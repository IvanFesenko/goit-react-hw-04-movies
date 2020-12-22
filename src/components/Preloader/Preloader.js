import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Preloader.module.css';

function Preloader() {
  return (
    <div className={s.wrapper}>
      <Loader
        type="TailSpin"
        color="firebrick"
        height={200}
        width={200}
        timeout={3000}
      />
    </div>
  );
}

export default Preloader;
