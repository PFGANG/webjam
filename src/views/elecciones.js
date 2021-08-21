import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function TimeLine() {
  return (
    <div style={{lineHeight: 0}}>
      <div id="elecciones" className="wave-container-2">
        <div style={{lineHeight: 1.25}}>
          <h1 className="title-elecciones">Elecciones Presidenciales</h1>
          <p className="description-elecciones">Fechas importantes de la carrera presidencial.</p>
          <br/>
        </div>
        
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F5F8FA', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #F5F8FA' }}
            iconStyle={{ background: '#657786', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">18 de julio</h3>
            <p style={{color: "rgb(41, 42, 43)"}}>
              Primarias presidenciales legales
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F5F8FA', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #F5F8FA' }}
            iconStyle={{ background: '#657786', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">23 de agosto</h3>
            <p style={{color: "rgb(41, 42, 43)"}}>
              Plazo máximo de inscripción de candidaturas presidenciales, parlamentarias y consejeros regionales
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F5F8FA', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #F5F8FA' }}
            iconStyle={{ background: '#00ACEE', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">21 de noviembre</h3>
            <p style={{color: "rgb(41, 42, 43)"}}>
              Elecciones presidenciales y parlamentarias
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F5F8FA', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #F5F8FA' }}
            iconStyle={{ background: '#657786', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">19 de diciembre</h3>
            <p style={{color: "rgb(41, 42, 43)"}}>
              Segunda vuelta presidencial
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#F5F8FA', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #F5F8FA' }}
            iconStyle={{ background: '#657786', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">11 de marzo 2022</h3>
            <p style={{color: "rgb(41, 42, 43)"}}>
              Cambio de mando e inicio de periodo presidencial
            </p>
          </VerticalTimelineElement>
          
          
        </VerticalTimeline>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#657786" fill-opacity="0.5" d="M0,128L26.7,128C53.3,128,107,128,160,106.7C213.3,85,267,43,320,26.7C373.3,11,427,21,480,69.3C533.3,117,587,203,640,202.7C693.3,203,747,117,800,106.7C853.3,96,907,160,960,197.3C1013.3,235,1067,245,1120,250.7C1173.3,256,1227,256,1280,261.3C1333.3,267,1387,277,1413,282.7L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>

          <path fill="#F5F8FA" fill-opacity="1" d="M0,32L26.7,64C53.3,96,107,160,160,186.7C213.3,213,267,203,320,208C373.3,213,427,235,480,229.3C533.3,224,587,192,640,176C693.3,160,747,160,800,186.7C853.3,213,907,267,960,266.7C1013.3,267,1067,213,1120,197.3C1173.3,181,1227,203,1280,202.7C1333.3,203,1387,181,1413,170.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}