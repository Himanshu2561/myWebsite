const avt = 'Avtar.svg'
const dev = 'Devices.svg'

const Hero = () => {
    return (
        <div className="mx-8 my-5 mt-10 text-center">
            <h1 className="font-eubold text-[1.8rem] m-2">Designer, Frontend Developer</h1>
            <p className="lg:text-lg">I design and code beautifully simple things, and I love what I do.</p>

            <div className='my-10'>
                <img className="mx-auto scale-75 drop-shadow-xl lg:scale-100" src={avt} alt="img" />
            </div>

            <div className='mt-20'>
                <img className="mx-auto" src={dev} alt="" />
            </div>
        </div>
    )
}

export default Hero