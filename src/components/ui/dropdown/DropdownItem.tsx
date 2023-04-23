import Link from "next/link"
import { FC, HTMLAttributes, ReactNode } from "react"

interface DropdownItemType extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
  link: string
  auth?: any
}

const DropdownItem:FC<DropdownItemType> = ({children, link, auth, ...props}) => {
  return <li {...props} onClick={()=> auth ? auth.signOut() : null}>
    <Link  className="hover:bg-slate-100 py-1 px-3 w-full inline-block" href={link}>
      {children}
    </Link>
  </li>
}

DropdownItem.displayName = 'dropdown item'
export default DropdownItem
