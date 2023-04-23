const Navigation = (props: { city: string }) => {
  return (
    <nav>
      <ul className="flex divide-x divide-slate-300">
        <li className="text-slate-400 text-sm cursor-pointer pr-2">
          <a href="#">{props.city}</a>
        </li>
        <li className="text-slate-400 text-sm cursor-pointer px-2">
          <a href="#">Электроника</a>
        </li>
        <li className="text-slate-400 text-sm cursor-pointer px-2">
          <a href="#">Электрогитары</a>
        </li>
        <li className="text-slate-400 text-sm cursor-pointer pl-2">
          <a href="#">Fender</a>
        </li>
      </ul>
    </nav>
  );
};
Navigation.displayName = "navigation";
export default Navigation;
