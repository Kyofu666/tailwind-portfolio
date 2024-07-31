import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='bg-emerald-100 py-24 '>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-7xl font-bold tracking-wider'>
                        I'm Wilems
                    </h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                        Front-End Developer
                    </p>
                    <p className='mt-3 text-lg text-slate-700 capitalize tracking-wide'>
                        Transforming concepts into engaging web interfaces.
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href="https://github.com/Kyofu666" target='_blank'>
                            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href="https://www.linkedin.com/in/wilems-rospide-08a3ba23b/" target='_blank'>
                            <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href="https://x.com/wily_coding?s=21&t=5s4gt0w4FY1JzRhxbByerA" target='_blank'>
                            <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                    </div>
                </article>

                <article className='hidden md:block'>
                    <img src={heroImg} alt="" className='h-80 lg:h-96' />
                </article>
            </div>
        </div>
    )
}

export default Hero
