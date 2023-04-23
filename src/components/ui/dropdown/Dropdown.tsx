import { FC } from "react"
import DropdownItem from "./DropdownItem"

interface DropdownProps {
  auth: any
}

const Dropdown:FC<DropdownProps> = ({auth}) => {

  return <ul className="bg-slate-50 rounded-md py-2 text-sm flex flex-col gap-1 w-36 capitalize absolute left-1/2 top-[110%] translate-x-[-50%] shadow-slate-300 shadow-xl border border-slate-300 text-slate-600 text-right">
    <DropdownItem className="hover:text-slate-900" link="/">Мои объявления</DropdownItem>
    <DropdownItem className="hover:text-slate-900" link="/">Настройки</DropdownItem>
    <DropdownItem className="text-red-500 hover:text-red-600" auth={auth} link="#">Выйти</DropdownItem>
  </ul>
}

Dropdown.displayName = 'dropdown'
export default Dropdown
