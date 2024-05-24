import arrow from '../../assets/images/arrow.png';
import coffeCup from '../../assets/images/banner.png';

const Hero = () => {
  return (
    
      <div className="hero min-h-full py-10">
          <div className="flex justify-center items-center max-w-[2520px] flex-col lg:flex-row-reverse gap-56">

          <img src={coffeCup} className="rounded-lg" />

          <div className='max-w-[620px]'>
            <h1 className="text-[80px] font-extrabold font-manrope">It's good tea time at Tea House</h1>
            <p className="py-6">Provident cupiditate voluptatem et in.      Quaerat fugiat ut assumenda excepturi exercitationem quasi.     In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary font-bold text-lg">Explore More <span><img src={arrow} alt="" /></span></button>
          </div>

        </div>
      </div>
    
  )
}

export default Hero