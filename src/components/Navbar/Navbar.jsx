import React from 'react';
import Link from "next/link"
import { useRouter } from 'next/router';
import Dropdown from '../Dropdown/Dropdown';
import styles from  '@/styles/Navbar.module.css';

export default function Navbar() {

  const router= useRouter();
  
  function handleServicesClick(to){
    router.push("/"+to)
  }
  const servicesLinks = [
    {
      text: "Car Repair",
      clickHandler: () => handleServicesClick("car-repair")
    },
    {
      text: "Spare Parts",
      clickHandler: () => handleServicesClick("spare-parts")
    },
    {
      text: "Auto Loans",
      clickHandler: () => handleServicesClick("auto-loans")
    },
    {
      text: "Buy / Sell",
      clickHandler: () => handleServicesClick("buy-sell")
    },
    {
      text: "Rent a Car",
      clickHandler: () => handleServicesClick("rent-a-car")
    },
    {
      text: "Car Insurance",
      clickHandler: () => handleServicesClick("car-insurance")
    }
  ];
  

 
  return (
    <nav className={styles.navbar} role="navigation" aria-label="main navigation">
      <div className={styles['navbar-inner']}>
        <div className={styles['navbar-brand'] + ' ' + styles['navbar-start']}>
          <Link href="/" className={styles['navbar-item']}>
            <img
                src="https://otobucks.com/static/media/logo.03de0a439b5e1c1ed659296cc17310de.svg"
            />
          </Link>
        </div>
        <div className={styles['navbar-menu']}>
          <div className={styles['navbar-end']}>
            <Dropdown 
              height={13} 
              width={12} 
              btnText="Services" 
              dropdownItems={servicesLinks}
              className={styles['navbar-item']} 
            />
          
            <Link href="/results" className={styles['navbar-item']}>
              Results
            </Link>
            <Link href="/about" className={styles['navbar-item']}>
              About Us
            </Link>
            <Link href="/careers" className={styles['navbar-item']}>
              Blogs
            </Link>
            <Link href="/contact-us" className={styles['navbar-item']}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
