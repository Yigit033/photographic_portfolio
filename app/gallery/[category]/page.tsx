import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

// Mock data for photos (replace this with actual data from your backend)
const mockPhotos = [
  { id: 1, src: "https://source.unsplash.com/random/800x600?nature,1", alt: "Nature 1" },
  { id: 2, src: "https://source.unsplash.com/random/800x600?nature,2", alt: "Nature 2" },
  { id: 3, src: "https://source.unsplash.com/random/800x600?nature,3", alt: "Nature 3" },
  { id: 4, src: "https://source.unsplash.com/random/800x600?nature,4", alt: "Nature 4" },
  { id: 5, src: "https://source.unsplash.com/random/800x600?nature,5", alt: "Nature 5" },
  { id: 6, src: "https://source.unsplash.com/random/800x600?nature,6", alt: "Nature 6" },
]

export async function generateStaticParams() {
  const categories = ['nature', 'urban', 'portrait', 'travel', 'abstract', 'wildlife']
  return categories.map((category) => ({
    category: category,
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center capitalize">{params.category} Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockPhotos.map((photo) => (
          <Dialog key={photo.id}>
            <DialogTrigger>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                className="rounded-lg cursor-pointer transition-transform hover:scale-105"
              />
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogTitle className="sr-only">{photo.alt}</DialogTitle>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={900}
                className="rounded-lg"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}