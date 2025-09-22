import Image from "next/image"

interface UploadedAd {
  id: string
  title: string
  subtitle: string
  description: string
  discount: string
  buttonText: string
  image?: string
}

interface UploadedAdsCardProps {
  ad: UploadedAd
  className?: string
}

export function UploadedAdsCard({ ad, className = "" }: UploadedAdsCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden ${className}`}>
      <div className="relative">
        {/* Banner Image */}
        <Image
          src="/banner-img.png"
          alt={ad.title}
          width={800}
          height={200}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
