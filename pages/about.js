import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEnvelope, faEarthAmerica, faSliders, faComment,faDatabase,faServer } from "@fortawesome/free-solid-svg-icons";
import MobileNav from "../components/MobileNav";
import { faHtml5, faCss3, faCss3Alt,faJs,faNodeJs,faPython, faBootstrap,faPhp} from '@fortawesome/free-brands-svg-icons'

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import teslim from "../images/teslim.jpg";

import Navbar from "../components/Navbar";

const about = () => {
  return (
    <div>
      <Head>
        <title>Teslim Jimoh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileNav />
      <Navbar />

    

      <div
        className="w-full flex flex-col  justify-center  bg-[#edeced] text-[black] "

      >
        <div className="flex justify-center  w-full  lg:w-9/12 mx-auto py-6 ">
          <h1 className="w-auto  text-2xl pt-[4rem] text-center">Services</h1>
          <hr className=" w-7/12 ml-4"></hr>
        </div>

        <div className=" w-10/12 md:w-6/12 mx-auto flex flex-col my-4 gap-4 " >
          <h2  className="flex justify-start  text-2xl text-[blue]  font-black text-center" >What Can I Do For You?</h2>
          <p className="text-justify w-full px-auto">
            I will help you design and develop fast and responsive websites and
            websites application at a very affordable price. I am open for
            collaboration with other developers to plan, design and develop life
            changing software. I am an experienced IT Instructor that is willing
            to help you navigate the world of IT. I am also available as a
            software tester prior to live deployment of your web application.
          </p>

          <div className="flex w-full gap-[4rem] pt-12 justify-center">
              <div className="flex flex-col items-center gap-3 ">
                  <FontAwesomeIcon icon={faEarthAmerica} width={25} />
                  <p>Web Development</p>
              </div>

            

              <div className="flex flex-col items-center gap-3 ">
                  <FontAwesomeIcon icon={faSliders} width={25} />
                  <p>Software Testing</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                  <FontAwesomeIcon icon={faComment} width={25} />
                  <p>Consultancy</p>
              </div>
          </div>
        </div>
      </div>

      <div
        className="w-full h-screen flex flex-col  justify-center bg-[#edeced] text-[black]  "
        id="resume"
      >
        <div className="flex items-center justify-center w-full mb-12 lg:w-9/12 mx-auto py-6">
          <h1 className="w-auto font-bold text-2xl text-[blue]">Skills</h1>
          <hr className=" w-7/12 ml-4"></hr>
        </div>

        <div className=" w-[auto] md:w-6/12 mx-auto flex flex-col my-4">
          {/* <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>NodeJs/ExpressJs</li>
          <li>PHP</li>
          <li>MongoDB</li>
          <li>Python/Django</li>
          <li>MySQL</li>
          <li>Git/Github</li> */}

          

          <div className="flex w-full gap-[4rem] flex-wrap">
              <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faHtml5} width={25} />
          <p className="text-sm">HTML</p>
          </div>

          <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faCss3Alt} width={25} />
          <p className="text-sm">CSS</p>
          </div>

          <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faJs} width={25} />
          <p className="text-sm">JavaScript</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faBootstrap} width={25} />
          <p className="text-sm">Bootstrap</p>
          </div>

          <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faNodeJs} width={25} />
          <p className="text-sm">NodeJS /Express</p>
          </div>

          <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faPhp} width={25} />
          <p className="text-sm">PHP</p>
          </div>

          <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faDatabase} width={25} />
          <p className="text-sm">MongoDB /mySQL</p>
          </div>

          <div className="flex flex-col items-center gap-3">
          <FontAwesomeIcon icon={faPython} width={25} />
          <p className="text-sm">Python/Django</p>
          </div>

          <div className="flex flex-col items-center gap-3">
              <FontAwesomeIcon icon={faGithub} width={25} />
              <p className="text-sm">Git/Github</p>
          </div>


          </div>



        </div>
      </div>



      <div className=" w-10/12 md:w-6/12 mx-auto flex flex-col my-4 ">
      <div className="flex justify-start  w-full  lg:w-full mx-auto py-6 ">
          <h1 className="w-auto font-bold text-2xl text-[blue]">Work Experience</h1>
          
        </div>

        <div className="flex flex-col gap-2">
        <h2 className="font-bold text-xl ">
          Femtech Information Technology Institute, Ilorin
        </h2>
        <p className="text-xs">Dec 2020 - Present</p>
        <hr className="w-2/12"></hr>
  
        <li className="text-justify">
          Design, implement and maintain various backend technologies for the
          institute.
        </li>
        <li className="text-justify">
          Fix bugs and write clean reusable codes to improve the efficiency of
          existing applications.
        </li>
        <li className="text-justify">
          Supervise student&apos;s projects from development to production using
          technologies like JavaScript, PHP and NodeJS.
        </li>
        <li className="text-justify">
          Collaborate with other developers in building responsive and scalable
          web applications using technologies like PHP, Django and NodeJS.
        </li>
        <li className="text-justify">
          Create clear, engaging lessons to draw interest and develop students
          in Web Application Development.
        </li>
      </div>
      </div>

      <div className="w-10/12 md:w-6/12 mx-auto flex flex-col my-4 mt-6">
          <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Freelance</h2>
        <p>Feb 2020 - Present</p>
        <hr className="w-2/12"></hr>
      
        <li className="text-justify">
          I help clients transform their ideas into reality.
        </li>

        <li>Design websites based on clients specifications.</li>
      </div>
      </div>

      <div
        className="w-full  flex flex-col justify-center bg-[#edeced] text-[black]  my-6"
        id="contact"
      >
        <div className="flex items-center justify-start w-full mb-12 lg:w-6/12 mx-auto py-6 mt-[4rem]">
          <h1 className="w-auto font-bold text-2xl text-[blue]">Contact </h1>
          
        </div>

        <div className="w-6/12  m-[auto] h-auto flex flex-col mx-auto">
            <form>
                <div className="flex flex-col gap-2">
                    <input type="text" placeholder="Name" className="bg-[#edeced] border-b-[2px]  focus:border-[blue] w-full px-2 py-2 outline-none placeholder:text-black"></input>

                    <input type="text" placeholder="Email" className="bg-[#edeced] border-b-[2px]  focus:border-[blue] w-full px-2 py-2 outline-none placeholder:text-black"></input>

                    <input type="text" placeholder="Subject" className="bg-[#edeced] border-b-[2px]  focus:border-[blue] w-full px-2 py-2 outline-none placeholder:text-black"></input>
                    
                    <textarea placeholder="Message" className="h-24  border-b-[2px] focus:border-[blue] bg-[#edeced] resize-none px-2 pt-2 outline-none placeholder:text-black "></textarea>
                    </div>

                    <button className="h-auto py-2 px-4 mt-12 border-[2px]  outline-none w-full bg-black text-white">Submit</button>
            </form>
        </div>

   
      </div>

      

      <Footer />
    </div>
  );
};

export default about;
