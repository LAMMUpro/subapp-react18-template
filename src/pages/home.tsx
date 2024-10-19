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
          width={600}
          height={600}
          animation-link={getLottieJsonLink('react')}
        ></MicroComponent>

        <div style={{ color: 'white' }}>
          react18子应用首页，👆lottie图标
        </div>
      </section>
    </>
  );
}

export default home;
