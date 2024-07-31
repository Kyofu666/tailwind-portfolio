import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';


const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} alt="" className='w-full h-64' />
                <article className=''>
                    <SectionTitle text={'About Me'} />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Passionate and enthusiastic junior front-end developer with a deep love for coding. Fascinated by the beauty and control coding offers over creating dynamic and interactive web experiences.
                        Eager to contribute my skills in HTML, CSS, and JavaScript to a collaborative team, continuously learn, and grow in the field of web development. Proficient in ReactJS, responsive design, and API integration, with a strong commitment to delivering high-quality code and user-friendly interfaces.
                    </p>
                </article>
            </div>

        </section>
    )
}

export default About
