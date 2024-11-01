import Image from 'next/image';

export default function Integrantes() {
    return (
        <div className="integrantes bg-gradient-to-b from-black to-[#4D0658] rounded-[10.16px] mt-[5%] mb-[5%] p-4">
            <main className="max-w-6xl mx-auto">
                <div className="titulo text-center mb-8">
                    <h1 className="integrantesH1 text-center text-[300%] text-[#00a1fc] font-sans font-['Roboto']">
                        INTEGRANTES
                    </h1>
                </div>

                <div className="grupo flex flex-col md:flex-row justify-around items-center gap-6">
                    <div className="pedro1 flex flex-col items-center">
                        <Image className="pedro rounded-[15px] mb-2" src="/img/pedro.jpeg" alt="Pedro" width={143} height={191} />
                        <h3 className="text-[#d9d9d9] text-[110%] font-['Roboto']">NOME: Pedro Manzo Yokoo</h3>
                        <p className="text-[#d9d9d9] font-['Roboto']">RM: 556115</p>
                        <p className="text-[#d9d9d9] font-['Roboto']">TURMA: 1TDSPI</p>
                    </div>

                    <div className="felipe2 flex flex-col items-center">
                        <Image className="felipe rounded-[15px] mb-2" src="/img/felipe.jpeg" alt="Felipe" width={143} height={191} />
                        <h3 className="text-[#d9d9d9] text-[110%] font-['Roboto']">NOME: Felipe Orikasa</h3>
                        <p className="text-[#d9d9d9] font-['Roboto']">RM: 557435</p>
                        <p className="text-[#d9d9d9] font-['Roboto']">TURMA: 1TDSPG</p>
                    </div>

                    <div className="bruno3 flex flex-col items-center">
                        <Image className="bruno rounded-[15px] mb-2" src="/img/bruno.jpeg" alt="Bruno" width={143} height={191} />
                        <h3 className="text-[#d9d9d9] text-[110%] font-['Roboto']">NOME: Bruno da Silva Souza</h3>
                        <p className="text-[#d9d9d9] font-['Roboto']">RM: 94346</p>
                        <p className="text-[#d9d9d9] font-['Roboto']">TURMA: 1TDSPG</p>
                    </div>
                </div>

                <div className="gitHub text-center mt-8">
                    <a className="bg-[#00a1fc] text-white px-6 py-2 rounded hover:bg-black transition duration-200 font-['Roboto']" 
                       href="https://github.com/Brunosz2712/challenge-porto.git" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        GITHUB
                    </a>
                </div>
            </main>
        </div>
    );
}
