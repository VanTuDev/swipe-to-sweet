import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["14"] as ClubDetail

export const volleyballDetail: ClubDetail = raw ?? makeDetail({ id: 14, name: "Bóng chuyền" })

export default volleyballDetail


