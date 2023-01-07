import GH from '../assets/github.svg'


const Footer = () => {
    return (
        <div className="bg-purple-600 text-[#e7e7e7]">
            <div className="mx-8 text-center py-16">
                <p className="font-medium mx-16">Living, learning, & leveling up one day at a time.</p>
                <div className='flex justify-center pt-10'>
                    <a className='border-[#e7e7e7] border-2 rounded-full mx-3 p-2 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="" target="_blank" rel="noopener noreferrer"><img src={GH} alt="" /></a>
                    <a className='border-[#e7e7e7] border-2 rounded-full mx-3 p-2 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="" target="_blank" rel="noopener noreferrer"><img src={GH} alt="" /></a>
                    <a className='border-[#e7e7e7] border-2 rounded-full mx-3 p-2 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="" target="_blank" rel="noopener noreferrer"><img src={GH} alt="" /></a>
                    <a className='border-[#e7e7e7] border-2 rounded-full mx-3 p-2 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="" target="_blank" rel="noopener noreferrer"><img src={GH} alt="" /></a>
                    <a className='border-[#e7e7e7] border-2 rounded-full mx-3 p-2 hover:bg-[#e7e7e7] ease-in-out transition duration-500' href="" target="_blank" rel="noopener noreferrer"><img src={GH} alt="" /></a>
                </div>
                <p className='py-4 mt-6 text-sm font-eubold tracking-wider'>Handcrafted by me &copy; twentytwentytwo</p>
            </div>
        </div>
    )
}

export default Footer