'use client'

import {  
  RiLinkedinFill, 
  RiGithubFill,  
  RiInstagramFill 
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: 'https://www.linkedin.com/in/roberthaynesza/',
    site: 'LinkedIn',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/robbiehaynes',
    site: 'GitHub',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.instagram.com/robbiehaynes/',
    site: 'Instagram',
    name: <RiInstagramFill />
  }
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=> {
        return <Link href={icon.path} target="_blank" key={index} aria-label={"View Rob's "+ icon.site + " profile"}>
        <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials