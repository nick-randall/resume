import { FC } from "react";

interface MenuItemProps {
  name: string
}
 
const MenuItem: FC<MenuItemProps> = ({name}) => {
  return ( 
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: 30}}>
      <img src={`./${name}.png`} style={{height: "2rem", width: "2rem"}} alt={name} />
      {name}
    </div>
   );
}
 
export default MenuItem;