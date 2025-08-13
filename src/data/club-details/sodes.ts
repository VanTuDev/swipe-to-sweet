import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["17"] as ClubDetail

export const sodesDetail: ClubDetail = raw ?? makeDetail({ id: 17, name: "Soleil Debate Station – SODES" })

export default sodesDetail


