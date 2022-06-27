import Layout from "./Components/layout";

function App() {
  return(
    <main>

      <Layout >
        <div>
          <img src="https://avatars.githubusercontent.com/u/74997292?v=4" alt="avatar do usuario" /> 
          <h1>Guilherme Costa</h1>
          <h3>Username</h3>
          <span>GuilhermeCostaDF</span>
          <div>
            <h4>Followers</h4>
            <span>10</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>10</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>10</span>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>

    </main>
  )
}

export default App;