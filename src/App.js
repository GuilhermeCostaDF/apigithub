import Layout from "./Components/layout";
import Profile from "./Components/profile";
import  {ResetCSS } from "./global/resetCSS"

function App() {
  return(
    <main>
      <ResetCSS />
      <Layout >
        <Profile />
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>

    </main>
  )
}

export default App;