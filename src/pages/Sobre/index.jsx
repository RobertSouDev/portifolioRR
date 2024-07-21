function Sobre() {
    return ( 
        <div className="w-full h-[55rem] flex items-center justify-center">
            <div className=" w-[80%] h-[80%] flex">
                <div className=" w-[50%] h-[100%] flex justify-center items-center">
                    <div className="w-[50%] h-[80%] pt-10">
                        <img src="https://via.placeholder.com/300" alt="Placeholder" />
                    </div>
                </div>
                <div className=" w-[50%] h-[100%] flex items-center justify-center p-8">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h1 className="text-4xl font-bold">ALEX SCHMITZ</h1>
                        <h2 className="text-2xl font-semibold">SOBRE ALEX SCHMITZ</h2>
                        <p className="text-lg">
                            Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. É fácil! Basta clicar em "Editar Texto" ou clicar duas vezes sobre mim e você poderá adicionar o seu próprio conteúdo e trocar fontes. Sou um ótimo lugar para você contar sua história e permitir que seus clientes saibam um pouco mais sobre você.
                        </p>
                        <p className="text-lg">
                            Este é um ótimo espaço para escrever um texto longo sobre a sua empresa e seus serviços. Você pode usar esse espaço para entrar em detalhes sobre a sua empresa. Fale sobre a sua equipe e sobre os serviços prestados por você. Conte aos seus visitantes sobre como teve a ideia de iniciar o seu negócio e o que o torna diferente de seus competidores. Faça com que sua empresa se destaque e mostre quem você é.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sobre;
