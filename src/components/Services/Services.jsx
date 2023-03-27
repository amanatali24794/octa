import Image from 'next/image';
import styles from '@/styles/Services.module.css';
import LineBackground from '@/effects/LineBackground/LineBackground';

const Services = () => {
  return (
    <LineBackground>
    <div className={styles['services-container']}>
      <h1 className={styles['services-title']}>Services</h1>
      <div className={styles['services-list']}>
        <div className={styles['services-left']}>
          <h3 className={styles['services-heading']}>Car Repair</h3>
          <p>When it comes to car repair there are a lot of questions you have, which is why we're here!</p>
          <h3 className={styles['services-heading']}>Spare Parts</h3>
          <p>Looking for reliable auto spare parts sellers? Then you're in the right place</p>
          <h3 className={styles['services-heading']}>Auto Loans</h3>
          <p>If you are looking for hassle-free and affordable auto insurance coverage, Otobucks is the answer</p>
        </div>
        <div className={styles['services-image']}>
            <Image src="/images/car.png" alt="Car Repair" width={100} height={100} />
        </div>
        <div className={styles['services-right']}>
          <h3 className={styles['services-heading']}>Buy/Sell</h3>
          <p>Buy a car, get it financed, and drive away as soon as tomorrow</p>
          <h3 className={styles['services-heading']}>Rent a Car</h3>
          <p>Choose from a variety of car rental companies and pick the lowest rate for your car rental</p>
          <h3 className={styles['services-heading']}>Car Insurance</h3>
          <p>If you are looking for hassle-free and affordable auto insurance coverage, Otobucks is the answer</p>
        </div>
      </div>
    </div>
    </LineBackground>
  );
};

export default Services;
