import Layout from "./Components/layout";
import Profile from "./Components/profile";
import Repositories from "./Components/repos";
import  {ResetCSS } from "./global/resetCSS"
import GithubProvider from "./providers/github-provider";

function App() {
  return(
    <main>
      <GithubProvider>
      <ResetCSS />
      <Layout >
        <Profile />
        <Repositories />
      </Layout>
      </GithubProvider>
    </main>
  )
}

export default App;