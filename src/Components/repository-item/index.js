import * as Estilo from './styled'

const RepositoryItem = ({name, linkToRepos, fullName})=>{
    return(
        <Estilo.Wrapper>
            <Estilo.WrapperTitle>{name}</Estilo.WrapperTitle>
        
        <Estilo.WrapperFullName>full name</Estilo.WrapperFullName>
        <Estilo.WrapperLink href= {linkToRepos} target="_blank" rel="noreferrer">
            {fullName}
        </Estilo.WrapperLink>
        </Estilo.Wrapper>
    )
}

export default RepositoryItem