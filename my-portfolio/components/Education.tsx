import Section from "./Section"
import Card from "./Card"

export default function Education() {
  return (
    <Section id="education" title="Education" accent="blush">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="flex gap-4">
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-serif font-semibold text-lg">University of Waterloo</h3>
                <p className="text-[#6B6B6B] text-sm">Waterloo, ON</p>
              </div>
              <div>
                <p className="font-medium">BASc, Electrical Engineering (Co-op)</p>
                <p className="text-sm text-[#6B6B6B]">Sept 2025 — Apr 2030</p>
              </div>
            </div>
            <div className="hidden md:flex flex-shrink-0 w-20 self-stretch items-center justify-center rounded-xl bg-[#F5F4F1] mr-1 p-2">
              <img src="/waterloo-logo.png" alt="University of Waterloo" className="w-full h-full object-contain" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex gap-4">
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="font-serif font-semibold text-lg">White Oaks Secondary School</h3>
                <p className="text-[#6B6B6B] text-sm">Oakville, ON</p>
              </div>
              <div>
                <p className="font-medium">International Baccalaureate Diploma</p>
                <p className="text-sm text-[#6B6B6B]">Sept 2023 — May 2025</p>
              </div>
            </div>
            <div className="hidden md:flex flex-shrink-0 w-20 self-stretch items-center justify-center rounded-xl bg-[#F5F4F1] mr-1 p-2">
              <img src="/ib-logo.png" alt="International Baccalaureate" className="w-full h-full object-contain" />
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
