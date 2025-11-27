import Banner from "@/components/Banner";
import StayConnected from "@/components/StayConnected";
import Feature from "@/components/Feature";
import Image from "next/image";
import MarqueeP from "@/components/MarqueeP";
import Client from "@/components/Client";
import Examples from "@/components/HomeComponents/Examples";
import FeaturedCollection from "@/components/HomeComponents/FeaturedCollection";

export default function Home() {
  return (
    <div>
      <Banner />
      <MarqueeP />
      <Client />
      <Feature />
      <FeaturedCollection/>
      <Examples />
      <StayConnected />
    </div>
  );
}
