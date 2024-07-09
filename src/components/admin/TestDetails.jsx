import React from 'react';

const TestDetails = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-orange-500 h-1/4 mb-10 relative'>
        <h1 className='uppercase w-full h-40 font-bold p-6'>
          General Settings
        </h1>
      </div>
      <div className='h-96 relative  ml-10 flex justify-between ' style={{ marginTop: '-6rem', width:'70rem', height: '30rem'}}> 

        <div className='bg-white mr-10 'style={{width:'35rem'}}>
        <h1 className=' font-bold p-6'>
          General Settings
        </h1>
            <input type="text" placeholder='Test Name' className=' bg-slate-200 m-4 ml-10' style={{width:'30rem'}} />
            <input type="text" placeholder='Subject Name' className=' bg-slate-200 m-4 ml-10' style={{width:'30rem'}} />
            <input type="Date" placeholder='Test Date' className=' bg-slate-200 m-4 ml-10' style={{width:'30rem'}} />
            <input type="text" placeholder='Total Question Count' className=' bg-slate-200 m-4 ml-10' style={{width:'30rem'}} />
                <select className='bg-slate-200 m-4 ml-10 text-center h-10' style={{width:'30rem'}}>
                    <option value="">Select Class for Student</option>
                    <option value="PENDING">PENDING</option>
                    <option value="RESULTING">RESULTING</option>
        
                </select>
                

            <button className=' bg-orange-500 m-4 ml-24 h-8 font-bold text-center ' style={{width:'20rem'}}  >UPDATE</button>
        </div>
        <div className='bg-white h-96'>
            <h1 className=' font-bold p-6'>
            Other Settings
            </h1>
            <div className='flex'>
                <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{width:'13rem'}}>Marks as Completed </button>
                <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{width:'13rem'}}>Delete Test </button>

            </div>
            <button className='text-center h-8 text-black font-bold bg-orange-500 hover:bg-orange-600 m-4 ml-10' style={{width:'30rem'}}>Get Student Data </button>
            <input type="text" placeholder='Student Roll NO' className=' bg-slate-200 m-4 ml-10 h-8 text-center' style={{width:'30rem'}} />
            
            <button className=' bg-orange-500 m-4 ml-28 h-8 font-bold text-center text-black ' style={{width:'20rem'}}  >Add</button>
        
        </div>
        
      </div>
      
    </div>
  );
};

export default TestDetails;
