import type { ClubDetail } from "@/data/clubs"
import { makeDetail } from "./utils"
import source from "@/data/detailCLB.json" assert { type: "json" }

const raw = (source.clubs as any)["12"] as ClubDetail

export const fmelodiesDetail: ClubDetail = raw ?? makeDetail({ id: 12, name: "FMelodies" })

export default fmelodiesDetail


