import React from 'react'
import Image from "next/image"
import microsoft from "../images/mfsfh.png"
import polygon from "../images/polygon.png"
import filecoin from "../images/filecoin.png"
import chainlink from "../images/chainlink.jpg"
function PartnerSection() {
  return (
    <div className='flex items-center justify-around lg:flex-nowrap flex-wrap px-10'>
        <div><a href='https://polygon.technology/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={polygon}/></a></div>
        <div><a href='https://filecoin.io/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={filecoin}/></a></div>
        <div><a href='https://chain.link/' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={chainlink}/></a></div>
        <div><a href='https://www.microsoft.com/en-us/startups' className="link link-hover" target={'_blank'} rel="noreferrer"><Image src={microsoft}/></a></div>
    </div>
    
  )
}

export default PartnerSection