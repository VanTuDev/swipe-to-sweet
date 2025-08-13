import type { ClubDetail } from "@/data/clubs"

export function makeDetail(args: Partial<ClubDetail> & { id: number; name: string }): ClubDetail {
   return {
      id: args.id,
      name: args.name,
      field: args.field || "Cập nhật sau",
      position: args.position || "Cập nhật sau",
      looking: args.looking || "Cập nhật sau",
      emoji: args.emoji || "✨",
      shortIntro: args.shortIntro || "Cập nhật sau",
      description: args.description || "Cập nhật sau",
      quote: args.quote || "",
      image: args.image || "/placeholder.svg",
      members: args.members || "Cập nhật sau",
      experience: args.experience || "Cập nhật sau",
      benefits: args.benefits || [],
      googleForm: args.googleForm || "",
      achievements: args.achievements || [],
      activities: args.activities || [],
      teamStructure: args.teamStructure || [],
      goals2024: args.goals2024 || [],
      contactInfo:
         args.contactInfo || ({ email: "", hotline: "", office: "", workingHours: "" } as ClubDetail["contactInfo"]),
   }
}


