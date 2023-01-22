const gh = 'github.svg'
const lnk = 'linkedin.svg'
const twi = 'twitter.svg'
const ins = 'insta.svg'

const date = new Date()

const Footer = () => {
    return (
        <div className="bg-purple-600 text-[#e7e7e7]">
            <div className="mx-8 text-center py-16">
                <p className="font-medium mx-16">Living, learning, & leveling up one day at a time.</p>
                <div className='flex justify-center pt-10'>
                    <a className='rounded-full mx-3 p-1 lg:scale-150 lg:mx-8 md:scale-125 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="https://github.com/Himanshu2561" target="_blank"><img src={gh} alt="" /></a>
                    <a className='rounded-full mx-3 p-1 lg:scale-150 lg:mx-8 md:scale-125 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="https://www.linkedin.com/in/himanshurathore2561/" target="_blank"><img src={lnk} alt="" /></a>
                    <a className='rounded-full mx-3 p-1 lg:scale-150 lg:mx-8 md:scale-125 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="https://twitter.com/Himanshu25061" target="_blank"><img src={twi} alt="" /></a>
                    <a className='rounded-full mx-3 p-1 lg:scale-150 lg:mx-8 md:scale-125 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="https://www.instagram.com/_mr_rathore_25/" target="_blank"><img src={ins} alt="" /></a>
                </div>
                <p className='py-4 mt-6 text-sm font-eubold tracking-wider'>Handcrafted with &#10084; by me &copy; {date.getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer