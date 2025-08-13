import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["6"] as ClubDetail

export const fasDetail: ClubDetail = raw ?? makeDetail({ id: 6, name: "FAS" })

export default fasDetail


