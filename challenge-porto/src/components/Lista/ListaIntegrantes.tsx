import Felipe from '../felipe.jpeg'
import Pedro from '../pedro.jpeg'
import Bruno from '../bruno.jpeg'

export default function ListaIntegrantes(){
    return(
        
        <ul>
            <li>
            <div>
                <img src={Pedro} alt="pedro" />
                <h3>NOME: Pedro Manzo Yokoo</h3>
                <p>RM: 556115</p>
                <p>TURMA: 1TDSPI</p>
            </div>
            </li>

            <li>
            <div>
                <img src={Felipe} alt="felipe" />
                <h3>NOME: Felipe Orikasa</h3>
                <p>RM: 557435</p>
                <p>TURMA: 1TDSPG</p>
            </div>
            </li>
            
            <li>
            <div>
                <img src={Bruno} alt="bruno" />
                <h3>NOME: Bruno da Silva Souza</h3>
                <p>RM: 94346</p>
                <p>TURMA: 1TDSPG</p>
            </div>
            </li>
        </ul>
    )
}