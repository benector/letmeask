

import { ReactNode } from 'react';
import { AuthFormContainer } from './styles'

interface FormTypes {
    children: ReactNode;
  }
export function FormContainer({children} : FormTypes){
  return(
    <AuthFormContainer>
        {children}
    </AuthFormContainer>
  )
}