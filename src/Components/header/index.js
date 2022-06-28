import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github-hooks'

function Header() {

  const [usernameForSearch, setUserNameForSearch] = useState();
  const {getUser} = useGithub();

  const submitGetUser = () => {
    if(!usernameForSearch) return;
    return getUser(usernameForSearch)
  }

  return (
    <header>
        <S.Wrapper>
            <input type="text" onChange={submitGetUser} placeholder='Digite o nome do usuário'/>
            <button type="submit">
                <span>Buscar</span>
            </button>
        </S.Wrapper>
    </header>
  )
}

export default Header