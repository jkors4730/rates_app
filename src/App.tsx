import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'

const App:FC = () => {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <Routes/>
    </BrowserRouter>
  )
}

export default App