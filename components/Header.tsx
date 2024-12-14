"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PenSquare, BookOpen, Menu, X } from 'lucide-react'
import { useWallet } from '../context/WalletContext';


export default function Header() {
  const { account, connectWallet, disconnectWallet } = useWallet();

  const [isConnected, setIsConnected] = useState(false)
  const [isContentCreator, setIsContentCreator] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const registerAsContentCreator = () => {
    setIsContentCreator(true)
  }

  return (
    <header className="bg-transparent backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl blockscribe-logo gradient-text">
          InkChain
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/articles" className="text-white hover:text-blue-400 transition-colors">
              Articles
            </Link>
            <Link href="#creators" className="text-white hover:text-blue-400 transition-colors">
              Creators
            </Link>
            <Link href="#about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            {!account ? (
              <Button onClick={connectWallet} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Connect Wallet
              </Button>
            ) : (
              <>
                {!isContentCreator && (
                  <Button onClick={registerAsContentCreator} variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                    Become a Creator
                  </Button>
                )}
                {isContentCreator && (
                  <Link href="/publish">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                      <PenSquare className="mr-2 h-4 w-4" /> Publish Article
                    </Button>
                  </Link>
                )}
              </>
            )}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            <Link href="/articles" className="block text-white hover:text-blue-400 transition-colors py-2">
              Articles
            </Link>
            <Link href="#creators" className="block text-white hover:text-blue-400 transition-colors py-2">
              Creators
            </Link>
            <Link href="#about" className="block text-white hover:text-blue-400 transition-colors py-2">
              About
            </Link>
            {!isConnected ? (
              <Button onClick={connectWallet} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                Connect Wallet
              </Button>
            ) : (
              <>
                {!isContentCreator && (
                  <Button onClick={registerAsContentCreator} variant="outline" className="w-full border-white text-white hover:bg-white hover:text-purple-600">
                    Become a Creator
                  </Button>
                )}
                {isContentCreator && (
                  <Link href="/publish" className="block">
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-purple-600">
                      <PenSquare className="mr-2 h-4 w-4" /> Publish Article
                    </Button>
                  </Link>
                )}
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}

