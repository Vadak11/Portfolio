import {Sidebar} from "../components/Sidebar.jsx";
import {VerticalSlideCarousel} from "../components/VerticalSlideCarousel.jsx";
// eslint-disable-next-line react/prop-types
export const Proyects = ({isEnglishSelected}) => {
    return (
        <>
            <div className="min-h-screen w-screen bg-bg-dark">
                <Sidebar isEnglishSelected={isEnglishSelected}/>

                <div className="p-4 sm:ml-60 flex-grow overflow-auto">
                    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                        <div className="flex items-center justify-center h-48 mb-4">
                            <h1 className="text-6xl text-gray-100">
                                {isEnglishSelected ? "My Proyects" : "Mis Proyectos"}
                            </h1>
                        </div>
                        <VerticalSlideCarousel></VerticalSlideCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}