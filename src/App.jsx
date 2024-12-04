import { MantineProvider, Button } from '@mantine/core';
// Styles import to add ALL MantineUI styles
import '@mantine/core/styles.css';

function App() {

  return (
    <MantineProvider forceColorScheme='dark'>
        <h1>Cleared App</h1>
        <Button>Click Here</Button>
    </MantineProvider>
  )
}

export default App
