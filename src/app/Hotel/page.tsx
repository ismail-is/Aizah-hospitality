'use client'

import React from 'react'
import HeaderOne from '@/components/Header/HeaderOne'
import SliderTwo from '@/components/Slider/SliderTwo'
import LocationTwo from '@/components/Location/LocationTwo'
import CategoryTwo from '@/components/Category/CategoryTwo'
import RecommendOne from '@/components/Recommend/RecommendOne'
import tentData from '@/data/Tent.json'
import Footer from '@/components/Footer/Footer'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'

const Hotel = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <HeaderOne />
        <Breadcrumb img='/images/breadcrumb/1920x320.png' heading='Hotel' subHeading='Unveiling the Heart of GlampHub. Where Nature and Luxury Coexist' />
        {/* <SliderTwo /> */}
        <CategoryTwo />
        <RecommendOne data={tentData} start={18} end={26} />
        <LocationTwo />
        <div className="lg:pb-20 md:pb-14 pb-10"></div>
        <Footer />
      </div>
    </>
  )
}

export default Hotel
