import '@mantine/core/styles.css';
import { MantineProvider, Button } from '@mantine/core';

function App() {

  return (
    <MantineProvider forceColorScheme='dark'>
        <h1>Cleared App</h1>
        <Button variant='filled'>Click Here</Button>
    </MantineProvider>
  )
}

export default App
