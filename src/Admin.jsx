import school from './assets/School.png'
import student from './assets/student.png'
import teacher from './assets/teacher.png'

function Admin(){
    return(
    <div className='h-[100vh] w-[100vw]'>
        <div className="flex items-center px-10  h-[15vh] w-[100vw]">
            <img className='h-[70%]' src={school} alt="" />
            <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
        </div>
        <div className='text-white flex items-center justify-center h-[85vh] w-[100vw bg-[#1a2d31] pb-[100px]'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-black text-[50px]'>Welcome Back, Admin!</h1>
                <div className='gap-[270px]  p-5  flex flex-row'>
                    <div className='hover:scale-110 ease-in-out duration-300 cursor-pointer gap-2 rounded-[40px] border-4 p-5 flex flex-col items-center justify-center'>
                        <img className='h-[200px]' src={student} alt="" />
                        <h3 className='text-lg'>Student</h3>
                    </div>
                    <div className='hover:scale-110 ease-in-out duration-300 cursor-pointer gap-2 rounded-[40px] border-4 p-5 flex flex-col items-center justify-center'>
                        <img className='h-[200px]' src={teacher} alt="" />
                        <h3 className='text-lg'>Teacher</h3>
                    </div>
                </div>
                <button className='text-black bg-[#dbdbdb] px-[100px] py-1 rounded-full font-medium'>Log out</button>
            </div>
        </div>
    </div>
    );
}

export default Admin