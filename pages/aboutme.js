import React, { useState } from 'react';
import Head from 'next/head';


export default function aboutme() {
  return (
    <>
        <>
          <Head>
            <title>About Me</title>
          </Head>
          <a href="/home">
            <button class="back">
              Back Home
            </button>
          </a>
          <h1 className="headtext">About Me</h1>
          <p class="parrafo">My name is Alex and I am a software engineer. I am also the Founder and CEO of Shape Records, a small record label. </p>
          <p class="parrafo">I have experience in various programming languages such as JavaScript, Python, and Java.</p>
          <p class="parrafo">I enjoy building web applications and solving complex problems.</p>
        </>
      
    </>
  )
}
