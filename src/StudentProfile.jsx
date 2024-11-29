import { useEffect, useState } from 'react';
import school from './assets/School.png'
import back from './assets/back.png'
import profile from './assets/ProfileWithBG.png'
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
    const [subject, setGrades] = useState(studentData.Subjects);
    const [gwa, setGwa] = useState(null);

    useEffect(() => {
        const fetchStudentInfo = async () => {
            const studentDoc = await getDoc(docRef);
            const studentInfo = studentDoc.data();
            setStudentData(studentInfo);
            console.log(studentData)
        }

        fetchStudentInfo();
        setGrades(studentData.Subjects);
    }, [])

    useEffect(() => {
        setGwa()
    }, [studentData])

    const handleGradeChange = (index, e) => {
        const newGrades = [...subject]; // Create a shallow copy of the subject array
        newGrades[index].grade = e.target.value; // Update the grade for the subject at the given index
        setGrades(newGrades); // Update the state with the new grades array
    
        // Ensure we access the studentData correctly as an array of subjects
        const validGrades = newGrades.filter(sub => sub.grade !== null && sub.grade !== undefined); // Filter out subjects with missing grades
    
        // If there are valid grades, calculate the GWA
        if (validGrades.length > 0) {
            const totalGrades = validGrades.reduce((sum, sub) => sum + parseFloat(sub.grade || 0), 0); // Sum up the valid grades
            const calculatedGwa = totalGrades / validGrades.length; // Divide by the number of subjects with valid grades
            setGwa(calculatedGwa.toFixed(2)); // Update GWA with two decimal places
        } else {
            setGwa(null); // If no valid grades, set GWA to null (incomplete)
        }
    
        console.log(newGrades); // Log the updated grades to the console
    }
    


    return(
        <div className="min-h-[100vh] w-[100vw]">
            <div className="flex items-center px-10  h-[15vh] w-[100vw]">
            <img className='h-[70%]' src={school} alt="" />
            <h1>INTERNATIONAL ELEMENTARY HIGH SCHOOL UNIVERSITY</h1>
            </div>
            <div className='h-[85vh] w-[100vw] bg-[#1a2d31] flex justify-around'>
                
                <div className=' w-[50vw] flex items-center justify-end h-[80vh]'>
                <button className='mb-auto mt-[40px] flex flex-row bg-[#dbdbdb] rounded-full w-[90px] px-2 pr-4 justify-between  items-center font-medium' onClick={() => navigate("/adminStudent")}>
                        <img className='h-[20px]' src={back} alt="" />
                        Back
                        </button>
                    <div className=''>
                        
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
                                        <td className='border-2 py-1'>
                                            <input placeholder={subject.grade === null ? 'Not Graded' : ""}  className={`text-center bg-transparent h-[100%] w-[100%] ${index % 2 === 0 ? 'placeholder-black' : 'placeholder-white'}`} type="text" onChange={(e) => handleGradeChange(index, e)}/>
                                        </td>
                                    </tr>
                                    ))}
                    
                                </tbody>
                            </table>
                            <div className=' flex gap-3 text-3xl'>
                                <h1 className='text-white mb-[30px]'>GWA: </h1>
                                <p className='text-white font-bold'>
                                    {gwa == null ? "Not Graded" : gwa} 
                                </p>
                            </div>
                            <div className='w-[100%] flex items-center justify-center'>
                            <button className='bg-white rounded px-3 py-2 font-bold '>Save</button>
                            </div>
                        </div>
                </div>
                
                </div>
                <div className='customBorder w-[40vw] h-[80vh] flex flex-col bg-gradient-to-r from-green-700 to-green-500'>
                    <div className='w-[100%] h-[15%] relative'> <img src={profile} alt="" className='h-[150%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8 '/></div>
                    <div className='flex flex-col items-center justify-center w-[100%] h-[75%] gap-5'>
                        <div className='w-[80%] flex flex-col items-start'>
                            <h1 className=''>Student Number</h1>
                            <div className='rounded px-3 py-1 w-[100%] bg-white'><p>{studentData.StudentNumber}</p></div>
                        </div>
                        <div className='w-[80%] flex flex-col items-start '>
                            <h1 className=''>Student Name</h1>
                            <div className='rounded px-3 py-1 w-[100%] bg-white'><p>{studentData.StudentName}</p></div>
                        </div>
                        <div className='w-[80%] flex flex-col items-start'>
                            <h1 className=''>Email</h1>
                            <div className='rounded px-3 py-1 w-[100%] bg-white'><p>{studentData.Email}</p></div>
                        </div>
                        <div className='w-[80%] flex flex-col items-start'>
                            <h1 className=''>Program</h1>
                            <div className='rounded px-3 py-1 w-[100%] bg-white'><p>{studentData.Program}</p></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default StudentProfile