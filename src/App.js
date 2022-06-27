import Layout from "./Components/layout";
import Profile from "./Components/profile";

function App() {
  return(
    <main>
      <Layout >
        <Profile />
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>

    </main>
  )
}

export default App;