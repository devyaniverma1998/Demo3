import Home1 from "@/pages/hero/page";
import Home10 from "@/pages/contactus/page";
import Home2 from "@/pages/service/page";
import Home3 from "@/pages/aboutus/page";
import Home4 from "@/pages/youtubevideo/page";
import Home5 from "@/pages/appointment/page";
import Home6 from "@/pages/gallery/page";
import Home7 from "@/pages/price/page";
import Home8 from "@/pages/team/page";
import Home9 from "@/pages/testimonial/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      <Home7 />
      <Home8 />
      <Home9 />
      <Home10 />
    </>
  );
}
