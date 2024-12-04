import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider forceColorScheme='dark'>
        <h1>Cleared App</h1>
    </MantineProvider>
  )
}

export default App
