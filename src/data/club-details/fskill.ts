import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["5"] as ClubDetail

export const fskillDetail: ClubDetail = raw ?? makeDetail({ id: 5, name: "F-Skill" })

export default fskillDetail


