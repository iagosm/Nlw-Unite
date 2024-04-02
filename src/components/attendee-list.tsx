import { Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input className="bg-transparent flex-1 outline-none"  type="text" placeholder="Buscar participante"/> 
        </div>
      </div>
      <div className='border border-white/10 rounded-lg'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10'>
              <th className='py-3 px-2.5 font-semibold text-left'>
                <input type="checkbox" />
              </th>
              <th className='py-3 px-2.5 font-semibold text-left'>Código</th>
              <th className='py-3 px-2.5 font-semibold text-left'>Participante</th>
              <th className='py-3 px-2.5 font-semibold text-left'>Data da inscrição</th>
              <th className='py-3 px-2.5 font-semibold text-left'>Data do check-in</th>
              <th className='py-3 px-2.5 font-semibold text-left'></th>
            </tr> 
          </thead>
          <tbody>
            <tr>
              <td className='py-3 px-2.5'>
                <input type="checkbox" />
              </td>
              <td className='py-3 px-2.5'>123131</td>
              <td className='py-3 px-2.5'>
                <div>
                  <span>Iago Sousa Miranda</span>
                  <span>iagosousa201486@gmail.com</span>
                </div>
              </td>
              <td className='py-3 px-2.5'>7 dias atrás</td>
              <td className='py-3 px-2.5'>3 dias atrás</td>
              <td className='py-3 px-2.5'></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Mostrando 10 de 228 itens</td>
              <td colSpan={3}>Página 1 de 23</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

// 1:06