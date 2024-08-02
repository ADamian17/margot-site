import { notFoundHero } from '@/utils/constants'
import MainLayout from '@/layouts/MainLayout'
import NotFoundHero from '@/layouts/NotFoundHero'

export default function NotFound() {
  return (
    <MainLayout>
      <NotFoundHero {...notFoundHero} />
    </MainLayout>
  )
}
