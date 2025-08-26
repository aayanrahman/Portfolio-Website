import Section from "./Section"
import Card from "./Card"

export default function Education() {
  return (
    <Section id="education" title="Education" accent="blush">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif font-semibold text-lg">University of Waterloo</h3>
                <p className="text-[#6B6B6B] text-sm">Waterloo, ON</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#F6DDE2]"></div>
            </div>
            <div>
              <p className="font-medium">BASc, Electrical Engineering (Co-op)</p>
              <p className="text-sm text-[#6B6B6B] italic">Power Systems Focus</p>
              <p className="text-sm text-[#6B6B6B]">Sept 2025 — Apr 2030</p>
            </div>
            <div className="pt-2">
              <p className="text-sm text-[#6B6B6B]">
                <span className="font-medium">1A Coursework:</span> Classical Mechanics (ECE 105), Programming (ECE
                150), Engineering Practice (ECE 190), Project Studio (ECE 198)
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-serif font-semibold text-lg">White Oaks Secondary School</h3>
                <p className="text-[#6B6B6B] text-sm">Oakville, ON</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#F6DDE2]"></div>
            </div>
            <div>
              <p className="font-medium">International Baccalaureate Diploma</p>
              <p className="text-sm text-[#6B6B6B]">Sept 2023 — May 2025</p>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
