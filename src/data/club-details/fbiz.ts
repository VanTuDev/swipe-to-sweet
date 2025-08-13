import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["2"] as ClubDetail

export const fbizDetail: ClubDetail = raw ?? makeDetail({ id: 2, name: "FBiz" })

export default fbizDetail


