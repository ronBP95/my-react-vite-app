import { useState } from 'react';
import { Anchor, Box, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { FaComputer } from "react-icons/fa6";

const userLinks = [
    { link: '#', label: 'Privacy & Security' },
    { link: '#', label: 'Account settings' },
    { link: '#', label: 'Support options' },
  ];
  
  const mainLinks = [
    { link: '#', label: 'Book a demo' },
    { link: '#', label: 'Documentation' },
    { link: '#', label: 'Community' },
    { link: '#', label: 'Academy' },
    { link: '#', label: 'Forums' },
  ];

const Header = () => {
// State
const [opened, { toggle }] = useDisclosure(false);
const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
    <Container className={classes.inner}>
      <div className={classes.logo}>
        <FaComputer size={35}/>
        <div className={classes.logo}>Tech Support</div>
      </div>
      <Box className={classes.links} visibleFrom="sm">
        <Group justify="flex-end">{secondaryItems}</Group>
        <Group gap={0} justify="flex-end" className={classes.mainLinks}>
          {mainItems}
        </Group>
      </Box>
      <Burger
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
        hiddenFrom="sm"
      />
    </Container>
  </header>
  )
}

export default Header