import CardIcon from "../CardIcon";
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <div className="w-full flex items-center flex-col gap-10 ">
            <footer className="w-[90%] h-[10vh] flex justify-around shadow-top p-10">
                <div className="w-[40rem] h-[5rem]">
                    <h6 className="cormorant-garamond-regular font-serif text-gray-500 text-base">
                        © 2024 por ROBERT ROGER.
                    </h6>
                </div>
                <div className="w-[20rem] h-[10rem]">
                    <div>
                        <h2 className="cormorant-garamond-regular font-serif text-gray-500 text-base">
                            CONTATO
                        </h2>
                    </div>
                    <div>
                        <p className="text-base">
                            {/* Adicione o conteúdo do parágrafo aqui, se necessário */}
                        </p>
                    </div>
                </div>
                <div className="w-[30rem] h-[10%] flex justify-around">
                    <CardIcon valor={<FaWhatsapp className="text-gray-500 text-4xl" />} />
                    <CardIcon valor={<FaLinkedinIn className="text-gray-500 text-4xl" />} />
                    <CardIcon valor={<FaGithub className="text-gray-500 text-4xl" />} />
                </div>
            </footer>
        </div>
    );
}

export default Footer;
