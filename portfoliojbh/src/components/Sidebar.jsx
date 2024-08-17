// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import logo from '../assets/img/logo/new/logo.png';
import {SidebarItem} from "./SidebarItem.jsx";
import {CV} from "./CV.jsx";

// eslint-disable-next-line react/prop-types
export const Sidebar = ({isEnglishSelected}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="absolute top-0 inline-flex items-center p-2 mt-2 ms-3 text-sm  rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-60 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div
                    className="h-full px-3 pt-5 pb-3 overflow-y-auto bg-bg-darker flex flex-col rounded-e-lg justify-between">
                    <div className="flex items-center justify-center w-full mb-8 mt-5">

                        <a href="localhost:5173/about-me" className={`w-1/2 flex justify-center items-center`}>
                            <img src={logo}/>
                        </a>
                        <button
                            onClick={toggleSidebar}
                            aria-controls="logo-sidebar"
                            type="button"
                            className="absolute top-0 right-0 items-center mt-1 p-2 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        >
                            <span className="sr-only">Close sidebar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="butt"
                                 strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                        </button>
                    </div>
                    <div className={`h-0.5 bg-neon-green mb-3`}>

                    </div>
                    <div
                        className={`h-full bg-bg-darker flex flex-col justify-between`}>
                        <ul className="my-auto font-normal">
                            <SidebarItem route={"/about-me"} isEnglishSelected={isEnglishSelected} active={false} svg={<svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                 height="20" viewBox="0 0 24 24" fill="none"
                                                                 stroke="currentColor" strokeWidth="2"
                                                                 strokeLinecap="round" strokeLinejoin="arcs">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                            </svg>}>{isEnglishSelected ? "About Me" : "Sobre Mí"}</SidebarItem>

                            <SidebarItem route={"/proyects"} isEnglishSelected={isEnglishSelected} svg={<svg xmlns="http://www.w3.org/2000/svg" width="20"
                                                                       height="20" viewBox="0 0 24 24" fill="none"
                                                                       stroke="currentColor" strokeWidth="2"
                                                                       strokeLinecap="round" strokeLinejoin="arcs">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>}>{isEnglishSelected ? "Proyects" : "Proyectos"}</SidebarItem>
                            <SidebarItem route={"/values"} isEnglishSelected={isEnglishSelected} svg={<svg xmlns="http://www.w3.org/2000/svg"
                                                                            width="20" height="20" viewBox="0 0 24 24"
                                                                            fill="none" stroke="currentColor"
                                                                            strokeWidth="2" strokeLinecap="round"
                                                                            strokeLinejoin="arcs">
                                <polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>}>{isEnglishSelected ? "Values" : "Valores"}</SidebarItem>
                            <SidebarItem route={"/contact"} isEnglishSelected={isEnglishSelected}
                                         svg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs">
                                             <path
                                                 d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                             <polyline points="22,6 12,13 2,6"></polyline>
                                         </svg>}>
                                {isEnglishSelected ? "Contact" : "Contacto"}
                            </SidebarItem>
                        </ul>
                        <div>
                            <CV isEnglishSelected={isEnglishSelected}/>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};
