import React from "react";
import Clinics from "../components/Clinics/Clinics";
import Hero from "../components/Hero/Hero";
import Meetups from "../components/Meetups/Meetups";

function Home({ userId }) {
  return (
    <div>
      <Hero />
      <Clinics userId={userId} />
      <Meetups userId={userId} />
    </div>
  );
}

export default Home;
