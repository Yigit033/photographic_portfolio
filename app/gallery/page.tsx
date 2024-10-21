import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const categories = [
  { name: "Nature", image: "https://source.unsplash.com/random/800x600?nature", slug: "nature" },
  { name: "Urban", image: "https://source.unsplash.com/random/800x600?urban", slug: "urban" },
  { name: "Portrait", image: "https://source.unsplash.com/random/800x600?portrait", slug: "portrait" },
  { name: "Travel", image: "https://source.unsplash.com/random/800x600?travel", slug: "travel" },
  { name: "Abstract", image: "https://source.unsplash.com/random/800x600?abstract", slug: "abstract" },
  { name: "Wildlife", image: "https://source.unsplash.com/random/800x600?wildlife", slug: "wildlife" },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Card key={category.slug}>
            <CardContent className="p-4">
              <Image src={category.image} alt={category.name} width={800} height={600} className="rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
              <Link href={`/gallery/${category.slug}`}>
                <Button>View Gallery</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}