interface MeuBotaoProps {
  texto: string
}

function MeuBotao(props: MeuBotaoProps) {
  return <button className="bg-orange-500 h-10 px-3 rounded">{props.texto}</button>
}

export function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <MeuBotao texto="ola iago"/>
    </div>
  )
}
