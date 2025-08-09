export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
  image?: string
}

export type Profile = {
  name: string
  role: string
  bio: string
  email: string
  socials: { github?: string; linkedin?: string; twitter?: string }
}
