import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';


  const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between h-screen">
      {/* Left Section */}
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/* Tag */}
        <div  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2250" 
        className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(225,225,0.4)] rounded-full">
          <div 
          className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond"></i>
            INTRO
          </div>
        </div>

        {/* Heading */}
        <h1  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000" 
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Ajay K
          <br />
          Front-End Developer
        </h1>

        {/* Description */}
        <p  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1750" 
        className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Learning. Building. Growing...
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <a  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="https://www.linkedin.com/in/ajay-k-258b8528b/"
          >
            Linked-IN <i className="bx bx-link-external"></i>
          </a>
          <a  data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="https://github.com/ajay21k"
          >
            Git Hub <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      {/* 3D Spline */}
<Spline data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/rdoBT1cS1atsBOe5/scene.splinecode" />


    </main>
  );
};


export default Hero
