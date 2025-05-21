import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import components
const DynamicComponent = dynamic(() => import('@/components/LoginPage'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </main>
  )
}