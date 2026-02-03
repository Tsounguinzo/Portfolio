import { Metadata } from 'next'

export const METADATA_CONFIG = {
  profileName: "Beaudelaire Tsoungui Nzodoumkouo",
  profileDescription: "I am a software engineering student at concordia and i love to build.",
  profileImage: "/beaudelaire.png",
  icon: "/avatar.svg",
  noIndex: false,
  websiteUrl: "https://www.beaudelaire.ca",
  twitter: {
    card: "summary_large_image" as const,
    creator: "@beaudelaire001",
  },
};
export function constructMetadata({
  title = METADATA_CONFIG.profileName,
  description = METADATA_CONFIG.profileDescription,
  image = METADATA_CONFIG.profileImage,
  icons = METADATA_CONFIG.icon,
  noIndex = METADATA_CONFIG.noIndex
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
      card: METADATA_CONFIG.twitter.card,
      title,
      description,
      images: [image],
      creator: METADATA_CONFIG.twitter.creator
    },
    icons,
    metadataBase: new URL(METADATA_CONFIG.websiteUrl),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
