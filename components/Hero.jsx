import Logo from './Logo';
import React, { useState } from "react";
import DropboxChooser from 'react-dropbox-chooser'

const APP_KEY="dqr2u5twivdlzzv"

export default function App() {
  const [url,setUrl] = useState("")
  function handleSuccess(files){
    setUrl(files[0].thumbnailLink)
    console.log(url)
  }
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Upload Or Choose Files to DropBox</h1>
      <br/><br/>
    <div className="container">
      <DropboxChooser appKey={APP_KEY}
                      success={handleSuccess}
                      cancel={() => console.log('closed')}
                      multiselect={true}
                      >
        <button>Upload or Choose Files</button>
        <div className="dropbox"></div>
        <br/><br/>
        <img src={url} width="200" height="200" alt=""/>
      </DropboxChooser>
    
    </div>
    </div>
  );
}

// const Hero = () => (
//   <div className="hero my-5 text-center" data-testid="hero">
//     <Logo testId="hero-logo" />
//     <h1 className="mb-4" data-testid="hero-title">
//       Next.js Sample Project
//     </h1>

//     <p className="lead" data-testid="hero-lead">
//       This is a sample application that demonstrates an authentication flow for a Regular Web App, using{' '}
//       <a href="https://nextjs.org">Next.js</a>
//     </p>
//   </div>
// );

// export default Hero;
