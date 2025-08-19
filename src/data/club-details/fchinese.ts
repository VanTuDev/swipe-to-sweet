import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["18"] as ClubDetail

export const fchineseDetail: ClubDetail = raw ?? makeDetail({ id: 18, name: "F Chinese (F-HUA)", position: "Sảnh FPT SCHOOL" })

export default fchineseDetail


