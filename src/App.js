import Layout from "./Components/layout";
import Profile from "./Components/profile";
import Repositories from "./Components/repos";
import  {ResetCSS } from "./global/resetCSS"

function App() {
  return(
    <main>
      <ResetCSS />
      <Layout >
        <Profile />
        <Repositories />
      </Layout>

    </main>
  )
}

export default App;