import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import school from './assets/School.png'
import Back from "./Back";
import addIcon from './assets/addIcon.png'

function AdminStudent(){

    const StudentCollectionRef = collection(db, "Students");

    const [students, setStudents] = useState([])
    useEffect(() => {

    const getSubjects = async() => {
        const data = await getDocs(StudentCollectionRef);
        setStudents(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getSubjects()
    }, []);

    return(
        <div className="h-[100vh]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
                <img className='h-[70%]' src={school} alt="" />
                <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            
            <div className='px-7 pt-5 h-[85vh] w-[100vw] bg-[#1a2d31] flex justify-center'>
                
                <div className=''>
                    <Back/>
                    <div className="flex items-center justify-between mb-3">
                        <h1 className='font-bold text-xl mb-2 text-white mt-5'>Courses</h1>
                        <button className="gap-2 bg-[#ffffff] flex items-center justify-center py-2 px-3 rounded-full">
                            <img className="h-[35px]" src={addIcon} alt="" />
                            Add Student
                        </button>
                    </div>
                    <table className='border w-[94vw] text-center'>
                        <thead className='border'>
                            <tr className='text-white'>
                                <th className='border-2 py-1'>Student Number</th>
                                <th className='border-2 py-1'>Student Name</th>
                                <th className='border-2 py-1'>Email</th>
                            </tr>
                        </thead>
                        <tbody className='tableData'>
                            {students.map((student) => {
                                return( 
                                <tr className='odd:bg-white even:text-white' key={student.id}>
                                    <td className='border-2 py-1'>{student.StudentNumber}</td>
                                    <td className='border-2 py-1'>{student.StudentName}</td>
                                    <td className='border-2 py-1'>{student.Email}</td>
                                    <td className='w-[200px]'> <button className='bg-green-500 text-black px-2 rounded-sm'>Check Student</button> </td>
                                </tr>);
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminStudent