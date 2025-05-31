'use client'

import { useRouter } from 'next/router'
import { ArrowLeft } from 'lucide-react'

export default function HeaderBack() {
  const router = useRouter()

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <a
        href='/'
        className="hover:text-blue-700 transition-colors"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ArrowLeft size={24} />
            <span className="text-2xl font-bold tracking-wide">
              Vinicius Santos
            </span>
          </div>
        </div>
      </a>
    </header>
  )
}
