import { MantineProvider, Button } from '@mantine/core';
// Styles import to add ALL MantineUI styles
import '@mantine/core/styles.css';

// Component Imports
import { Header } from './components/'

function App() {

  return (
    <MantineProvider forceColorScheme='dark'>
        <Header />
        <Button>Click Here</Button>
    </MantineProvider>
  )
}

export default App
