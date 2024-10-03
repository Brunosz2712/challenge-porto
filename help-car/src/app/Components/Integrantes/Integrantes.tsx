import Image from 'next/image';
import Felipe from '../public/felipe.jpeg';
import Pedro from '../public/pedro.jpeg';
import Bruno from '../public/bruno.jpeg';

export default function Integrantes(){
    return(
        <div className="bg-gradient-to-b from-black to-[#4D0658] h-[438px] rounded-[10.16px] mt-[5%] mb-[5%]">

            <main>
                <div>
                    <h1  className="flex justify-center text-center text-[34.12px]">INTEGRANTES</h1>
                </div>

                <div className="flex justify-around mt-auto mr-auto">

                    <div className="flex flex-col items-center">
                        <Image className="w-[143px] h-[191px] rounded-[15px]" src={Pedro} alt="Pedro"/>
                        <h3 className="text-center text-[#d9d9d9] text-[110%]">NOME: Pedro Manzo Yokoo</h3>
                        <p className="text-center text-[#d9d9d9] text-[100%]">RM: 556115</p>
                        <p className="text-center text-[#d9d9d9] text-[100%]">TURMA: 1TDSPI</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Image className="w-[143px] h-[191px] rounded-[15px]" src={Felipe} alt="Felipe" />
                        <h3 className="text-center text-[#d9d9d9] text-[100%]">NOME: Felipe Orikasa</h3>
                        <p className="text-center text-[#d9d9d9] text-[100%]">RM: 557435</p>
                        <p className="text-center text-[#d9d9d9] text-[100%]">TURMA: 1TDSPG</p>
                    </div>


                    <div className="flex flex-col items-center">
                        <Image className="w-[143px] h-[191px] rounded-[15px]"  src={Bruno} alt="Bruno"/>
                            <h3 className="text-center text-[#d9d9d9] text-[110%]">NOME: Bruno da Silva Souza</h3>
                            <p className="text-center text-[#d9d9d9] text-[110%]">RM: 94346</p>
                            <p className="text-center text-[#d9d9d9] text-[110%]">TURMA: 1TDSPG</p>
                    </div>
                </div>
                <a className="flex flex-col items-center text-white no-underline" href="https://github.com/Brunosz2712/challenge-porto.git"target="_blank" rel="noopener noreferrer">GITHUB</a>     
            </main>
                            
        </div>
    )
}