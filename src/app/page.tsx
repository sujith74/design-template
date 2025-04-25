
// pages/index.js
'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Container, Typography, IconButton, Box} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import {
  ArrowForward, Favorite, School, LocalHospital, Restaurant
} from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import Grid from '@mui/material/Grid';


export default function Home() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const initiatives = [
    {
      icon: <LocalHospital className="text-4xl text-amber-600" />,
      title: "Improving Health",
      description: "Creating a healthier life for the young members of our society.",
      color: "blue"
    },
    {
      icon: <Restaurant className="text-4xl text-amber-600" />,
      title: "Food Banks",
      description: "Providing essential food support to underprivileged families.",
      color: "indigo"
    },
    {
      icon: <School className="text-4xl text-amber-600" />,
      title: "Education For All",
      description: "Providing quality education to needy children in underserved areas.",
      color: "teal"
    },
    {
      icon: <LocalHospital className="text-4xl text-amber-600" />,
      title: "Medical Camps",
      description: "Free health checkups and treatments for children in rural areas.",
      color: "purple"
    },
    {
      icon: <Restaurant className="text-4xl text-amber-600" />,
      title: "Nutrition Programs",
      description: "Ensuring proper nutrition for growing children.",
      color: "pink"
    },
    {
      icon: <School className="text-4xl text-amber-600" />,
      title: "Digital Learning",
      description: "Bringing technology education to remote villages.",
      color: "green"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
    // const tracks = [
    //   {
    //     image:
    //       "https://cdn.pixabay.com/photo/2022/12/01/12/26/countryside-7629017_1280.jpg",
    //     title: "Immersion",
    //   },
    //   {
    //     image:
    //       "https://cdn.pixabay.com/photo/2014/09/26/09/33/girls-462072_1280.jpg",
    //     title: "Learning",
    //   },
    //   {
    //     image:
    //       "https://cdn.pixabay.com/photo/2017/08/01/12/04/girls-2564803_1280.jpg",
    //     title: "Impact",
    //   },
    // ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const slides = [
      {
        title: "Let's teach them better,",
        highlight: "the world will be better",
        subtitle: "Providing Nutritious Food To Needy Ones",
        image: "https://cdn.pixabay.com/photo/2022/02/12/13/29/desert-7008952_1280.jpg",
        cta1: "Learn More",
        cta2: "Our Initiatives"
      },
      {
        title: "Education is the key,",
        highlight: "to a brighter future",
        subtitle: "Building Schools in Underserved Communities",
        image: "https://cdn.pixabay.com/photo/2016/11/14/03/46/girl-1822525_1280.jpg",
        cta1: "Donate Now",
        cta2: "See Impact"
      },
      {
        title: "Clean water changes",
        highlight: "everything",
        subtitle: "Providing Access to Safe Drinking Water",
        image: "https://cdn.pixabay.com/photo/2019/12/18/13/56/glasses-4704055_1280.jpg",
        cta1: "Support Us",
        cta2: "Our Projects"
      }
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }, [slides.length]);
  
    const variants = {
      enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }),
      center: {
        x: 0,
        opacity: 1
      },
      exit: (direction: number) => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0
      })
    };
  


  return (
    <div>
      <Head>
        <title>Joyful Minds - Providing Nutritious Food To Needy Ones</title>
        <meta name="description" content="Joyful Minds Charity Organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 text-sm">
  <Container maxWidth="xl">
    <div className="flex justify-between items-center flex-wrap">
      <div className="flex space-x-4 mb-4 md:mb-0">
        <span className="flex items-center">
          <Email className="mr-1" fontSize="small" />
          help@joyfulminds.com
        </span>
        <span className="flex items-center">
          <Phone className="mr-1" fontSize="small" />
          +1 800 785 6748
        </span>
      </div>
      <div className="flex space-x-4">
        <Button 
          variant="text" 
          className="text-white hover:bg-white/10"
          startIcon={<Favorite />}
        >
          My Account
        </Button>
        <Button 
          variant="contained" 
          className="bg-white text-amber-700 hover:bg-gray-100 shadow-md"
        >
          Register
        </Button>
      </div>
    </div>
  </Container>
</div>


      {/* Main Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-md py-4 sticky top-0 z-50 shadow-sm"
      >
        <Container maxWidth="xl">
          <div className="flex justify-between items-center">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <Image 
                src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful Minds logo v4.png" 
                alt="Joyful Minds Logo" 
                width={180} 
                height={60} 
              />
            </motion.div>
            
            <nav className="hidden lg:flex space-x-8">
  {['ABOUT US', 'OUR INITIATIVES', 'LOG IN', 'REPORT', 'CONTACT US'].map((item) => {
    // Define the link for each item
    let href = "#";
    switch (item) {
      case 'ABOUT US':
        href = 'https://about-us-two-indol.vercel.app/';
        break;
      case 'OUR INITIATIVES':
        href = 'https://program-page-pearl.vercel.app/';
        break;
      case 'LOG IN':
        href = 'https://login-page-henna.vercel.app/';
        break;
      case 'REPORT':
        href = 'https://report-form-template.vercel.app/';
        break;
      case 'CONTACT US':
        href = 'https://contact-us-form-tau.vercel.app/';
        break;
    }

    return (
      <motion.a 
        key={item}
        href={href}
        className="text-gray-800 hover:text-amber-600 font-medium relative group"
        whileHover={{ y: -2 }}
      >
        {item}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
      </motion.a>
    );
  })}
</nav>

            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="contained" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-full shadow-lg"
                startIcon={<Favorite />}
                onClick={() => window.location.href = 'https://campaign-template-2.vercel.app/'}
              >
                DONATE NOW
              </Button>
            </motion.div>
          </div>
        </Container>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-white overflow-hidden">
  <Container maxWidth="xl" className="relative z-10 h-full px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-20 lg:py-28">
      {/* Left content */}
      <div className="relative h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <AnimatePresence mode="wait" custom={1}>
          <motion.div
            key={currentSlide}
            custom={1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="relative w-full"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Typography 
                variant="h2" 
                className="!font-bold text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight !mb-4"
              >
                {slides[currentSlide].title}<br />
                <span className="text-amber-600">{slides[currentSlide].highlight}</span>
              </Typography>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Typography variant="h5" className="text-gray-600 !mb-6 text-base sm:text-lg md:text-xl">
                {slides[currentSlide].subtitle}
              </Typography>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button 
                variant="contained" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg text-sm sm:text-base"
              >
                {slides[currentSlide].cta1}
              </Button>
              <Button 
                variant="outlined" 
                className="border-2 border-gray-800 text-gray-800 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base"
              >
                {slides[currentSlide].cta2}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="flex gap-2 mt-6 lg:mt-10 justify-center lg:justify-start">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-amber-600 w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Right image for desktop */}
      <div className="hidden lg:flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-lg"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl transform rotate-2 opacity-20"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
              <Image 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].subtitle}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  </Container>

  {/* Mobile image */}
  <div className="lg:hidden relative h-64 sm:h-80 w-full">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10"></div>
        <Image 
          src={slides[currentSlide].image}
          alt={slides[currentSlide].subtitle}
          fill
          className="object-cover"
        />
      </motion.div>
    </AnimatePresence>
  </div>

  {/* Decorative Floating Blobs */}
  <motion.div 
    className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-amber-400/20 blur-xl"
    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div 
    className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-amber-600/10 blur-xl"
    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
  />
