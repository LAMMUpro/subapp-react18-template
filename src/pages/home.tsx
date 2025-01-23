import MicroComponent from 'micro-app-tools/react18/MicroComponent';
import styles from './home.module.scss';
import { getLottieJsonLink } from '@/utils';

function home() {
  return (
    <>
      <section className={`-m-card`} style={{ backgroundColor: '#282c34', textAlign: 'center' }}>
        <MicroComponent
          className={`${styles.animation}`}
          _is="Lottie"
          width={'50%'}
          height={'50%'}
          animation-link={getLottieJsonLink('react')}
        ></MicroComponent>

        <div style={{ color: 'white' }}>
          react18子应用首页
        </div>
      </section>
    </>
  );
}

export default home;
