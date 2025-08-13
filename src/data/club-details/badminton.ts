import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["7"] as ClubDetail

export const badmintonDetail: ClubDetail = raw ?? makeDetail({ id: 7, name: "Cầu lông" })

export default badmintonDetail


