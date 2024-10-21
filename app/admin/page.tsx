"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import Image from 'next/image'

// Mock data for photos (replace this with actual data from your backend)
const initialPhotos = [
  { id: 1, src: "https://source.unsplash.com/random/800x600?nature,1", alt: "Nature 1", category: "nature" },
  { id: 2, src: "https://source.unsplash.com/random/800x600?urban,1", alt: "Urban 1", category: "urban" },
  { id: 3, src: "https://source.unsplash.com/random/800x600?portrait,1", alt: "Portrait 1", category: "portrait" },
]

export default function AdminPage() {
  const [photos, setPhotos] = useState(initialPhotos)
  const [newPhotoUrl, setNewPhotoUrl] = useState('')
  const [newPhotoCategory, setNewPhotoCategory] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    // Check if the user is authenticated (you might want to use a more secure method in production)
    const auth = localStorage.getItem('isAuthenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would validate the password against a secure backend
    if (password === 'admin123') {
      setIsAuthenticated(true)
      localStorage.setItem('isAuthenticated', 'true')
    } else {
      toast({
        title: "Authentication Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPhotoUrl && newPhotoCategory) {
      const newPhoto = {
        id: photos.length + 1,
        src: newPhotoUrl,
        alt: `New photo ${photos.length + 1}`,
        category: newPhotoCategory,
      }
      setPhotos([...photos, newPhoto])
      setNewPhotoUrl('')
      setNewPhotoCategory('')
      toast({
        title: "Photo Added",
        description: "The new photo has been added to the gallery.",
      })
    }
  }

  const handleDeletePhoto = (id: number) => {
    setPhotos(photos.filter(photo => photo.id !== id))
    toast({
      title: "Photo Deleted",
      description: "The photo has been removed from the gallery.",
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            required
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Panel</h1>
      <form onSubmit={handleAddPhoto} className="mb-8 space-y-4">
        <Input
          type="url"
          value={newPhotoUrl}
          onChange={(e) => setNewPhotoUrl(e.target.value)}
          placeholder="Enter photo URL"
          required
        />
        <Input
          type="text"
          value={newPhotoCategory}
          onChange={(e) => setNewPhotoCategory(e.target.value)}
          placeholder="Enter photo category"
          required
        />
        <Button type="submit">Add Photo</Button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <Card key={photo.id}>
            <CardContent className="p-4">
              <Image src={photo.src} alt={photo.alt} width={800} height={600} className="rounded-lg mb-4" />
              <p className="text-lg font-semibold mb-2">Category: {photo.category}</p>
              <Button variant="destructive" onClick={() => handleDeletePhoto(photo.id)}>Delete</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}