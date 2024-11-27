import { db } from "./firebase-config";
import { collection, deleteDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import school from './assets/School.png'
import Back from "./Back";
import addIcon from './assets/addIcon.png'
import { useNavigate } from "react-router-dom";
import back from "./assets/back.png"

function AdminProfessors(){
    const profCollectionRef = collection(db, "Professors");

    const [professors, setProfessors] = useState([])
    useEffect(() => {

    const getProfs = async() => {
        const data = await getDocs(profCollectionRef);
        setProfessors(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getProfs()

    const unsubscribe = onSnapshot(profCollectionRef, (snapshot) => {
        const profList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setProfessors(profList); 
    });

    return () => unsubscribe();
    }, []);

    const deleteProf = async (id) => {
        const profDoc = doc(db, "Professors", id);
        await deleteDoc(profDoc);
    } 

    const navigate = useNavigate();

    return(
        <div className="h-[100vh]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
                <img className='h-[70%]' src={school} alt="" />
                <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            
            <div className='px-7 pt-5 h-[85vh] w-[100vw] bg-[#1a2d31] flex justify-center'>
                
                <div className=''>
                    <button className='flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium' onClick={() => {navigate("/admin")}}>
                        <img className='h-[20px]' src={back} alt="" />
                        Back
                    </button>
                    <div className="flex items-center justify-between mb-3">
                        <h1 className='font-bold text-xl mb-2 text-white mt-5'>Courses</h1>
                        <button className="gap-2 bg-[#ffffff] flex items-center justify-center py-2 px-3 rounded-full" onClick={() => {navigate("/addProfessors")}}>
                            <img className="h-[35px]" src={addIcon} alt="" />
                            Add Professor
                        </button>
                    </div>
                    <table className='border w-[94vw] text-center'>
                        <thead className='border'>
                            <tr className='text-white'>
                                <th className='border-2 py-1'>Professor Name</th>
                                <th className='border-2 py-1'>Professor Email</th>
                                <th className='border-2 py-1'>Subject</th>
                            </tr>
                        </thead>
                        <tbody className='tableData'>
                            {professors.map((prof) => {
                                return( 
                                <tr className='odd:bg-white even:text-white' key={prof.id}>
                                    <td className='border-2 py-1'>{prof.Name}</td>
                                    <td className='border-2 py-1'>{prof.Email}</td>
                                    <td className='border-2 py-1'>{prof.Subject}</td>
                                    <td className='w-[200px]'> 
                                    <button className='bg-green-500 text-black px-2 rounded-sm mr-4'>Check</button> 
                                    <button className='bg-red-500 text-black px-2 rounded-sm' onClick={() => deleteProf(prof.id)}>Delete</button> 
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

export default AdminProfessors