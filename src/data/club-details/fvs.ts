import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["19"] as ClubDetail

export const fvsDetail: ClubDetail = raw ?? makeDetail({ id: 19, name: "FVS" })

export default fvsDetail


