import { FC } from "react";
import { List, Search } from "lucide-react";
import Link from "next/link";

import Button from "@/ui/Button";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";

interface headerProps {}

const Nav: FC = ({}) => {
  return (
    <nav className="container mx-auto py-6 px-2 flex gap-4 flex-wrap-reverse lg:flex-nowrap justify-center">
      <Heading size="lg" className="flex-shrink-0 order-last md:order-first">
        <Link href="/">Доска объявлений</Link>
      </Heading>
      <Button size="sm" variant="outline">
        <List className="md:mr-2 w-4 h-4" /> <span className="hidden md:inline-block">Все категории</span>
      </Button>
      <form className="flex justify-self-stretch flex-grow">
        <Input type="text" className="rounded-l-md border-r-0" />
        <Button
          variant="blue"
          size="sm"
          animate="none"
          className="rounded-l-none"
        >
          <span className="hidden md:inline-block">Найти</span> <Search className="md:ml-2 w-4 h-4" />
        </Button>
      </form>
    </nav>
  );
};

Nav.displayName = "Navigation";

export default Nav;
