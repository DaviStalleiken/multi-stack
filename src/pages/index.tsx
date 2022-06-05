import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'

function MeuComponente(){
  return <div>Treinamento Web</div>
}

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo={
        <span>
          Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong>
        </span>
    }/>

      <Lista 
        pets = {[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'testestes',
            foto: 'https://escolaeducacao.com.br/wp-content/uploads/2022/01/cachorro-fofo-1-750x430.jpg'
          },
          {
            id: 2,
            nome: 'Scooby',
            historia: 'testestes',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CobH5tn7bHhWYkwQSHn5lnoV0HL6j2fTrQ&usqp=CAU'
          }
        ]}
      />
    </div>
  )
}

export default Home
