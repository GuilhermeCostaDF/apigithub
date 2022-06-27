import React from 'react'

export default function RepositoryItem({name, linkToRepo, fullName}) {
  return (
    <div>
        <h2>{name}</h2>
        <h4>Nome completo: </h4>
        <a 
            href= {linkToRepo} 
            target="_blank" 
            rel="noreferrer">
                {fullName} 
        </a>
    </div>
  )
}
