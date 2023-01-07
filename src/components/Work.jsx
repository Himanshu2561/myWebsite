import BgWork from '../assets/images/bg-work.jpg'
import GH from '../assets/github.svg'

const data = [
  {
    id: 0,
    img: BgWork,
    text: 'Blogging Web Application, Developed with Cloud Firestore + React.JS',
    link: ''
  },
  {
    id: 1,
    img: BgWork,
    text: 'free text dascq vwevawdv ewfcwef fwefw fewfv wgfer wgfewf wgfwfg',
    link: ''
  },
  {
    id: 2,
    img: BgWork,
    text: 'free text dascq vwevawdv ewfcwef fwefw fewfv wgfer wgfewf wgfwfg',
    link: ''
  },
  {
    id: 3,
    img: BgWork,
    text: 'free text dascq vwevawdv ewfcwef fwefw fewfv wgfer wgfewf wgfwfg',
    link: ''
  }
]

const Cards = () => {
  return (
    <div className="mx-8">
      <div className="text-black text-center py-10">
        <p className="font-eubold text-lg">My Recent Work</p>
        <p className="py-5">Here are a few past design projects I've worked on. Want to see more? <a className="text-[#6e07f3]" href="mailto:himanshu.rathore2561@gmail.com">Email me</a>.</p>
      </div>

      <div className="flex flex-col">

        {data.map(data => {
          return (
              <div key={data.id} className='relative text-center w-full hover:opacity-100 mb-10 drop-shadow-lg'>
                <img className='block w-full h-auto rounded-lg' src={data.img} alt="" />
                <div className='absolute inset-0 w-full h-full opacity-0 bg-[#141c3a] text-white hover:opacity-100 rounded-lg transition ease-in-out duration-500'>
                <div className='absolute inset-1/4 text-center text-sm'>
                    <p className=''>{data.text}</p>
                  <div className="mt-5"><button className='rounded-full border-2 border-[#6e07f3] bg-transparent px-4 py-2 hover:bg-[#6e07f3] transition ease-in-out duration-500'><a href={data.link}>Visit Website</a> </button></div>
                  </div>
                </div>
              </div>
          )
        })}

        <div className='text-center my-10'>
          <a href="">
            <button className='border-2 p-2 rounded-full border-[#6e07f3] hover:bg-[#6e07f3] transition ease-in-out duration-500 hover:text-white'>
              <div className='flex'>
                <img className='mx-2' src={GH} alt="" />
                <p className='mx-2 font-medium'>See More On GitHub</p>
              </div>
            </button>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Cards