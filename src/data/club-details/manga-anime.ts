import type { ClubDetail } from "@/data/clubs"
import source from "@/data/detailCLB.json" assert { type: "json" }
import { makeDetail } from "./utils"

const raw = (source.clubs as any)["16"] as ClubDetail

export const mangaAnimeDetail: ClubDetail = raw ?? makeDetail({ id: 16, name: "Manga-Anime" })

export default mangaAnimeDetail


