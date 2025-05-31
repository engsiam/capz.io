"use client"

interface HowItWorksStepProps {
  
  title: string
  description: string
  className?: string
  icon:React.ElementType
}

export function HowItWorksStep({ icon: Icon, title, description, className = "" }: HowItWorksStepProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}
