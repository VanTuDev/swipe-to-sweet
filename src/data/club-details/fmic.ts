import type { ClubDetail } from "@/data/clubs"
import { makeDetail } from "./utils"
import source from "@/data/detailCLB.json" assert { type: "json" }

const raw = (source.clubs as any)["4"] as ClubDetail

export const fmicDetail: ClubDetail = raw ?? makeDetail({ id: 4, name: "F-MIC" })

export default fmicDetail


