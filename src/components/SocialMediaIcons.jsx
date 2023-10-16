

const SocialMediaIcons = ()=>{
    return(
        <div className="flex justify-center md:justify-start my-10 gap-0">
            <a 
            className="ml-16 hover:opacity:50 transition duration-500"
            href = "https://www.linkedin.com/in/yashika-uvaraj-5381161a3/"
            target = "_blank"
            rel ="noreferrer">
                <img alt = "linkedin-link" src = "../assets/linkedin.png"/>
            </a>
            <a 
            className="ml-16 hover:opacity:50 transition duration-500"
            href = "https://github.com/Yashika24-U"
            target = "_blank"
            rel ="noreferrer">
                {/* <img alt = "github-link" src = "../assets/g.png" height = "30px" width= "30px" style={{backgroundColor:"deep-blue"}} /> */}
                        <img alt="github-link" src="../assets/g.png" height="30px" width="30px"  style={{
                            backgroundColor:"deep-blue",
                            border: "2px solid white", 
                            borderRadius: 5 
        }}/>
        </a>
        
        
        
        
        

            
           

        </div>

    )
}

export default SocialMediaIcons
