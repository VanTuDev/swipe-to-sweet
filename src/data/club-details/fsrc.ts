import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["15"] as ClubDetail

export const fsrcDetail: ClubDetail = raw ?? makeDetail({ id: 15, name: "FSRC" })

export default fsrcDetail


