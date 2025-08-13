import type { ClubDetail } from "@/data/clubs"
import { makeDetail } from "./utils"
import source from "@/data/detailCLB.json" assert { type: "json" }

const raw = (source.clubs as any)["10"] as ClubDetail

export const fgymDetail: ClubDetail = raw ?? makeDetail({ id: 10, name: "FGYM" })

export default fgymDetail


