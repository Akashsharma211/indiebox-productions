const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient({})

async function main() {
  // Clear existing data
  await prisma.release.deleteMany()
  await prisma.artist.deleteMany()

  // Seed Artists
  const artist1 = await prisma.artist.create({
    data: {
      name: "ECHO VALLEY",
      genre: "Electronic / Ambient",
      bio: "Echo Valley is known for atmospheric soundscapes that blend natural elements with synthesis.",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      spotifyUrl: "https://spotify.com"
    }
  })

  const artist2 = await prisma.artist.create({
    data: {
      name: "NEON HEARTS",
      genre: "Synthpop / Alternative",
      bio: "A duo from the city pushing the boundaries of modern synthpop.",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a1a2a2952c4a?auto=format&fit=crop&w=800&q=80",
      spotifyUrl: "https://spotify.com"
    }
  })

  const artist3 = await prisma.artist.create({
    data: {
      name: "LUNA SOL",
      genre: "Indie Folk",
      bio: "Luna Sol's acoustic melodies speak to the soul, capturing the essence of indie folk.",
      imageUrl: "https://images.unsplash.com/photo-1516280440502-a2ce8d93c4e4?auto=format&fit=crop&w=800&q=80",
      spotifyUrl: "https://spotify.com"
    }
  })

  // Seed Releases
  await prisma.release.create({
    data: {
      title: "Midnight Drives",
      artistName: artist1.name,
      coverUrl: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80",
      releaseDate: new Date("2025-10-15"),
      type: "Album",
      listenUrl: "https://spotify.com"
    }
  })

  await prisma.release.create({
    data: {
      title: "City Lights",
      artistName: artist2.name,
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      releaseDate: new Date("2026-02-20"),
      type: "EP",
      listenUrl: "https://spotify.com"
    }
  })

  await prisma.release.create({
    data: {
      title: "Golden Hour",
      artistName: artist3.name,
      coverUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=800&q=80",
      releaseDate: new Date("2026-05-10"),
      type: "Single",
      listenUrl: "https://spotify.com"
    }
  })

  console.log("Database seeded successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
