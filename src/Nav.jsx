
function Nav(){
    return(
        <>
            <div className='fixed top-0 h-[50px] w-[100vw] bg-[#1a2d31] flex justify-center items-center'>
            <ul className='font-medium flex w-[100%] justify-around text-white'>
                <li>ABOUT</li>
                <li>OUR COURSES</li>
                <li>RESEARCH</li>
                <li>PAGES</li>
                <li>CONTACT</li>
            </ul>
            </div>
            <div className='fixed bottom-0 h-[40px] w-[100vw] bg-[#1a2d31]'></div>
        </>
    )
}

export default Nav