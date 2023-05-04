import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Input } from '@/components'
import { AddBlogForm } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <AddBlogForm/>
    </>
  )
}
