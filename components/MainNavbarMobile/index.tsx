import React from "react";
import { Burger, Divider, Drawer } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import MainNavbar from "../MainNavbar";

import styles from "./MainNavbar.module.scss";

const MainNavbarMobile: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <>
      <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="lg" size="xl" />
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<Image
          src='/icons/dark-logo.svg'
          alt='margot logo'
          width={200}
          height={40}
        />}
        closeButtonProps={{
          icon: <IconX />,
        }}
        hiddenFrom="lg"
        zIndex={1000000}
      >
        <Divider my="sm" />

        <MainNavbar orientation='vertical' />
      </Drawer>
    </>
  )
};

export default MainNavbarMobile;