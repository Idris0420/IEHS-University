import { useEffect, useState } from 'react';
import school from './assets/School.png'
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import Back from './Back';

function SubjectList(){

    const SubjectCollectionRef = collection(db, "Subjects");

    const [subjects, setSubjects] = useState([])
    useEffect(() => {

    const getSubjects = async() => {
        const data = await getDocs(SubjectCollectionRef);
        setSubjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
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
                    <h1 className='font-bold text-xl mb-2 text-white mt-5'>Courses</h1>
                    <table className='border w-[94vw] text-center'>
                        <thead className='border'>
                            <tr className='text-white'>
                                <th className='border-2 py-1'>Subject Code</th>
                                <th className='border-2 py-1'>Subject Name</th>
                                <th className='border-2 py-1'>Year Level</th>
                            </tr>
                        </thead>
                        <tbody className='tableData'>
                            {subjects.map((subject) => {
                                return( 
                                <tr className='odd:bg-white even:text-white'>
                                    <td className='border-2 py-1'>{subject.SubjectCode}</td>
                                    <td className='border-2 py-1'>{subject.SubjectName}</td>
                                    <td className='border-2 py-1'>{subject.YearLevel}</td>
                                    <td className='w-[200px]'> <button className='bg-green-500 text-black px-2 rounded-sm'>Check Students</button> </td>
                                </tr>);
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SubjectList