import React from 'react'

const Contact = () => {
  return (
    <div className="contact-section relative pb-[210px]">
        <div id='contact' className='contact max-w-[760px] mx-auto relative z-10  bg-black rounded-[40px] p-[3.12rem] border border-[#4A4545]'>
            <h3 className='text-[2.8rem] text-center tracking-tight font-semibold mb-[3rem]'>Get in touch 👋</h3>
            <form action="" method="post" className=' flex flex-col justify-center'>
                <div className="email-name flex justify-between">
                    <div className="email w-[310px] p-2 px-4 rounded-[12px]  bg-[#323232]">
                        <span>Email</span>
                        <input type="text"  className='w-full bg-transparent' placeholder='email@chatcircle.com'/>
                    </div>
                    <div className="name w-[310px] p-2 px-4 rounded-[12px] bg-[#323232]">
                        <span>Name</span>
                        <input type="text"  className='w-full bg-transparent' placeholder='chatcircle'/>
                    </div>
                </div>
                <div className="message w-full flex flex-col h-[130px] py-2 px-4 rounded-[12px] mt-[2.87rem] bg-[#323232]"  >
                    <span>Message</span>
                    <textarea className='w-full flex-grow bg-transparent' type="text" name="" id="" placeholder='Enter your message here...' />
                </div>
                <button className=" text-center send-btn inline self-center font-medium text-black tracking-tighter rounded-[7px] mt-[39px] text-[3rem] leading-[50px] px-5 bg-[#F1b739] ">
                    Send
                </button>
            </form>
        </div>
        <div className="footer bg-[#323232] h-[460px] w-full absolute left-0 right-0 bottom-0 z-0"> </div>
    </div>
  )
}
export default Contact