import React from 'react'
import Header from '../header'
import * as Estilo from './styled'
import useGithub from '../../hooks/github-hooks'

function Layout({children}){

    
    return(
        <Estilo.WrapperLayout>
            <Header/>
            {children}
           
        </Estilo.WrapperLayout>
    )
}

export default Layout