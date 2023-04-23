"use client";

import { FC, useEffect, useRef, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { LogOut, Plus, User } from "lucide-react";

import Button from "@/ui/Button";
import Nav from "@/components/layout/Header/Nav";
import Link from "next/link";

import initFirebase from "@/app/api/auth/fireauth";
import Dropdown from "@/components/ui/dropdown/Dropdown";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, loading] = useAuthState(auth);
  const [userModal, setUserModal] = useState(false)

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  const UserModalDropdown:FC = () => {
    const modalRef = useRef(null)
    useEffect(() => {
      function handleClickOutsideModal() {
        if (modalRef.current && !modalRef.current.contains(event?.target)) {
          setUserModal(false)
        } 
      }
      document.addEventListener('click', handleClickOutsideModal)
      return () => {
        document.removeEventListener('click', handleClickOutsideModal)
      }
    }, [])

    return <div ref={modalRef}><Dropdown auth={auth}/></div>
  }


  return (
    <header className="border-b border-slate-200">
      <div className="bg-slate-800 ">
        <div className="container mx-auto flex justify-end gap-4 py-3 px-2">
          {user ? (
            <Button
              id='user-button'
              onClick={() =>  setUserModal(prev => !prev) }
              variant="invert" size="sm" className="text-slate-50 relative">
              <User className="mr-2 w-4 h-4" />
              {user.displayName}
              {userModal 
                ?(<UserModalDropdown/>)
                : null }
            </Button>
          ) : (
            <Button
              onClick={() => {
                signIn();
              }}
              variant="invert"
              size="sm"
              className="text-slate-50"
            >
              <User className="mr-2 w-4 h-4" />
              Войти
            </Button>
          )}
          <Link href="/new-product/">
            <Button variant="blue" size="sm">
              Новое объявление <Plus className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Nav />
    </header>
  );
};

Header.displayName = "Header";

export default Header;
