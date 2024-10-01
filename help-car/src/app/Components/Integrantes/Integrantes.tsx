import Image from 'next/image';
import Felipe from '../public/felipe.jpeg';
import Pedro from '../public/pedro.jpeg';
import Bruno from '../public/bruno.jpeg';

export default function Integrantes(){
    return(
        <div>

            <main>
                <div>
                    <h1>INTEGRANTES</h1>
                </div>
                                
                <div>
                    <Image src={Pedro} alt="Pedro" width={143} height={191}/>
                        <h3>NOME: Pedro Manzo Yokoo</h3>
                        <p>RM: 556115</p>
                        <p>TURMA: 1TDSPI</p>
                </div>

                <div>
                    <Image src={Felipe} alt="Felipe" width={143} height={191}/>
                        <h3>NOME: Felipe Orikasa</h3>
                        <p>RM: 557435</p>
                        <p>TURMA: 1TDSPG</p>
                </div>

                <div>
                    <Image src={Bruno} alt="Bruno" width={143} height={191}/>
                        <h3>NOME: Bruno da Silva Souza</h3>
                        <p>RM: 94346</p>
                        <p>TURMA: 1TDSPG</p>
                </div>
                    <a href="https://github.com/Brunosz2712/challenge-porto.git"target="_blank" rel="noopener noreferrer">GITHUB</a>    
            </main>
                            
        </div>
    )
}