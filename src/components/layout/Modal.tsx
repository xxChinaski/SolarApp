import Button from "@/ui/Button";
import Input from "@/ui/Input";
import { X } from "lucide-react";
import Heading from "../ui/Heading";
import { ReactElement } from "react";

const Login = (): ReactElement => {
  return (
    <>
      <div className="flex justify-between pb-4 items-center">
        <Heading size="sm">Авторизация</Heading>
        <div
          id="close"
          className="text-slate-400 hover:bg-slate-100 hover:text-slate-700 p-1 text-lg rounded-full cursor-pointer "
        >
          <X className="w-4 h-4" />
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <Input type="email" placeholder="Email" className="rounded-md" />
        <Input type="password" placeholder="Password" className="rounded-md" />
        <div className="flex gap-4 justify-between">
          <Button variant="blue" size="sm">
            Войти
          </Button>
          <Button variant="outline" size="sm">
            Регистрация
          </Button>
        </div>
      </form>
    </>
  );
};

const Registration = (): ReactElement => {
  return (
    <>
      <div className="flex justify-between pb-4 items-center">
        <Heading size="sm">Регистрация</Heading>
        <div
          id="close"
          className="text-slate-400 hover:bg-slate-100 hover:text-slate-700 p-1 text-lg rounded-full cursor-pointer "
        >
          <X className="w-4 h-4" />
        </div>
      </div>
      <form className="flex flex-col gap-4">
        <Input type="email" placeholder="Email" className="rounded-md" />
        <Input type="password" placeholder="Password" className="rounded-md" />
        <Input
          type="password"
          placeholder="Password again"
          className="rounded-md"
        />
        <div className="flex gap-4 justify-between">
          <Button variant="blue" size="sm">
            Зарегистрироваться
          </Button>
          <Button variant="outline" size="sm">
            Авторизация
          </Button>
        </div>
      </form>
    </>
  );
};

const Modal = (): ReactElement => {
  const modalLogin = false;
  return (
    <div className="bg-slate-900/80 fixed inset-0 grid place-items-center px-2">
      <div className="bg-slate-50 dark:bg-slate-900 max-w-md w-full p-4 rounded-md">
        {modalLogin ? <Login /> : <Registration />}
      </div>
    </div>
  );
};

Login.displayName = "Login modal";
export default Modal;
