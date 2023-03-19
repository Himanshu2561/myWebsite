const GH = 'github.svg'

const data = [
  {
    id: 7,
    img: 'eryk.jpg',
    type: 'visit website',
    text: 'Client portfolio website - build with ReactJS',
    link: 'https://eryklewandowski.netlify.app/',
  },
  {
    id: 6,
    img: 'vikraman.jpg',
    type: 'visit website',
    text: 'Client portfolio website - build with ReactJS',
    link: 'http://vikramank.com/',
  },
  {
    id: 5,
    img: 'blog.jpg',
    type: 'visit website',
    text: 'Blogging Application - Cloud Firestore + ReactJS',
    link: 'https://blog-app-react-firebase.web.app/',
  },
  {
    id: 4,
    img: 'admtrl.jpg',
    type: 'visit website',
    text: 'client project - designed a static website for a organisation',
    link: 'http://admtrl.com/',
  },
  {
    id: 3,
    img: 'ship.jpg',
    type: 'see code',
    text: 'space invaders - game designed using python',
    link: 'https://github.com/Himanshu2561/Space_Invaders',
  },
  {
    id: 2,
    img: 'nikhil.jpg',
    type: 'visit website',
    text: 'Client portfolio website - build with HTML, CSS, JS',
    link: 'https://nikhilkatiki.github.io/',
  },
  {
    id: 1,
    img: 'card.jpg',
    type: 'see code',
    text: 'black-jack - game designed using HTML, CSS, JS',
    link: 'https://github.com/Himanshu2561/blackjack',
  },
  {
    id: 0,
    img: 'snake.jpg',
    type: 'see code',
    text: 'snake game - developed using java and java swing',
    link: 'https://github.com/Himanshu2561/Snake_Game',
  },
]
// data.reverse();

const Cards = () => {
  return (
    <div className='mx-8'>
      <div className='text-black text-center py-10'>
        <p className='font-eubold text-lg'>My Recent Work</p>
        <p className='py-5 lg:text-lg md:w-3/4 m-auto'>
          Here are a few past design projects I've worked on. Want to see more?{' '}
          <a
            className='text-[#6e07f3]'
            href='mailto:himanshu.rathore2561@gmail.com'
          >
            Email me
          </a>
          .
        </p>
      </div>

      <div className='flex flex-col'>
        <span className='lg:flex lg:flex-wrap lg:justify-evenly md:flex md:flex-wrap md:justify-evenly'>
          {data.map((data) => {
            return (
              <div
                key={data.id}
                className='lg:w-1/4 lg:mx-5 md:w-[45%] md:mx-1 relative text-center w-full hover:opacity-100 mb-10 drop-shadow-lg'
              >
                <img
                  className='block w-full h-auto rounded-lg'
                  src={data.img}
                  alt=''
                />
                <div className='absolute inset-0 w-full h-full opacity-0 bg-[#141c3a] text-white hover:opacity-100 rounded-lg transition ease-in-out duration-500'>
                  <div className='absolute inset-1/4 text-center text-sm lg:inset-10 md:inset-5'>
                    <p className='capitalize'>{data.text}</p>
                    <div className='mt-5'>
                      <button className='rounded-full border-2 border-[#6e07f3] bg-transparent px-4 py-2 hover:bg-[#6e07f3] transition ease-in-out duration-500 capitalize'>
                        <a href={data.link} target='_blank'>
                          {data.type}
                        </a>{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </span>

        <div className='text-center my-10'>
          <a href='https://github.com/Himanshu2561' target='_blank'>
            <button className='border-2 p-2 rounded-full border-[#6e07f3] hover:bg-[#6e07f3] transition ease-in-out duration-500 hover:text-white'>
              <div className='flex text-center items-center'>
                <img className='mx-2' src={GH} alt='' />
                <p className='mx-2 font-medium capitalize'>
                  See More On GitHub
                </p>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards
