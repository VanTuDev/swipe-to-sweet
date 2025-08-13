import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["1"] as ClubDetail

export const ecoFDetail: ClubDetail = raw ?? makeDetail({ id: 1, name: "Eco-F" })

export default ecoFDetail


