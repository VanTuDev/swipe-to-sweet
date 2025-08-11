import type { Club, ClubDetail } from '@/data/clubs'
import { clubs } from '@/data/clubs'
import detailCLB from '@/data/detailCLB.json' assert { type: 'json' }

export function getClubById(id: number): Club | undefined {
   return clubs.find(club => club.id === id)
}

export function getClubDetailById(id: number): ClubDetail | undefined {
   const clubDetail = (detailCLB.clubs as any)[id.toString()]
   return clubDetail as ClubDetail | undefined
}

export function getAllClubs(): Club[] {
   return clubs
}

export function getAllClubDetails(): ClubDetail[] {
   return Object.values(detailCLB.clubs) as ClubDetail[]
} 