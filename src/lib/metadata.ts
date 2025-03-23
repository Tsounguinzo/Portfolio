import { Metadata } from 'next'
import {CONFIG} from "@/global-config";

export function constructMetadata({
  title = CONFIG.profileName,
  description = CONFIG.profileDescription,
  image = CONFIG.profileImage,
  icons = CONFIG.icon,
  noIndex = CONFIG.noIndex
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: CONFIG.twitter.card,
      title,
      description,
      images: [image],
      creator: CONFIG.twitter.creator
    },
    icons,
    metadataBase: new URL(CONFIG.websiteUrl),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
