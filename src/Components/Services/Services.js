import React from 'react'
import "./Services.css"

import Img from "../assets/service-1.svg";

import Img2 from "../assets/service-2.svg"


import Img3 from "../assets/service-3.svg"

const Data = [
  {
    id: 1,
    category: "education",
    icon: "icon-graduation",
    year: "2019 - present",
    title: "Academic Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 2,
    category: "education",
    icon: "icon-graduation",
    year: "2013 - 2017",
    title: "Bachelor's Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 3,
    category: "education",
    icon: "icon-graduation",
    year: "2009 - 2013",
    title: "Honours Degree",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 4,
    category: "experience",
    icon: "icon-briefcase",
    year: "2019 - present",
    title: "Web Designer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 5,
    category: "experience",
    icon: "icon-briefcase",
    year: "2013 - 2017",
    title: "Front-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
  {
    id: 6,
    category: "experience",
    icon: "icon-briefcase",
    year: "2009 - 2013",
    title: "Back-End Developer",
    desc: "Lorem ipsum dolor sit amet quo ei simul congue exerci     ad nec admodum perfecto.",
  },
];

const Services = () => {
  return (
    <section className='services container section' id='services'>

      <h2 className="section_title">
              Services
      </h2>
    </section>
  )
}

export default Services