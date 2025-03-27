
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Image from "next/image";
import Hero from "@/pages/hero/page";
import Service from "@/pages/service/page";
import AboutUs from "@/pages/aboutus/page";
import Gallery from '@/pages/gallery/page';
import Appointment from '@/pages/appointment/page';
import Price from '@/pages/price/page';
import Testimonial from '@/pages/testimonial/page';
import ContactUs from '@/pages/contactus/page';
import YoutubeVideo from '@/pages/youtubevideo/page';
import Team from '@/pages/team/page';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Service />
      <Gallery />
      <Appointment />
      <Price />
      <YoutubeVideo />
      <Team/>
      <Testimonial />
      <ContactUs />

    </>
  );
}
