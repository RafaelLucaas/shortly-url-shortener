import { Button } from '@/components/Button'
import { CardInfo } from '@/components/CardInfo'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { BoostMenu } from '@/components/BoostMenu'
import { ShortLinkInput } from '@/components/ShortLinkInput'
import Image from 'next/image'
import Link from 'next/link'
import { BsBarChartLine, BsSpeedometer } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { ShortedLinkMenu } from '@/components/ShortedLinkMenu'

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex flex-col overflow-x-hidden bg-gray-100">
      <section className="z-10 flex flex-col items-center justify-center pt-24 bg-white lg:pt-48 px-7">
        <div className="max-[600px]:flex max-[600px]:flex-col flex flex-row-reverse">
          <div className='text-center'>
            <h1 className='text-[40px] leading-tight font-[700] text-neutralverydarkblue mb-4 lg:text-6xl'>More than just shorter links</h1>
            <p className="text-lg font-[500] text-neutralgray">Build your brand's recognition and get detailed insights on how your links are perfoming.</p>
            <div className="flex justify-center mt-7">
              <div className="w-48">
                <Link href="#">
                  <Button type="button">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[90px] w-full relative flex justify-center">
          <div className="relative z-20 flex flex-col items-center w-full gap-5">
            <ShortLinkInput />
          </div>
          <div className="absolute z-10 w-screen h-full bg-gray-100 top-[90px]"></div>
        </div>
      </section>
      <section className='z-0 pb-24 bg-gray-100 px-7'>
        <div className="text-center">
          <h2 className="text-3xl font-[700] text-neutralverydarkblue mb-4">Advanced Statics</h2>
          <p className="text-base font-[500] text-neutralgray">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative z-20 lg:flex lg:gap-6">
            <div className="mt-20">
              <CardInfo icon={<BsBarChartLine className='w-10 h-10' />} title="Brand Recognition" text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content." />
            </div>
            <div className="mt-20 lg:pt-10">
              <CardInfo icon={<BsSpeedometer className='w-10 h-10' />} title="Detailed Records" text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
            </div>
            <div className="mt-20 lg:pt-20">
              <CardInfo icon={<FaPaintBrush className='w-10 h-10' />} title="Fully Customizable" text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
            </div>
          </div>
          <div className="absolute w-2 left-1/2 translate-x-[-50%] top-14 z-10 h-[90%] bg-primarycyan lg:h-2 lg:w-[990px] lg:top-52"></div>
        </div>
      </section>
      <section>
        <div>
          <BoostMenu />
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
