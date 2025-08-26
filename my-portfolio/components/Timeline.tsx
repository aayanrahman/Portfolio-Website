interface TimelineItem {
  title: string
  location: string
  period: string
  description: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-[#BEE3D2] flex-shrink-0"></div>
            {index < items.length - 1 && <div className="w-px h-16 bg-[#E6E4DF] mt-2"></div>}
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-serif font-semibold text-lg text-balance">{item.title}</h3>
              <p className="text-[#6B6B6B] text-sm">{item.location}</p>
              <p className="text-[#6B6B6B] text-sm italic">{item.period}</p>
            </div>

            <div className="space-y-2">
              {item.description.map((desc, descIndex) => (
                <p key={descIndex} className="text-sm text-[#6B6B6B] leading-relaxed">
                  • {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
