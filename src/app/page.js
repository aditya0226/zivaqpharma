'use client'
import { useQuery } from '@tanstack/react-query';
import image1 from '../images/image1.png';
import Image from 'next/image';

const config = require('../../next.config.mjs');

const Users = () => {

  const officeArray = [
    {
      location: 'New Jersey, United States',
      // hash: '#1',
      address: "One Tower Center Blvd, Suite 1510, East Brunswick, New Jersey, United States – 08816",
      email: 'info@zivaqpharma.com',
      // countryCode: '+1',
      // tel: '4844560012',
      mapLink: "https://goo.gl/maps/xG1dL8i9iyBUQy8i7",
    }
  ]

  return (
    <div className='mx-auto p-4'>
      <img className='mb-3' src={`${config.basePath}/images/image1.png`}  alt="image" />
      <div className='mb-4'>
      <h2 className='text-primary text-3xl mb-3'>About Us - ZivaQ Pharmaceutical Inc</h2>
      <p className='text-lg mb-2'>At ZivaQ Pharmaceutical Inc, our mission is simple yet profound: to advance healthcare and enhance lives globally through innovative, affordable, and high-quality pharmaceutical solutions. Rooted in science and driven by purpose, we are committed to addressing some of the world’s most pressing health challenges by providing access to effective medications that improve patient outcomes.</p>
      <h2 className='text-primary text-3xl mb-3'>Who We Are</h2>
      <p className='text-lg mb-2'>Established with a vision to become a trusted global healthcare partner, ZivaQ Pharmaceutical Inc is a research-driven pharmaceutical company based in the heart of New Jersey. </p>
      <p className='text-lg mb-2'>From this strategic location, we manage a wide spectrum of pharmaceutical operations including product development, regulatory affairs, marketing, global partnerships, and customer service.</p>
      <h2 className='text-primary text-3xl mb-3'>What We Do</h2>
      <p className='text-lg mb-2'>ZivaQ specializes in the development, manufacturing, and marketing of a comprehensive range of pharmaceutical products — including generic formulations, branded generics, nutraceuticals, and specialty drugs. Our therapeutic expertise spans across key segments such as cardiology, neurology, gastroenterology, dermatology, anti-infectives, and more. </p>
      <p className='text-lg mb-2'>We also provide contract manufacturing and private labeling services to global clients, ensuring regulatory compliance and unmatched quality at every stage of the production cycle.</p>
      <h2 className='text-primary text-3xl mb-3'>Our Commitment to Quality</h2>
      <p className='text-lg mb-2'>At the core of our operations is an unyielding commitment to quality, compliance, and ethical business practices. All our manufacturing partners operate under stringent international standards, including USFDA, WHO-GMP, and ISO certifications. We follow robust quality control protocols to ensure that every product bearing the ZivaQ name is safe, effective, and trustworthy.</p>
      <h2 className='text-primary text-3xl mb-3'>Global Presence, Local Impact</h2>
      <p className='text-lg mb-2'>Though proudly based in the United States, ZivaQ has a growing international footprint. We collaborate with global distributors, healthcare professionals, and regulatory bodies to ensure that our products reach the people who need them most — whether in developed healthcare markets or underserved regions.</p>
      <h2 className='text-primary text-3xl mb-3'>Innovation & Research</h2>
      <p className='text-lg mb-2'>We believe that the future of healthcare lies in innovation. Our dedicated R&D partners continually explore new molecules, delivery systems, and treatment combinations to bring cutting-edge solutions to market. We invest in technologies that accelerate development while maintaining strict compliance with global regulatory frameworks.</p>
      <h2 className='text-primary text-3xl mb-3'>Our Vision</h2>
      <p className='text-lg mb-2'>To be recognized as a global leader in affordable and accessible healthcare, empowering lives through trust, transparency, and transformative science.</p>
      <h2 className='text-primary text-3xl mb-3'>Our Values</h2>
      <p className='text-lg mb-2'>Integrity in everything we do</p>
      <p className='text-lg mb-2'>Innovation as a constant pursuit</p>
      <p className='text-lg mb-2'>Compassion for patients and partners alike</p>
      <p className='text-lg mb-2'>Sustainability in growth and social responsibility</p>


      </div>
      <div className='mb-4'>
      <h2 className='text-primary text-3xl mb-3'>Contact Us - ZivaQ Pharmaceutical Inc</h2>
      <div className='row g-4 g-md-5'>
          {officeArray?.map((item, index) => {
            return (
              <div className='col-12 col-md-6' key={index}>
                <div >
                  <div >
                    <h4 >{item?.location}</h4>
                    {/* <h4 >{item?.hash}</h4> */}
                    <p >{item?.address}</p>
                    {item?.tel && <p>Tel: <a href={`tel:${item?.countryCode+item?.tel}`}>{item?.countryCode + " " + item?.tel}</a></p>}
                    {item?.email && <p >Email Us: <a href={`mailto:${item?.email}`}>{item?.email}</a></p>}
                    {/* <a target="_blank" rel="noreferrer" href={item?.mapLink}>Get Direction</a> */}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
