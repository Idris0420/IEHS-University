import { useState } from 'react';
import school from './assets/School.png'
import Back from './Back';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import back from './assets/back.png'
import { useNavigate } from 'react-router-dom';

function AddStudent(){
    const studentCollectionRef = collection(db, "Students");
    const navigate = useNavigate();
    const createStudent = async() => {
        let subjects = [];
        if (currProg === "Bachelor of Science in Information Technology"){
            subjects = [
                {
                    subject: "Web Development and Design",
                    grade: null
                },
                {
                    subject: "IT Infrastructure and System Administration",
                    grade: null
                },
                {
                    subject: "Database Management Systems",
                    grade: null
                }
            ];
        }

        else if (currProg === "Bachelor of Science in Computer Science"){
            subjects = [
                {
                    subject: "Data Structures and Algorithms",
                    grade: null
                },
                {
                    subject: "Software Engineering",
                    grade: null
                },
                {
                    subject: "Artificial Intelligence",
                    grade: null
                }
            ]
        }
        


        else if (currProg === "Bachelor of Science in Computer Engineering"){
            subjects = [
                {
                    subject: "Computer Architecture and Organization",
                    grade: null
                },
                {
                    subject: "Embedded Systems",
                    grade: null
                },
                {
                    subject: "Digital Signal Processing",
                    grade: null
                },{
                    subject: "GWA",
                    grade: null
                }
            ]
        }
        
        await addDoc(studentCollectionRef, {Email: currEmail, StudentName: currName, StudentNumber: currStudNum, Program: currProg, Subjects: subjects});
        alert("Student successfully added!");
        navigate("/adminStudent")
    }

    const [currName, setCurrName] = useState("");
    const [currStudNum, setCurrStudNum] = useState("");
    const [currEmail, setCurrEmail] = useState("");
    const [currProg, setCurrProg] = useState("Bachelor of Science in Information Technology");



    return(
        <>
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
            <img className='h-[70%]' src={school} alt="" />
            <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            <div className='pt-[50px] flex flex-col items-center justify-center h-[85vh] w-[100vw] bg-[#1a2d31]'>
                <div className='h-[100%] flex flex-col'>
                <div className='flex items-center mb-5 '>
                <button className='flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium' onClick={() => {navigate("/adminStudent")}}>
                    <img className='h-[20px]' src={back} alt="" />
                    Back
                </button>
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
                            <select name="options" className='w-[80%] h-[25px]' onChange={e => setCurrProg(e.target.value)}>
                                <option value="Bachelor of Science in Information Technology">BSIT (Bachelor of Science in Information Technology)</option>
                                <option value="Bachelor of Science in Computer Science">BSCS (Bachelor of Science in Computer Science)</option>
                                <option value="Bachelor of Science in Computer Engineering">BSCPE (Bachelor of Science in Computer Engineering)</option>
                            </select>
                        </div>
                    </div>
                    <button className='bg-green-500 w-fit self-end px-5 py-2 rounded-full font-bold' onClick={createStudent}>+ Add Student</button>
                </div>
            </div>
        </>
    );
}

export default AddStudent