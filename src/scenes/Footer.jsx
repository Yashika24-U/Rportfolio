import SocialMediaIcons from "../components/SocialMediaIcons";

import React from 'react'

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">

        <div className="w-5/6 mx-auto">
            <SocialMediaIcons/>
            <div className="md:flex justify-cenetr md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow">Yashika Reddy</p>
                <p className="font-playfair text-md text-yellow">©️2023 Yashika. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer