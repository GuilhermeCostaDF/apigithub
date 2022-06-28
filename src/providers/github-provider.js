import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api';

export const GithubContext = createContext({
  loading: false,

  user: {

  },

  repositories: [],

  starred: [],

});

const GithubProvider = ( {children} ) =>  {

  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
      login: undefined,
      name: 'Guilherme Costa',
      html_url: undefined,
      company: undefined,
      location: undefined,
      bio: undefined,
      blog: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },

    repositories: [],

    starred: [],
  } );

  const getUser =  (username) => {
    api.get(`user/${username}`).then(({data:{user}}) => {
      setGithubState(prevState => ({
      ...prevState, 
      user: {
        login: user.login,
        name: user.name,
        html_url: user.html_url,
        company: user.company,
        location: user.location,
        bio: user.bio,
        blog: user.blog,
        followers: user.followers,
        following: user.following,
        public_gists: user.public_gists,
        public_repos: user.public_repos,
      }}))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), [])
  }


  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider;