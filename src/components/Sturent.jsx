import React from 'react';
import pic from  '../assets/profile.svg'

const students = [
  {  name: 'مروان جابري' , id : 0  , profilePicture:'../assets/profile.svg' },
  {  name: 'لحانين احمد' , id : 1 ,  profilePicture:'../assets/profile.svg' },
  {  name: 'طريبش كاميلية' ,  id : 2 },
  // Add more students as needed
];
export default function Sturent () 
{
    const defaultPicture = {pic} ; 
    return (
        <div className=' w-2/3'>
        <table className='w-full table-fixed'>
          <thead>
            <tr className='' >
              <th className='text-right pr-4 '>الاسم</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className='flex flex-row justify-end space-y-5 shadow-lg'>
                <td className='divide-y-2 divide-slate-600'>{student.name}</td>
                <td >
                  <img src={student.profilePicture || defaultPicture}  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

    )
}