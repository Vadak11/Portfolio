import engCV from '../assets/docs/JoshuaBolanosH_CV_Eng.pdf';
import espCV from '../assets/docs/JoshuaBolanosH_CV_Esp.pdf';
import {useState} from "react";
// eslint-disable-next-line react/prop-types
export const CV = ({isEnglishSelected}) => {

    const [cv, setCV] = useState("");
    const [cvName, setCVName] = useState("");

    console.log(espCV);

    const downloadCV = () => {
        if (isEnglishSelected) {
            setCV(engCV)
            console.log(cv)
            setCVName("JoshuaBolanosH_CV_Eng.pdf")
        } else {
            setCV(espCV)
            setCVName("JoshuaBolanosH_CV_Esp.pdf")
        }

    }

    const readCV = () => {
        if (isEnglishSelected) {
            setCV(engCV)
            setCVName("JoshuaBolanosH_CV_Eng.pdf")
        } else {
            setCV(espCV)
            setCVName("JoshuaBolanosH_CV_Esp.pdf")
        }
    }

    return (
        <>
            <div className={`w-full text-center text-white font-bold uppercase mb-3`}>
                <p>Curriculum Vitae</p>
            </div>
            <div className={`w-full h-12 flex items-center justify-center font-bold`}>
                <div onClick={downloadCV}
                     className={`mr-0.5 w-1/2 h-12 bg-neon-green rounded-l-lg text-bg-darker flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 transition-all duration-200`}>
                    <a href={cv} download={cvName}
                       className={`w-full h-full flex items-center justify-center text-black`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs">
                            <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
                        </svg>
                    </a>
                </div>
                <div onClick={readCV}
                     className={`ml-0.5 w-1/2 h-12 bg-bg-dark rounded-r-lg text-gray-100 flex items-center justify-center cursor-pointer opacity-90 hover:opacity-100 transition-all duration-200`}>
                    <a href={cv} target="_blank" className="w-full h-full flex items-center justify-center">
                        <svg className={`text-gray-100`}
                             xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}