</section>


      {/* Services Section */}
      <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" mb-12"
        >
          <Typography variant="h4" className="!font-bold !mb-4  text-gray-800 text-center">
            Our <span className="text-amber-600">Initiatives</span>
          </Typography>
          <Typography variant="body1" className="text-gray-600 mx-auto text-center ">
            We work across multiple areas to create sustainable change in children&apos;s lives
          </Typography>
        </motion.div>

        <Slider {...settings} className="initiative-slider pb-10">
          {initiatives.map((initiative, index) => (
            <div key={index} className="px-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl h-full flex flex-col items-center text-center border border-gray-100 hover:border-amber-300 transition-all shadow-sm hover:shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`relative bg-${initiative.color}-100/20 w-16 h-16 rounded-full flex items-center justify-center mb-5 border-2 border-${initiative.color}-200 group-hover:scale-110 transition-transform`}>
                  {initiative.icon}
                </div>
                <Typography variant="h6" className="font-bold text-gray-800 mb-3 relative z-10">
                  {initiative.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-5 relative z-10">
                  {initiative.description}
                </Typography>
                <Button
  variant="text"
  className={`text-${initiative.color}-600 hover:bg-${initiative.color}-50 font-medium relative z-10`}
  endIcon={<ArrowForward className="group-hover:translate-x-1 transition-transform" />}
  onClick={() => window.location.href = 'https://program-page-pearl.vercel.app/'}
>
  Learn More
</Button>

              </motion.div>
            </div>
          ))}
        </Slider>

        <style jsx global>{`
          .initiative-slider .slick-dots {
            bottom: 0;
          }
          .initiative-slider .slick-dots li button:before {
            color: #D97706;
          }
          .initiative-slider .slick-dots li.slick-active button:before {
            color: #D97706;
          }
          .initiative-slider .slick-prev:before,
          .initiative-slider .slick-next:before {
            color: #D97706;
          }
        `}</style>
      </div>
    </section>

      {/* About Section */}
      <section className="py-20 bg-amber-50" id="about">
        <Container maxWidth="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center !mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Typography variant="h4" className="!font-bold text-gray-700 !mb-4">
                About <span className="text-amber-600">Joyful Minds</span>
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="flex justify-center">
                <div className="border-b-2 border-amber-600 w-24"></div>
              </div>
            </motion.div>
          </motion.div>
          
          <Box className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* Left Image Section */}
      <Box className="w-full lg:w-1/2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_1280.jpg"
              alt="Joyful Minds children"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </Box>

      {/* Right Text Section */}
      <Box className="w-full lg:w-1/2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <Typography variant="body1" className="text-gray-700 !mb-6 text-lg">
              At Joyful Minds, we firmly believe in the unique and inherent potential of every child...
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="body1" className="text-gray-700 !mb-8 text-lg">
              Our organization is wholeheartedly dedicated to brightening the lives...
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h6" className="text-amber-600 !font-bold text-lg">
              We are Joyful.
            </Typography>
          </motion.div>
        </motion.div>
      </Box>

    </Box>
        </Container>
      </section>

      {/* Engagement Tracks */}
       {/* <section className="py-20 bg-white">
      <Container maxWidth="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <Typography variant="h4" className="font-bold mb-4 text-gray-700">
              Engagement <span className="text-amber-600">Tracks</span>
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="flex justify-center">
              <div className="border-b-2 border-amber-600 w-24"></div>
            </div>
          </motion.div>
        </motion.div>

        <Grid container spacing={8} className="mb-8">
          {tracks.map((track, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg h-64"
              >
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                  <Typography variant="h4" className="font-bold text-white">
                    {track.title}
                  </Typography>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outlined"
            className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full"
            endIcon={<ArrowForward />}
          >
            Learn More
          </Button>
        </motion.div>
      </Container>
    </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <Container maxWidth="xl" className="text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Typography variant="h3" className="!font-bold !mb-6">
                Ready to Make a <span className="text-gray-900">Difference</span>?
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Typography variant="body1" className="text-amber-100 !mb-8 mx-auto text-lg">
                Join us in our mission to create a better world for children in need.
              </Typography>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="contained" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full shadow-lg text-lg"
                startIcon={<Favorite />}
                onClick={() => window.location.href = 'https://campaign-template-2.vercel.app/'}
              >
                DONATE NOW
              </Button>
              <Button 
                variant="outlined" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg"
              >
                BECOME VOLUNTEER
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Featured In Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center !mb-12">
            <h2 className="text-3xl !font-bold !mb-4 text-gray-700">As Featured In</h2>
          </div>
          
          <div className="relative">
            <div className="flex justify-center items-center space-x-12">
              <div className="grayscale hover:grayscale-0 transition-all">
                <Image src="https://cdn.pixabay.com/photo/2017/11/13/21/54/abut-2946939_1280.jpg" alt="Economic Times" width={120} height={60} />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <Image src="https://cdn.pixabay.com/photo/2019/07/15/15/31/cork-4339638_1280.jpg" alt="The Times of India" width={120} height={60} />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <Image src="https://cdn.pixabay.com/photo/2017/07/13/08/12/shaking-hands-2499629_1280.jpg" alt="OOH Media" width={120} height={60} />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <Image src="https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_1280.jpg" alt="History" width={120} height={60} />
              </div>
            </div>
            
            <IconButton className="absolute right-0 top-1/2 transform -translate-y-1/2" aria-label="next">
              <ChevronRightIcon />
            </IconButton>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <Container>
          <div className="text-center !mb-12">
            <h2 className="text-3xl !font-bold !mb-4">What the world thinks about us</h2>
          </div>
          
          <div className="relative max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <FormatQuoteIcon className="text-yellow-500 text-4xl !mb-4" />
            <Typography variant="body1" className="text-gray-700 !mb-6 italic">
            &quot;Joyful Minds is doing a fantastic job in the field of education, our school children got to know so many things during this program.&quot;
            </Typography>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                <Image src="https://cdn.pixabay.com/photo/2021/10/14/03/26/pastor-6708005_1280.jpg" alt="Alisha Bora" width={48} height={48} />
              </div>
              <div>
                <Typography variant="subtitle1" className="!font-bold">Alisha Bora</Typography>
                <Typography variant="body2" className="text-gray-600">Principal, Sun Harmony School</Typography>
              </div>
            </div>
            
            <IconButton className="absolute right-4 bottom-4" aria-label="next">
              <ChevronRightIcon />
            </IconButton>
          </div>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center !mb-12">
            <h2 className="text-3xl !font-bold !mb-4 text-gray-700">Our Partners</h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image src="https://cdn.pixabay.com/photo/2020/04/19/13/37/place-du-tertre-5063622_1280.jpg" alt="Stonehill" width={120} height={60} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image src="https://cdn.pixabay.com/photo/2019/11/09/06/03/handshake-4612930_1280.jpg" alt="Green Life" width={120} height={60} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image src="https://cdn.pixabay.com/photo/2016/03/22/22/45/ferris-wheel-1273841_1280.jpg" alt="Shivam Foundation" width={120} height={60} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all">
              <Image src="https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_1280.jpg" alt="Educare" width={120} height={60} />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <Container>
          <div className="text-center !mb-8">
            <h2 className="text-3xl !font-bold !mb-2">Want to be a changemaker?</h2>
            <p className="text-gray-300">You can become a changemaker by starting a campaign for this organization.</p>
          </div>
          
          <div className="flex justify-center !mb-12">
            <Button 
              variant="contained" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black !font-bold px-6 py-2 rounded-md"
            >
              START A CAMPAIGN
            </Button>
          </div>
          
          <Box className="flex flex-col lg:flex-row items-center gap-16">
      
    </Box>
            </Container>
            </section>

            <footer className="bg-gray-900 text-white pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 !mb-12">
            <div>
              <div className="!mb-6">
                <Image src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful Minds logo v4.png" alt="Joyful Minds Logo" width={150} height={50} />
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-teal-500 rounded-full mr-2"></span>
                  JP&apos;s Charity Team
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-teal-500 rounded-full mr-2"></span>
                  17/235, Sunshine Avenue
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-teal-500 rounded-full mr-2"></span>
                  New Delhi, 110001
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 bg-teal-500 rounded-full mr-2"></span>
                  info@joyfulminds.com
                </li>
              </ul>
              <div className="flex space-x-4 mt-6">
                <IconButton className="text-white hover:text-teal-500">
                  <FacebookIcon />
                </IconButton>
                <IconButton className="text-white hover:text-teal-500">
                  <TwitterIcon />
                </IconButton>
                <IconButton className="text-white hover:text-teal-500">
                  <InstagramIcon />
                </IconButton>
                <IconButton className="text-white hover:text-teal-500">
                  <LinkedInIcon />
                </IconButton>
                <IconButton className="text-white hover:text-teal-500">
                  <YouTubeIcon />
                </IconButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl !font-bold !mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-teal-500">About Us</a></li>
                <li><a href="#" className="hover:text-teal-500">Causes</a></li>
                <li><a href="#" className="hover:text-teal-500">Events</a></li>
                <li><a href="#" className="hover:text-teal-500">Blog</a></li>
                <li><a href="#" className="hover:text-teal-500">FAQ</a></li>
                <li><a href="#" className="hover:text-teal-500">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl !font-bold !mb-6">Recent Campaigns</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-teal-500">Education Drives for Rural Children</a></li>
                <li><a href="#" className="hover:text-teal-500">Health Camps for Community Well-being</a></li>
                <li><a href="#" className="hover:text-teal-500">Empowering Women Through Vocational Skills</a></li>
                <li><a href="#" className="hover:text-teal-500">Supporting the underprivileged education</a></li>
              
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Joyful Minds. 100% Secure Payments</p>
            <div className="flex justify-center space-x-2 mt-4">
              <Image src="/payment-visa.png" alt="Visa" width={40} height={25} />
              <Image src="/payment-mastercard.png" alt="Mastercard" width={40} height={25} />
              <Image src="/payment-amex.png" alt="American Express" width={40} height={25} />
              <Image src="/payment-paypal.png" alt="PayPal" width={40} height={25} />
              <Image src="/payment-gpay.png" alt="Google Pay" width={40} height={25} />
            </div>
            <div className="mt-4">
              <span className="mx-2"><a href="#" className="hover:text-teal-500">Privacy Policy</a></span> | 
              <span className="mx-2"><a href="#" className="hover:text-teal-500">Terms of Use</a></span> | 
              <span className="mx-2">Powered by <a href="#" className="text-teal-500 hover:underline">CharityBuddy</a></span>
            </div>
          </div>
        </Container>
      </footer>  
      </div>
  );
}

