import React from 'react';
import './App.css';


import { BrowserRouter as Router,  Routes, Route  } from 'react-router-dom';
import {ApolloClient , InMemoryCache , ApolloProvider} from '@apollo/client'
import Sidehead from './components/Sidehead';
import Home from './pages/Home';
import Catagories from './pages/Catagories';
import ReviewDetails from './pages/ReviewDetails';

//apollo client
const client=new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache:new InMemoryCache()
})
function App() {
  return (
<>
<Router>
  <ApolloProvider client={client}>
    <div className="App">
      
      <Sidehead/>
      
      
      <Routes>
      <Route exact path='/' exact element={<Home/>} />
       <Route exact path='/catagories/:id' exact element={<Catagories/>} />
        <Route exact path='/reviewdetails/:id' exact element={<ReviewDetails/>} />
      </Routes>
    </div>
    </ApolloProvider>A
    </Router>
</>
  );
}

export default App;
