import { useEffect, useState } from 'react';
import school from './assets/School.png'
import back from './assets/back.png'
import { useLocation } from 'react-router-dom';
import { db } from './firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
function StudentProfile(){
    const loc = useLocation();
    const navigate = useNavigate();
    const docId = loc.state;
    const docRef = doc(db, "Students", docId.id);

    const [studentData, setStudentData] = useState([]);

    const [grades, setGrades] = useState(studentData.Subjects);
    const handleGradeChange = (index, e) => {
        const updatedGrades = [...grades];
        updatedGrades[index].grade = e.target.value;
        setGrades(updatedGrades);
    }

    
    useEffect(() => {
        const fetchStudentInfo = async () => {
            const studentDoc = await getDoc(docRef);
            const studentInfo = studentDoc.data();
            setStudentData(studentInfo);
            console.log(studentData)
        }

        fetchStudentInfo();
    }, [])

    return(
        <div className="min-h-[100vh] w-[100vw]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
            <img className='h-[70%]' src={school} alt="" />
            <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            <div className='h-[85vh] w-[100vw] bg-[#1a2d31]'>
                <div >
                    <button className='flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium' onClick={() => navigate("/adminStudent")}>
                    <img className='h-[20px]' src={back} alt="" />
                    Back
                    </button>
                    <div>
                        <h1 className='text-white'>Enrolled to {studentData.Program}</h1>
                        
                    </div>
                    <div>
                        <h1 className='text-white'>Student Record</h1>
                        <table className='border border-white w-[45vw] text-center mb-[100px]'>
                            <thead className='border'>
                                <tr className='text-white'>
                                    <td className='border-2 py-1'>Subject Name</td>
                                    <td className='border-2 py-1'>Grade</td>
                                </tr>
                            </thead>
                            <tbody>
                                {studentData.Subjects?.map((subject, index) => (
                                <tr className='odd:bg-white even:text-white' key={index}>
                                    <td className='border-2 py-1'>{subject.subject || 'No subject available'}</td>
                                    <td className='border-2 py-1'><input placeholder={subject.grade === null ? 'Not Graded' : ""}  className={`text-center bg-transparent h-[100%] w-[100%] ${index % 2 === 0 ? 'placeholder-black' : 'placeholder-white'}`} type="text" onChange={(e) => handleGradeChange(index, e)}/></td>
                                </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile