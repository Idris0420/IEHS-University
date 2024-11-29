import school from './assets/School.png'
import profile from './assets/Profile.png'
import back from './assets/back.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { db } from './firebase-config';
import { useEffect, useState } from 'react';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';

function TeacherProfile(){
    const navigate = useNavigate();
    const location = useLocation();
    const idRef = location.state;
    const docRef = doc(db, "Professors", idRef.id);
    const [teacher, setTeacher] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
        const docSnap = await getDoc(docRef);
        const teacherInfo = docSnap.data();
        setTeacher(teacherInfo);
        console.log(teacher)
    }

    fetchData();

    
    
    }, [])

    const deleteProf = async () => {
        await deleteDoc(docRef);
        alert("Professor successfully removed!");
        navigate("/adminProfessors")
    }

    return(
        <div className=" min-h-[100vh] w-[100vw]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
                <img className='h-[70%]' src={school} alt="" />
                <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            <div className='bg-[#1a2d31] h-[85vh] flex items-center justify-center flex-row'>
                <div className='w-[15vw] h-[80%] '>
                    <img src={profile} alt="" />
                </div>
                <div className='flex flex-col px-2 py-4 h-[80%] w-[70vw]'>
                    <div className='h-[30%] w-[100%] flex flex-row items-center justify-between'>
                        <h1 className='font-bold text-white text-2xl'>Teacher</h1>
                        <button className='self-start flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium' onClick={() => {navigate("/adminProfessors")}}>
                            <img className=' h-[20px]' src={back} alt="" />
                            Back
                        </button>
                    </div>
                    <div className='h-[80%] flex items-center'>
                        <div className='h-[70%] flex flex-col justify-around w-[80%] '>
                            <div className=''>
                                <h1 className='text-white'>Name</h1>
                                <input className='py-1 px-3 w-[100%] rounded' value={teacher.Name} type="text" />
                            </div>
                            <div className=''>
                                <h1 className='text-white'>Email</h1>
                                <input className='py-1 px-3 w-[100%] rounded' value={teacher.Email} type="text" />
                            </div>
                            <div className=''>
                                <h1 className='text-white'>Subject</h1>
                                <input className='py-1 px-3 w-[100%] rounded' value={teacher.Subject} type="text" />
                            </div>
                        </div>
                    </div>
                    <button className='bg-red-500 rounded-full self-start py-1 px-5 font-bold  h-auto w-fit' onClick={() => deleteProf()}>Delete</button>
                </div>
                
            </div>
        </div>
    );
}

export default TeacherProfile