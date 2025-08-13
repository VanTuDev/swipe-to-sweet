import type { ClubDetail } from "@/data/clubs"
import { makeDetail } from "./utils"
import source from "@/data/detailCLB.json" assert { type: "json" }

const raw = (source.clubs as any)["3"] as ClubDetail

export const sunshareDetail: ClubDetail = raw ?? makeDetail({ id: 3, name: "Sunshare Club" })

export default sunshareDetail


