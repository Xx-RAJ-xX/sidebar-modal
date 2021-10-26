import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';



const Home = () => {

    const {setShowModal,setShowSidebar} = useGlobalContext();
   
  return (
      <main>
          <button className="sidebar-toggle" onClick = {()=> setShowSidebar(true)}>
              <FaBars />
          </button>
          <button className ="btn" onClick ={() => setShowModal(true)} >Show Modal</button>
      </main>
  );
}

export default Home
