import {Sidebar} from "../components/Sidebar.jsx";

// eslint-disable-next-line react/prop-types
export const Contact = ({isEnglishSelected}) => {
    return (
        <>
            <div className="min-h-screen w-screen bg-bg-dark flex items-center justify-center">
                <Sidebar isEnglishSelected={isEnglishSelected}/>

                <div className="p-4 sm:ml-64 flex-grow overflow-auto ">
                    <section className=" h-full w-full">
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white pb-8">{isEnglishSelected ? "Contact Me" : "Contáctame"}</h2>

                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 font-medium text-gray-900 dark:text-gray-300">{isEnglishSelected?"Your Email":"Tu Email"}</label>
                                    <input type="email" id="email"
                                           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                           placeholder="name@email.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="subject"
                                           className="block mb-2 font-medium text-gray-900 dark:text-gray-300">{isEnglishSelected?"Subject":"Motivo"}</label>
                                    <input type="text" id="subject"
                                           className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                           placeholder={isEnglishSelected?"The reason of your message":"El motivo de tu mensaje"} required/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message"
                                           className="block mb-2 text-gray-900 dark:text-gray-300">{isEnglishSelected?"Your Message":"Tu Mensaje"}</label>
                                    <textarea id="message" rows="6"
                                              className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                              placeholder={isEnglishSelected ? "Leave a comment..." : "Deja un comentario..."}></textarea>
                                </div>
                                <button type="submit"
                                        className="opacity-90 py-3 px-5 text-center text-bg-darker rounded-lg bg-neon-green sm:w-fit hover:opacity-100 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{isEnglishSelected ? "Send" : "Enviar"}
                                </button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}