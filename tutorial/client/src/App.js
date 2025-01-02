import './App.css';
import UserDatas from "./components/UserDatas"
import MoviesDatas from "./components/MoviesDatas"

import { ApolloProvider,InMemoryCache,ApolloClient} from "@apollo/client"

function App() {

  const client= new ApolloClient({
    cache: new InMemoryCache(),
    uri:" http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
       <div className="App">
         <UserDatas />
         <MoviesDatas />
      </div>
    </ApolloProvider>
  );
}

export default App;
