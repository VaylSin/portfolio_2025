import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi';

const Home = () => {

return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left">
          <span className="text-xl">Dévéloppeur Web Freelance</span>
          <h1 className="h1 mb-6">Bonjour, je suis <br /><span className="text-accent">Sylvain Butet</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80">Basé en Ardèche, j'accompagne mes clients dans la création de
            projets web sur-mesure</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Télecharger mon CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        <div>Photo</div>
      </div>
    </div>
  </section>
);
}
export default Home;