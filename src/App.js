
import React from 'react'
import Header from './components/Header';


// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello</h1>
//     </div>

//   );
// }

/*
class App extends React.Component{

  render(){
    return <h1>Hello from a class</h1>
  }
}

*/

const App = ()=>{
  return(
    <div className='container'>
      {/* <Header title={1}/> */}
      <Header />

    </div>
  )
}



export default App;