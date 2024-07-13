import MainLayout from '@/layouts/MainLayout'
import Container from '@/ui/Container'
import Grid from '@/ui/grid-system/Grid'
import Link from 'next/link'



export default function NotFound() {
  return (
    <MainLayout pathname="/not-found">
      <Container isCentered>
        <Grid>
          <Grid.Col span={12}>
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>

            <Link href="/">
              Go back to the homepage
            </Link>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  )
}