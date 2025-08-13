import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["13"] as ClubDetail

export const fptThingsDetail: ClubDetail = raw ?? makeDetail({ id: 13, name: "FPT Things" })

export default fptThingsDetail


