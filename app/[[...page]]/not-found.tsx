import MainHero from '@/layouts/MainHero'
import MainLayout from '@/layouts/MainLayout'
import Container from '@/ui/Container'
import { notFoundHero } from '@/utils/constants'
import { Button, Center, Title } from '@mantine/core'
import Link from 'next/link'



export default function NotFound() {
  return (
    <MainLayout Hero={<MainHero {...notFoundHero} />}>
      <Container isCentered>
        <Center p="xl">
          <Button component={Link} href="/" size="lg" color="cyan">Go back to the homepage</Button>
        </Center>
      </Container>
    </MainLayout>
  )
}
