import { ReactNode } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageLayoutContainer } from './styles';


// Types
interface PageLayoutTypes {
    children: ReactNode;
  }

export function PageLayout({children} : PageLayoutTypes){
  return(
    <PageLayoutContainer>
        <Header/>
          <main>{children}</main>
    </PageLayoutContainer>
  )
}