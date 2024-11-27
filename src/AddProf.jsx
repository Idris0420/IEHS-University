import { useState, useEffect } from 'react';
import school from './assets/school.png'
import Back from './Back';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import back from './assets/back.png'
import { useNavigate } from 'react-router-dom';

function AddProf(){
    const profCollectionRef = collection(db, "Professors");
    const createProf = async() => {
        await addDoc(profCollectionRef, {Name: currName, Email: currEmail, Subject: currSub});
        alert("Professor successfully added!");
        navigate("/adminProfessors");
    } 

    const [currName, setCurrName] = useState("");
    const [currEmail, setCurrEmail] = useState("");
    const [currSub, setCurrSub] = useState("Data Structures and Algorithms");
    
    const navigate = useNavigate();

    return(
        <div className="h-[100vh]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
                <img className='h-[70%]' src={school} alt="" />
                <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            <div className='pt-[50px] flex flex-col items-center justify-center h-[85vh] w-[100vw] bg-[#1a2d31]'>
                <div className='h-[100%] flex flex-col'>
                    <div className='flex items-center mb-5 '>
                    <button className='flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium' onClick={() => {navigate("/adminProfessors")}}>
                    <img className='h-[20px]' src={back} alt="" />
                    Back
                </button>
                    <div className='flex-grow flex justify-center'>
                        <h1 className='text-white font-bold text-xl'>Add Professor</h1>
                    </div>
                </div>
                    <div className='h-[55%] flex '>
                        <div className='pl-3 text-[25px] w-[15vw] h-[80%] bg-[#dbdbdb] flex flex-col justify-around'>
                            <h1>Name:</h1>
                            <h1>Email:</h1>
                            <h1>Subject:</h1>
                        </div>
                        <div className='bg-[#f2f2f2] w-[65vw] h-[80%] flex flex-col justify-around pl-4'>
                            <input type="text" className='w-[80%] h-[25px]' onChange={e => setCurrName(e.target.value)} />
                            <input type="text" className='w-[80%] h-[25px]' onChange={e => setCurrEmail(e.target.value)}/>
                            <select name="options" className='w-[80%] h-[25px]' onChange={e => setCurrSub(e.target.value)}>
                                <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
                                <option value="Web Development and Design">Web Development and Design</option>
                                <option value="IT Infrastructure and System Administration">IT Infrastructure and System Administration</option>
                                <option value="Database Management Systems">Database Management Systems</option>                          
                                <option value="Software Engineering">Software Engineering</option>
                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                <option value="Computer Architecture and Organization">Computer Architecture and Organization</option>
                                <option value="Embedded Systems">Embedded Systems</option>
                                <option value="Digital Signal Processing">Digital Signal Processing</option>
                            </select>
                        </div>
                    </div>
                    <button className='bg-green-500 w-fit self-end px-5 py-2 rounded-full font-bold' onClick={createProf}>+ Add Professor</button>
                </div>
            </div>
            </div>
            
    )
}

export default AddProf