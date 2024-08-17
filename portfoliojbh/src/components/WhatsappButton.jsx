import whatsapp from "../assets/img/whatsapp-neon.png";

// eslint-disable-next-line react/prop-types
export const WhatsappButton = ({phoneNumber}) => {
    return (
        <>
            <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target='_blank'>
                <div className={`w-16 h-16 opacity-80 hover:opacity-100 transition-all duration-200`}
                     style={{
                         backgroundImage: `url(${whatsapp})`,
                         backgroundSize: 'cover'
                     }}>
                </div>
            </a>
        </>
    )
}