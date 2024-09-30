import MicroComponent from 'micro-app-utils/react18/MicroComponent';
import styles from './home.module.scss';

function home() {
  return (
    <>
      <section className={`-m-card`} style={{ backgroundColor: '#282c34', textAlign: 'center' }}>
        <MicroComponent
          className={`${styles.animation}`}
          _is="UseSvg"
          name="react"
          size="400px"
        ></MicroComponent>
        
        <div style={{ color: 'white' }}>
          react18子应用首页
        </div>
      </section>
    </>
  );
}

export default home;
