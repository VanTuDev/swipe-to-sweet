import type { Club, ClubDetail } from '@/data/clubs'
import { clubs } from '@/data/clubs'
import { clubDetailsMap, allClubDetails } from '@/data/club-details'

export function getClubById(id: number): Club | undefined {
   return clubs.find(club => club.id === id)
}

export function getClubDetailById(id: number): ClubDetail | undefined {
   return clubDetailsMap[id]
}

export function getAllClubs(): Club[] {
   return clubs
}

export function getAllClubDetails(): ClubDetail[] {
   return allClubDetails
} 