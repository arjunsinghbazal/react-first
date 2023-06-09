import React from "react";
import Header from "./Header";
import About from "./About";
import Details from "./Details";
import Footer from "./Footer";
function App() {
  return (
    <>
    <Header/>
    <About/>
    <Details head="Education" para="Another writing 
    challenge can be to take the individual 
    sentences in the random paragraph and 
    incorporate a single sentence from that 
    into a new paragraph to create a short 
    story. Unlike the random sentence generator, 
    the sentences from the random paragraph will 
    have some connection to one another so it will
     be a bit different. You also won't know exactly
      how many sentences will appear in
     the random paragraph."/>
    <Details head="Experience" para="Another writing 
    challenge can be to take the individual 
    sentences in the random paragraph and 
    incorporate a single sentence from that 
    into a new paragraph to create a short 
    story. Unlike the random sentence generator, 
    the sentences from the random paragraph will 
    have some connection to one another so it will
     be a bit different. You also won't know exactly
      how many sentences will appear in
     the random paragraph."/>
       <Details head="Skills" para="Another writing 
    challenge can be to take the individual 
    sentences in the random paragraph and 
    incorporate a single sentence from that 
    into a new paragraph to create a short 
    story. Unlike the random sentence generator, 
    the sentences from the random paragraph will 
    have some connection to one another so it will
     be a bit different. You also won't know exactly
      how many sentences will appear in
     the random paragraph."/>
     <Footer/>
    </>
  );
}

export default App;
