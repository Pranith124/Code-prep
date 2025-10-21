
import { Landing } from './components/landing'
import './App.css'
import { Signin } from './components/signin';



// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <Signin></Signin>

    </>
  )
}

export default App
