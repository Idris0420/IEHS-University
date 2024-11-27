import { useState } from 'react';
import school from './assets/school.png'
import Back from './Back';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
function AddStudent(){
    const studentCollectionRef = collection(db, "Students");

    const createStudent = async() => {
        await addDoc(studentCollectionRef, {Email: currEmail, StudentName: currName, StudentNumber: currStudNum, Program: currProg});
        alert("Student successfully added!")
    }

    const [currName, setCurrName] = useState("");
    const [currStudNum, setCurrStudNum] = useState("");
    const [currEmail, setCurrEmail] = useState("");
    const [currProg, setCurrProg] = useState("");

    return(
        <>
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
            <img className='h-[70%]' src={school} alt="" />
            <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            <div className='pt-[50px] flex flex-col items-center justify-center h-[85vh] w-[100vw] bg-[#1a2d31]'>
                <div className='h-[100%] flex flex-col'>
                <div className='flex items-center mb-5 '>
                    <Back />
                    <div className='flex-grow flex justify-center'>
                        <h1 className='text-white font-bold text-xl'>Add Student</h1>
                    </div>
                </div>
                    <div className='h-[55%] flex '>
                        <div className='pl-3 text-[25px] w-[15vw] h-[80%] bg-[#dbdbdb] flex flex-col justify-around'>
                            <h1>Name:</h1>
                            <h1>Student No.</h1>
                            <h1>Email:</h1>
                            <h1>Program:</h1>
                        </div>
                        <div className='bg-[#f2f2f2] w-[65vw] h-[80%] flex flex-col justify-around pl-4'>
                            <input type="text" onChange={e => setCurrName(e.target.value)} className='w-[80%] h-[25px]'/>
                            <input type="text" onChange={e => setCurrStudNum(e.target.value)} className='w-[80%] h-[25px]'/>
                            <input type="text" onChange={e => setCurrEmail(e.target.value)} className='w-[80%] h-[25px]'/>
                            <input type="text" onChange={e => setCurrProg(e.target.value)} className='w-[80%] h-[25px]'/>
                        </div>
                    </div>
                    <button className='bg-green-500 w-fit self-end px-5 py-2 rounded-full font-bold' onClick={createStudent}>+ Add Student</button>
                </div>
            </div>
        </>
    );
}

export default AddStudent