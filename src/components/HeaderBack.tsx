'use client'

import { useRouter } from 'next/router'
import Image from 'next/image'
import img from '@/public/images/perfil/logo.png'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function HeaderBack() {
  const router = useRouter()

  return (
    <header className="bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto px-4 py-3 flex items-center space-x-4">
        {/* Botão de voltar */}
        <button
          onClick={() => router.push('/')}
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Logo e nome */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image
            src={img}
            alt="Logo VS Web & Apps"
            width={40}
            height={40}
            priority
            className="w-auto h-10"
          />
          <span className="text-xl font-semibold hidden sm:inline">VS Web & Apps</span>
        </Link>
      </div>
    </header>
  )
}
