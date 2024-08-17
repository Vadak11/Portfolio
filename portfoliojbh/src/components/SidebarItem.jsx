import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SidebarItem = ({route, svg, children, active}) => {
    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate(route);
    }

    return (
        <li className={"py-2 mb-8"}>
            <a onClick={handleNavigate}
               className={`cursor-pointer flex items-center p-2 rounded-lg text-gray-100 hover:bg-neon-green hover:text-bg-dark group transition-all duration-200 ${active===true ? 'bg-bg-dark text-white' : ''}`}>
                {svg}
                <span className="ms-3 ">{children}</span>
            </a>
        </li>
    )
}