import IconWithContent from '@/components/common/Cards/IconWithContent'
import FeatureHeader from '@/components/common/FeatureHeader/FeatureHeader'
import { INNOVATION_CARD_DATA } from '@/constants/dummyData'
import React from 'react'
import Section from '../common/Section/Section'

const LeadingInnovation = () => {
  return (
    <Section>
    <FeatureHeader label="innovation" title="Market Leading Innovation" />
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[50px] md:gap-[40px] gap-[20px]">
      {/* Left Side Image */}
      <div className="md:col-span-2">
        <img
          src="/images/about/marketing-leading-innovation.png"
          className="w-full lg:h-[480px] md:h-[371px] h-[271px] rounded-[40px]"
        />
      </div>

      {/* Right Side Dynamic Content */}
      {INNOVATION_CARD_DATA.map((item, index) => (
        <IconWithContent
          key={index}
          title={item.title}
          description={item.description}
          imgUrl={item.iconUrl}
        />
      ))}
    </div>
  </Section>
  )
}

export default LeadingInnovation