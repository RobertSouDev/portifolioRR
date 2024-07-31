function Sobre() {
    return ( 
        <div className="w-full bg-black text-white min-h-[90vh] flex flex-col md:flex-row items-center justify-center">
            <div className="w-[80%] h-auto md:h-[80%] flex flex-col md:flex-row">
                {/* Primeira Div */}
                <div className="w-full md:w-[50%] h-[100%] flex justify-center items-center">
                    <div className="w-[50%] h-[80%] pt-10 flex">
                        <img src="src/assets/img/foto3.PNG" alt="Placeholder" />
                    </div>
                </div>
                {/* Segunda Div */}
                <div className="w-full md:w-[50%] h-[100%] flex items-center justify-center p-8 mt-4 md:mt-0">
                    <div>
                        <h1 className="text-4xl font-bold">Sobre Min</h1>
                            <br />
                        <p className="text-lg">
                        Olá! Meu nome é Robert, sou desenvolvedor front-end com foco em React e Node.js. Tenho uma forte paixão por tecnologia e desenvolvimento de soluções inovadoras que transformem ideias em realidade. Atualmente, estou me especializando na construção de aplicações web modernas e escaláveis, utilizando as melhores práticas de desenvolvimento.
                        </p>
                        <br />
                        <h1 className="text-4xl font-bold">Habilidades</h1>
                            <br />
                        <p className="text-lg">
                            <ul>
                                <li><strong>Desenvolvimento Front-End:</strong> React, JavaScript, HTML, CSS, Tailwind</li>
                                <li><strong> Back-End   :</strong> Node.js, Express.js.</li>
                                <li><strong>Outras Tecnologias:</strong>Next.js, Git, JSON Server, Java , docker, linux</li>
                                <li><strong>Design de Interfaces:</strong>Capacidade de transformar designs do Figma em projetos funcionais.</li>
                            </ul>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
