import React from "react";
import Link from "next/link";
import { Anchor, Group } from "@mantine/core";
import { IconExternalLink, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

type SocialMediaIconsType = {};

const SocialMediaIcons: React.FC<SocialMediaIconsType> = (props) => (
  <>
    <Group align="center" gap={"xl"}>
      <Anchor
        component={Link}
        href='https://www.linkedin.com/in/margot-martin-realtor'
        rel="nofollow"
        target='_blank'
      >
        <IconBrandLinkedin size={30} color="#808080" />
      </Anchor>

      <Anchor
        component={Link}
        href='https://www.instagram.com/margotmartinthebay'
        rel="nofollow"
        target='_blank'
      >
        <IconBrandInstagram size={30} color="#808080" />
      </Anchor>

      <Anchor
        component={Link}
        href='https://www.grubbco.com/agent-profile/margot-martin-109779059'
        rel="nofollow"
        target='_blank'
      >
        <IconExternalLink size={30} color="#808080" />
      </Anchor>
    </Group>
  </>
)

export default SocialMediaIcons;