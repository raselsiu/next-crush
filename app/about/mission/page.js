import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import BananaImg from '@/public/images/banana.jpg'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ["latin"], weight: "300" });


export default function Mission() {
  return (
    <div>
      <h3>Mission</h3>
      <br />
      <p className={poppins.className}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat recusandae magni ipsum molestias saepe ducimus accusamus
        repellat distinctio voluptatibus perferendis quod earum nostrum accusantium, optio cupiditate adipisci cumque, facilis aperiam.
        lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore harum, voluptates ab similique dolor ducimus nobis reprehenderit minima minus quia porro, natus ipsa placeat odit tempore, cum iusto. Facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur expedita tempore minima voluptate est quasi voluptatum! Fugiat corporis corrupti quisquam assumenda, ut asperiores impedit odit animi, porro sequi accusantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus perspiciatis,
        quo, fugiat quasi architecto praesentium vero inventore error quia ut odio nam est adipisci sint minus sunt, saepe atque ea.</p>
      <br />

      <Image placeholder='blur' src={BananaImg} alt='Banana' quality={100} />

      <Button />
    </div>
  )
}
