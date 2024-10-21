import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About the Photographer</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="https://source.unsplash.com/random/600x800?photographer"
            alt="Photographer"
            width={600}
            height={800}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">John Doe</h2>
          <p className="text-lg mb-4">
            I am a passionate photographer with over 10 years of experience capturing the beauty of the world around us. My journey in photography began when I received my first camera as a gift, and since then, I've been on a constant quest to perfect my craft and share my unique perspective with others.
          </p>
          <p className="text-lg mb-4">
            My work spans various genres, including nature, urban landscapes, and portraiture. I believe that every photograph tells a story, and I strive to create images that evoke emotion and inspire viewers to see the world in a new light.
          </p>
          <p className="text-lg">
            When I'm not behind the camera, you can find me exploring new locations, studying the work of other photographers, or experimenting with new techniques to push the boundaries of my art.
          </p>
        </div>
      </div>
    </div>
  )
}