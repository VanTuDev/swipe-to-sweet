import type { ClubDetail } from "@/data/clubs"
import { makeDetail } from "./utils"
import source from "@/data/detailCLB.json" assert { type: "json" }

const raw = (source.clubs as any)["9"] as ClubDetail

export const fdnEventsDetail: ClubDetail = raw ?? makeDetail({ id: 9, name: "FDN-Events" })

export default fdnEventsDetail


