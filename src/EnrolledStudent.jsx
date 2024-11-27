import { db } from "./firebase-config";
import { collection, deleteDoc, getDocs, doc, onSnapshot, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import school from './assets/School.png'
import Back from "./Back";
import addIcon from './assets/addIcon.png'
import { useNavigate, useLocation } from "react-router-dom";
import back from "./assets/back.png"

function EnrolledStudent(){
    const navigate = useNavigate(); 
    const loc = useLocation();
    const sub = loc.state;
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const studentCollectionRef = collection(db, "Students");

        const programQuery = query(studentCollectionRef, where("Program", "==", sub.course))
    

    const fetchStudents = async () => {
        const querySnapshot = await getDocs(programQuery);
        const studentList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        setStudents(studentList)
    }

    fetchStudents();
    }, [])
    return(
        <div className="h-[100vh]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
                <img className='h-[70%]' src={school} alt="" />
                <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            
            <div className='px-7 pt-5 h-[85vh] w-[100vw] bg-[#1a2d31] flex justify-center'>
                
                <div className=''>
                    <button className='flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium' onClick={() => {navigate("/courses")}}>
                        <img className='h-[20px]' src={back} alt="" />
                        Back
                    </button>
                    <div className="flex items-center justify-between mb-3">
                        <h1 className='font-bold text-xl mb-2 text-white mt-5'>Students enrolled in {sub.course}</h1>
                        <button className="gap-2 bg-[#ffffff] flex items-center justify-center py-2 px-3 rounded-full" onClick={() => {navigate("/addStudent")}}>
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
                                    <td className='w-[200px]'> 
                                    <button className='bg-green-500 text-black px-2 rounded-sm mr-4'>Check</button> 
                                    <button className='bg-red-500 text-black px-2 rounded-sm' onClick={() => deleteStudent(student.id)}>Delete</button> 
                                    </td>
                                </tr>);
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EnrolledStudent