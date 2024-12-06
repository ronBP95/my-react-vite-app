import { MantineProvider, Button, Flex } from '@mantine/core';
// Styles import to add ALL MantineUI styles
import '@mantine/core/styles.css';

// Component Imports
import { Header, Hero } from './components/'

function App() {

  return (
    <MantineProvider forceColorScheme='dark'>
        <Header />
        <Hero />
    </MantineProvider>
  )
}

export default App
