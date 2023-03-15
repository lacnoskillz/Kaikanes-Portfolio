import React from 'react';
import resume from '../../images/kaikaneresume.pdf'
import { FaReact, FaNode } from "react-icons/fa";
import { SiMongodb, SiSequelize, SiPwa } from "react-icons/si";
import { DiNpm, DiCss3 } from 'react-icons/di'
import { TbBrandJavascript } from 'react-icons/tb'
import { GrMysql } from 'react-icons/gr'
import '../../styles/Resume.css'
// import React
// import icons for Resume component
// import resume from images folder and make it downloadable
export default function Resume() {
  return (
    <div className='resumecontainer'>
      <h2>Resume:</h2>
      <div>
        Download resume <a href={resume} download> here</a>
      </div> <br />
      <h3>Experienced in:</h3>
      <div>
        React <FaReact size='3em' />
      </div>
      <div>
        MongoDb <SiMongodb size='3em' />
      </div>
      <div>
        Express <DiNpm size='3em' />
      </div>
      <div>
        Node <FaNode size='3em' />
      </div>
      <div>
        Javascript <TbBrandJavascript size='3em' />
      </div>
      <div>
        CSS <DiCss3 size='3em' />
      </div>
      <div>
        Mysql <GrMysql size='3em' />
      </div>
      <div>
        Sequelize <SiSequelize size='3em' />
      </div>
      <div>
        ProgressiveWebApps <SiPwa size='3em' />
      </div>
    </div>
  );
}
