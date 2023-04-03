import { Dispatch, FC } from "react";
import MenuItem from "./MenuItem";

interface MenuTripleProps {
  setExitingPage: Dispatch<React.SetStateAction<boolean>>;
}

const MenuTriple: FC<MenuTripleProps> = ({setExitingPage}) => {
  return (
    <div className="flex-row">
      <MenuItem name="connect" setExitingPage={setExitingPage} />
      <MenuItem name="projects" setExitingPage={setExitingPage} />
      <MenuItem name="frameworks" setExitingPage={setExitingPage} />
    </div>
  );
};

export default MenuTriple;
