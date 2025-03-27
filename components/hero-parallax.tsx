"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const HeroParallax = ({
  products,
  className,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
  className?: string
}) => {
  const firstRow = products.slice(0, 3)
  const secondRow = products.slice(3, 6)
  const thirdRow = products.slice(6, 9)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig)
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 0]), springConfig)

  return (
    <div
      ref={ref}
      className={cn("h-[120vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto", className)}
    >
      <div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
        <motion.div
          style={{
            rotateZ,
            translateY,
            translateX,
            rotateX,
            opacity,
          }}
          className="flex flex-row space-x-20"
        >
          {firstRow.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </motion.div>
      </div>
      <div className="flex flex-row mb-20">
        <motion.div
          style={{
            rotateZ,
            translateY,
            translateXReverse,
            rotateX,
            opacity,
          }}
          className="flex flex-row space-x-20"
        >
          {secondRow.map((product) => (
            <ProductCard key={product.title} product={product} translate={translateXReverse} />
          ))}
        </motion.div>
      </div>
      <div className="flex flex-row-reverse space-x-reverse space-x-20">
        <motion.div
          style={{
            rotateZ,
            translateY,
            translateX,
            rotateX,
            opacity,
          }}
          className="flex flex-row space-x-20"
        >
          {thirdRow.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export const ProductCard = ({
  product,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
}) => {
  return (
    <Link
      href="/"
      className="group/product h-96 w-[30rem] relative flex-shrink-0 rounded-xl border border-black/5 bg-gray-100 p-4 dark:border-white/5 dark:bg-neutral-900"
    >
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          fill
          className="h-full w-full object-cover object-center transition duration-200 group-hover/product:scale-105"
        />
        <div className="absolute inset-0 z-10 bg-black/20 transition duration-200 group-hover/product:bg-black/40" />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h2 className="text-xl font-bold text-white">{product.title}</h2>
        </div>
      </div>
    </Link>
  )
}

