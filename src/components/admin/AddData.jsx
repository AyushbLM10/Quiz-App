import React from 'react';

const AddData = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          Add Class/Student
        </h1>
      </div>
      <div className='flex'>

        <div className='bg-white h-96 relative ml-10' style={{ marginTop: '-6rem', width: '32rem', height: '25rem'}}>
            <h1 className=' font-bold p-6'>
            Add New Class Data
            </h1>
            <div>

                <input type="text" placeholder='Class Name' className=' bg-slate-200 m-4 ml-4' style={{width:'30rem'}} />
                <input type="text" placeholder='Starting Roll No' className=' bg-slate-200 m-4 ml-4' style={{width:'30rem'}} />
                <input type="text" placeholder='Ending Roll No' className=' bg-slate-200 m-4 ml-4' style={{width:'30rem'}} />
                <button className=' bg-orange-500 m-4 ml-24 h-8 font-bold text-center ' style={{width:'20rem'}}  >Add Question</button>
            </div>
        </div>
        <div className='bg-white h-96 relative ml-10' style={{ marginTop: '-6rem', width: '32rem', height: '20rem'}}>
            <h1 className=' font-bold p-6'>
            Add Student
            </h1>
            <div>
                
                <select className='bg-slate-200 m-4 ml-4 text-center h-10' style={{width:'30rem'}}>
                    <option value="">Select Class for Student</option>
                    <option value="Class A">Class A</option>
                    <option value="Class B">Class B</option>
                    <option value="Class C">Class C</option>
                </select>
                <input type="text" placeholder='Student Roll No' className=' bg-slate-200 m-4 ml-4' style={{width:'30rem'}} />
                <button className=' bg-orange-500 m-4 ml-24 h-8 font-bold text-center ' style={{width:'20rem'}}  >Add Question</button>
            </div>
        </div>
            
      </div>
    </div>
  );
};

export default AddData;
