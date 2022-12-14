import styles from '../styles/components/Footer.module.css';
import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import { urlFor } from '../sanityConfig';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = ({data: { businessInfo }}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [logo, setLogo] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [logoStyle, setLogoStyle] = useState('');

  useEffect(() => {
    setName(businessInfo?.businessName);
    setPhoneNumber(businessInfo?.phone);
    setEmail(businessInfo?.email);
    setLogo(businessInfo?.logo);
    setStreet(businessInfo?.street);
    setCity(businessInfo?.city);
    setProvince(businessInfo?.province);
    setCountry(businessInfo?.country);
    setLogoStyle(businessInfo?.logoStyles);
  }, [businessInfo]);

  return (
    <footer className={`${styles.footer} ${styles[logoStyle]}`}>
      <div className={styles.logoNameDiv}>
        <div className={styles.nameDiv}>
          <h2 className={`${styles.info}
                          ${styles.companyName}`}>
                {name}
          </h2>
        </div>
        <div className={`${styles.logoDiv} ${styles.logoDiv}`}>
          {
            logo &&
            <img className={styles.logoImg} src={urlFor(logo).url()} />
            // <Image
            //   loader={() => urlFor(logo)}
            //   src='logo.svg'
            //   alt='logo'
            //   width={150}
            //   height={120}
            // />
          }
        </div>
      </div>
      <div className={styles.infoDiv}>
        <div className={`${styles.info} ${styles.phoneDiv}`}>
          <a className={styles.infoAnchor} href={`tel:${phoneNumber}`}>
            <span className={`${styles.phoneIcon} ${styles.icon}`}>
              <AiFillPhone />
            </span>
            <span className={styles.phone}>
              {phoneNumber}
            </span>
          </a>
        </div>
        <div className={`${styles.info} ${styles.emailDiv}`} >
          <a className={styles.infoAnchor} href={`mailto:${email}`}>
            <span className={`${styles.emailIcon} ${styles.icon}`}>
              <AiOutlineMail />
            </span>
            <span className={styles.email}>
              {email}
            </span>
          </a>
        </div>
        <div className={`${styles.info} ${styles.addressDiv}`} >
            <span className={`${styles.addressIcon} ${styles.icon}`}>
              <IoLocationSharp />
            </span>
            <div className={styles.addressInfoGrid}>
              <span className={`${styles.street} ${styles.address}`}>{street}</span>
              <span className={`${styles.city} ${styles.address}`}>{city}</span>
              <span className={styles.break}></span>
              <span className={`${styles.province} ${styles.address}`}>{province}</span>
              <span className={`${styles.country} ${styles.address}`}>{country}</span>
            </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;