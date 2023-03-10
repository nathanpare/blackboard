import Head from 'next/head';
import Header from '@/components/Header';
import React from 'react';

import { motion } from "framer-motion";
import Image from 'next/image';
import { useRouter } from 'next/router';

const Services = () => {
  const router = useRouter();

  return (
    <div className='text-white h-screen snap-y snap-mandatory overflow-scroll'>
      <Head>
        <title>Blacksand</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id='service-1' className='snap-start h-screen flex flex-col
       items-center pt-28'>
        <div id='top' className='text-2xl sm:text-3xl md:text-4xl flex flex-row items-center mx-auto py-24'>
          <motion.div
            className='px-5 mx-auto'
            id='left-1'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>Website Design</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-1'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-4835519.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom' className='text-xl sm:text-2xl text-center px-5'>We offer expert level
          Website Design services to make your business stand out
          amongst the competition</p>

        <button onClick={() => router.push("/design")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Learn More</button>
      </section>

      <section id='service-2' className='snap-start h-screen flex flex-col
       items-center pt-28'>
        <div id='top' className='text-2xl sm:text-3xl md:text-4xl flex flex-row items-center mx-auto py-24'>
          <motion.div
            className='px-5 mx-auto'
            id='left-2'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>App Development</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-2'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-4993052.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom-2' className='text-xl sm:text-2xl text-center px-5'>We offer professional
          Mobile App Development services to put your million dollar idea on to the app store</p>

        <button onClick={() => router.push("/development")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Learn More</button>
      </section>

      <section id='service-3' className='snap-center h-screen flex flex-col 
       items-center pt-28'>
        <div id='top-2' className='text-2xl sm:text-3xl md:text-4xl flex flex-row items-center py-24'>
          <motion.div
            className='p-2 mx-auto mr-24'
            id='left-3'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>SEO</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-3'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-2617116.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom-3' className='text-xl sm:text-2xl text-center px-5'>We offer state of the art
          SEO services to help your business rise to the top of the search results</p>

        <button onClick={() => router.push("/seo")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Learn More</button>
      </section>

      <section id='service-4' className='snap-center h-screen flex flex-col 
       items-center pt-28'>
        <div id='top-3' className='text-2xl sm:text-3xl md:text-4xl flex flex-row items-center py-24'>
          <motion.div
            className='px-5 mx-auto mr-24'
            id='left-4'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
          >
            <h4>Internet Marketing</h4>
          </motion.div>

          <motion.div
            className='p-2 px-5 mx-auto'
            id='right-4'
            initial={{
              x: 0,
              opacity: 0,
              scale: 0.25
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 2
            }}
          >
            <Image src="/pngaaa.com-6283786.png" alt='' height={150} width={150} />
          </motion.div>
        </div>

        <p id='bottom-4' className='text-xl sm:text-2xl text-center px-5'>We offer Internet Marketing
          Services so you get seen by thousands of people across the web!</p>

        <button onClick={() => router.push("/marketing")} className='bg-[#F7AB0A] mt-5 py-2 px-8 sm:py-3 sm:px-10 rounded-md
           text-black font-bold text-lg'>Learn More</button>
      </section>
    </div>
  );
}

export default Services;
