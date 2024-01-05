// import SocialMediaIcons from "../components/SocialMediaIcons";

// import React from 'react'

// const Footer = () => {
//   return (
//     <footer className="h-64 bg-red pt-10">

//         <div className="w-5/6 mx-auto">
//             <SocialMediaIcons/>
//             <div className="md:flex justify-cenetr md:justify-between text-center">
//                 <p className="font-playfair font-semibold text-2xl text-yellow">Yashika Reddy</p>
//                 <p className="font-playfair text-md text-yellow">©️2023 Yashika. All Rights Reserved</p>
//             </div>
//         </div>
//     </footer>
//   )
// }

// export default Footer


















import SocialMediaIcons from "../components/SocialMediaIcons";
import React from 'react';

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto text-center">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between mt-5">
          <div className="md:w-1/2 md:text-left">
            <p className="font-playfair font-semibold text-2xl text-yellow">Yashika Reddy</p>
          </div>
          <div className="md:w-1/2 md:text-right">
            <p className="font-playfair text-md text-yellow">©️2023 Yashika. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
