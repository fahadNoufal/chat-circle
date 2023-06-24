import logo from '../../website-images/chat-circle-text-logo.svg'
import mouse from '../../website-images/mouseIcon.svg'
import {Link} from 'react-scroll'

const Navbar = () => {
    

  return (
    <nav className=' navbar w-full text-white z-20 absolute top-0'>
        <div className='py-6 flex font-medium  fixed top-0 left-0 right-0'>
            <div className=" flex flex-1 items-center pl-[4rem]"> 
                <img src={logo} className='h-[1.1rem] mb-1' alt="" />
            </div>
            <div className="nav-links flex flex-[2] pr-[4rem] justify-between items-center">
                <ul className=' flex gap-[45%] pl-[100px]  text-[1.15rem] font-medium ' >
                    <li className=' transition-all' >
                        <Link className='cursor-pointer hover:text-yellow ' to="home-screen" spy={true} smooth={true} offset={-720} duration={1500} >
                            Home
                        </Link>
                    </li>
                    <li className=' transition-all' >
                        <Link className='cursor-pointer hover:text-yellow ' to="features" spy={true} smooth={true} offset={330} duration={1500} >
                            Features
                        </Link>
                    </li>
                    <li className=' cursor-pointer hover:text-yellow transition-all' >
                        <Link to="join" spy={true} smooth={true} offset={-180} duration={1500} >
                            Join
                        </Link>
                    </li>
                    <li className=' transition-all' >
                        <Link className='cursor-pointer hover:text-yellow ' to="contact" spy={true} smooth={true} offset={-240} duration={1500} >
                            Contact
                        </Link>
                    </li>
                </ul>
                <span>
                    <img src={mouse}alt="" className='-mb-3' />
                </span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar