import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {

  return (
    <MantineProvider forceColorScheme='dark'>
      <div>
        Cleared App
      </div>
    </MantineProvider>
  )
}

export default App
