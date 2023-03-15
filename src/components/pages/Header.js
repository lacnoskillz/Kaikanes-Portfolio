import React from 'react';
import NavTabs from '../Navigation';
import { GiBigWave } from "react-icons/gi";
import '../../styles/Header.css'
//import react and Navigation component
//imports stlye for header
//
export default function Header() {
  return (
    <div className='headerdiv'>
      <h1>Kaikane <GiBigWave size='2em' /></h1>
    </div>
  );
}
