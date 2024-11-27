import { useEffect, useState } from 'react';
import school from './assets/School.png'
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import { useNavigate } from 'react-router-dom';

function SubjectList(){

    const subjects = [
        {
            SubName: "Bachelor of Science in Information Technology",
        },
        {
            SubName: "Bachelor of Science in Computer Science",
        },
        {
            SubName: "Bachelor of Science in Computer Engineering",
        },
    ]

    const navigate = useNavigate();

    
    return(
        <div className="h-[100vh]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
                <img className='h-[70%]' src={school} alt="" />
                <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            
            <div className='px-7 pt-5 h-[85vh] w-[100vw] bg-[#1a2d31] flex justify-center'>
                
                <div className=''>
                    <h1 className='font-bold text-xl mb-2 text-white mt-5'>Courses</h1>
                    <table className='border w-[94vw] text-center'>
                        <thead className='border'>
                            <tr className='text-white'>
                                <th className='border-2 py-1'>Subject Name</th>
                            </tr>
                        </thead>
                        <tbody className='tableData'>
                        {subjects.map((subject, index) => {
                            return(
                            <tr className='odd:bg-white even:text-white' key={index}>
                                <td className='border-2 py-1'>{subject.SubName}</td>
                                <td className='w-[200px]'> <button className='bg-green-500 text-black px-2 rounded-sm'>Check Students</button> </td>
                            </tr>
                        )})}
    
                            
                        </tbody>
                    </table>
                    <div className='w-[100%] justify-center flex'>
                        <button className='text-black bg-[#dbdbdb] px-[100px] py-1 rounded-full font-medium self-center mt-10' onClick={() => {navigate("/")}}>Log out</button>
                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default SubjectList