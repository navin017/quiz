import './App.css';
import React from 'react'
import Quiz from './QuizApp';
import StartPage from './StartPage';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

const route = createBrowserRouter([
  {path:'/',element:<StartPage/>},
  {path:'/quiz',element:<Quiz/>}
])
function App() {
  
  
  return (
    <>
   <RouterProvider router = {route}/>
    </>
   )
          
 
}

export default App;