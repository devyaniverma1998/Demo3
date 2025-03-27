
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Image from "next/image";
import Hero from './pages/hero/page';
import AboutUs from './about/page';
import Service from './service/page';
import Appointment from './appointment/page';
import Team from './pages/team/page';
import Price from './price/page';
import YoutubeVideo from './pages/youtubevideo/page';
import Testimonial from './pages/testimonial/page';
import Contact from './contact/page';


export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <Appointment />
      <Team />
      <Price/>
      <YoutubeVideo />
      <Testimonial />
 
        <Contact/>

    </>
  );
}
