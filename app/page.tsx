import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Photography Portfolio</h1>
        <p className="text-xl text-muted-foreground">Capturing moments, one frame at a time</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="p-4">
            <Image src="https://source.unsplash.com/random/800x600?nature" alt="Nature" width={800} height={600} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Nature</h2>
            <p className="text-muted-foreground mb-4">Explore the beauty of the natural world</p>
            <Link href="/gallery/nature">
              <Button>View Gallery</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Image src="https://source.unsplash.com/random/800x600?urban" alt="Urban" width={800} height={600} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Urban</h2>
            <p className="text-muted-foreground mb-4">Discover the charm of city life</p>
            <Link href="/gallery/urban">
              <Button>View Gallery</Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Image src="https://source.unsplash.com/random/800x600?portrait" alt="Portrait" width={800} height={600} className="rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Portrait</h2>
            <p className="text-muted-foreground mb-4">Capturing the essence of individuals</p>
            <Link href="/gallery/portrait">
              <Button>View Gallery</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">About the Photographer</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Passionate about capturing the beauty in everyday moments and extraordinary landscapes.
        </p>
        <Link href="/about">
          <Button variant="outline">Learn More</Button>
        </Link>
      </section>
    </div>
  )
}