import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["8"] as ClubDetail

export const fdanxDetail: ClubDetail = raw ?? makeDetail({ id: 8, name: "FDANX" })

export default fdanxDetail


