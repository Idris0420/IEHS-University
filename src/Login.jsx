import logo from './assets/SchoolLogo.png'
import Nav from './Nav'
function Login(){
    return(
        <>
            <Nav/>
            <div className="w-[100vw] h-[100vh] bg-[#f9f9f9] justify-center items-center flex">
                <div className="bg-[#f9f9f9] rounded h-[65%] w-[80%] flex flex-row items-center justify-center gap-[100px]">
                    <img className='h-[100%]' src={logo} alt="" />
                    <div className="cshadow h-[400px] w-[400px] bg-[#ffffff] flex flex-col items-center justify-center gap-5 rounded-lg">
                        <h1 className="text-[50px] font-black">LOG IN</h1>
                        <div className='flex flex-col w-[80%]'>
                            <label htmlFor="">Email*</label>
                            <input className="px-5 w-[100%] h-[50px] rounded bg-[#dbdbdb]" type="text" />
                        </div>
                        <div className='flex flex-col w-[80%]'>
                            <label htmlFor="">Password*</label>
                            <input className="px-5 w-[100%] h-[50px] rounded bg-[#dbdbdb]" type="text" />
                        </div>
                        <button className="text-xl rounded-lg bg-[#1a2d31] text-white px-[25px] py-[8px] hover:scale-125 trasition-scale duration-300 ease-in-out">LOGIN</button>
                    </div>
                </div>
            </div>
        </>
    )
        
}

export default Login