import React from 'react';
import Api from './components/Api'
import iDesktop from './images/pattern-divider-desktop.svg';


const App = () => {
 const {data, loading, error} = Api('https://api.adviceslip.com/advice')

 if (loading ) return <h1 className='flex justify-center items-center min-h-[100vh] text-white'>LOADING... </h1>

 if (error) console.log(error);

 function newDatas() {
  window.location.reload();
 }


  return (
    <section>
      <div className='flex justify-center items-center min-h-screen'>
      <card className="w-[350px]  bg-slate-700 mx-14 rounded-lg shadow-xl md:w-[550px] md:mx-0">
        <div className='text-center my-5'>
          <p className='uppercase text-green-400 font-bold'>advice #{data?.slip.id}</p>
        </div>
        <div className='text-center my-10 px-auto px-8'>
          <h1 className='text-white'>"{data?.slip.advice}"</h1>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <source media='(min-width: 760px)' srcSet={iDesktop} alt=".svg"/>
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </div>
        <button 
        onClick={newDatas}
        className="">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg> 
          </button>
      </card>
    </div>
    <div className='text-gray-500 text-center'>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/AnnangBudiS">AnnangBudiS</a>.
     </div>
    </section>
    
     
  );
};

export default App;
