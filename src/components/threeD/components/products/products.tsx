import { BackgroundParallax } from "components/generalComponents/backgroundParallax/backgroundParallax"
import backgroundSwirl from "images/background/swirl.png"
import React from "react"
import grassSignsImg from "./assets/grass_signs.png"
import breathableIcon from "./assets/icons/breathable.png"
import brightIcon from "./assets/icons/bright.png"
import durableIcon from "./assets/icons/durable.png"
import ecoSafeIcon from "./assets/icons/eco_safe.png"
import quickDryIcon from "./assets/icons/quick_dry.png"
import resusableIcon from "./assets/icons/reusable.png"
import pitchMatsImg from "./assets/pitch_mats.png"
import { Product, ProductData } from "./product/products"

const pitchMats: ProductData = {
  header: "Pitch Mats",
  image: pitchMatsImg,
  details: [
    {
      title: "Size",
      body: "220 - 800 Sq Ft",
    },
    {
      title: "Material",
      body: "POLYESTER FELT (650 GSM)",
    },
    {
      title: "Pigment",
      body: "SOLVENT BASED",
    },
    {
      title: "Method",
      body: "PRINT & PAINT FILL",
    },
  ],
  features: [
    {
      header: "REUSABLE",
      image: resusableIcon,
      body: "When pitches change or new match at venue",
    },
    {
      header: "BREATHABLE",
      image: breathableIcon,
      body: "Turf friendly substrate",
    },
    {
      header: "DURABLE",
      image: durableIcon,
      body: "Against weather & match play conditions",
    },
  ],
}

const grassSigns: ProductData = {
  header: "Grass Signs",
  image: grassSignsImg,
  details: [
    {
      title: "Size",
      body: "220 - 1500 Sq Ft",
    },
    {
      title: "Material",
      body: "PVC TYVECH TEMPLATE",
    },
    {
      title: "Pigment",
      body: "WATER BASED - REMOVABLE",
    },
    {
      title: "Method",
      body: "TEMPLATE PAINTING",
    },
  ],
  features: [
    {
      header: "QUICK DRY",
      image: quickDryIcon,
      body: "Paint with high durability & coverage",
    },
    {
      header: "ECO-SAFE",
      image: ecoSafeIcon,
      body: "Paint for both on field personnel & turf",
    },
    {
      header: "BRIGHT",
      image: brightIcon,
      body: "And vibrant paint for enhanced visibility",
    },
  ],
}

const products = [pitchMats, grassSigns]

export const Products = () => {
  return (
    <div className="products-wrapper">
      <BackgroundParallax backgroundImage={backgroundSwirl} />
      <div className="products-container">
        {products.map(({ header, ...productDetails }) => (
          <Product key={header} {...{ header, ...productDetails }} />
        ))}
      </div>
    </div>
  )
}
