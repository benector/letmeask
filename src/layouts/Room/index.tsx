import { ReactNode } from 'react';
import { RoomLayoutContainer } from './styles';


// Types
interface RoomLayoutTypes {
    children: ReactNode;
  }


export function RoomLayout({children} : RoomLayoutTypes){
      
   
  return(
    <RoomLayoutContainer>
        {children}
    </RoomLayoutContainer>
  )
}