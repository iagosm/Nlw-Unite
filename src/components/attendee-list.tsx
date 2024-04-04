import { Search, MoreHorizontal, ChevronsLeft, ChevronRight, ChevronsRight, ChevronLeft } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableCell } from './table/table-cell'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { attendees } from '../data/attendees'

dayjs.extend(relativeTime);
dayjs.locale('pt-br')

export function AttendeeList() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const totalPage = Math.ceil(attendees.length / 10);

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }
  
  function goToLastPage() {
    setPage(totalPage)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg  flex items-center gap-3">
          <Search className='size-4 text-emerald-300' />
          <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"  type="text" placeholder="Buscar participante"/> 
        </div>
      </div>
      <Table>
        <thead>
          <tr className='border-b border-white/10'>
            <TableHeader>
              <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 accent-orange-400 checked:bg-orange-400'/>
            </TableHeader>
            <TableHeader style={{ width: 48}}>
              Código
            </TableHeader>
            <TableHeader>
              Participante
              </TableHeader>
            <TableHeader>
              Data da inscrição
            </TableHeader>
            <TableHeader>
              Data do check-in
            </TableHeader>
            <TableHeader style={{ width: 64}}></TableHeader>
          </tr> 
        </thead>
        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendees) => {
            return (
              <TableRow key={attendees.id}>
                <TableCell>
                  <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10 accent-orange-400'/>
                </TableCell>
                <TableCell>{attendees.id}</TableCell>
                <TableCell>
                  <div className='flex flex-col gap-1'>
                    <span className="font-semibold text-white">{attendees.name}</span>
                    <span>{attendees.email}</span>
                  </div>
                </TableCell>
                <TableCell>{dayjs().to(attendees.createdAt)}</TableCell>
                <TableCell>{dayjs().to(attendees.checkedInAt)}</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className='size-4'/>
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell className='py-3 px-4 text-sm font-semibold text-left' colSpan={3}>Mostrando {page} de {attendees.length} itens</TableCell>
            <TableCell className='text-right'  colSpan={3}>
              <div className='inline-flex items-center gap-8 justify-end'>
                Página {page} de {totalPage}
                <div className='flex gap-1.5'>
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className='size-4'/>
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className='size-4'/>
                  </IconButton>
                  <IconButton onClick={goToNextPage} disabled={page === totalPage}>
                    <ChevronRight className='size-4'/>
                  </IconButton>
                  <IconButton onClick={goToLastPage} disabled={page === totalPage}>
                    <ChevronsRight className='size-4'/>
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}

// 1:06