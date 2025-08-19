import type { ClubDetail } from "@/data/clubs"
import { ecoFDetail } from "./eco-f"
import { fbizDetail } from "./fbiz"
import { sunshareDetail } from "./sunshare"
import { fmicDetail } from "./fmic"
import { fskillDetail } from "./fskill"
import { fasDetail } from "./fas"
import { badmintonDetail } from "./badminton"
import { fdanxDetail } from "./fdanx"
import { fdnEventsDetail } from "./fdn-events"
import { fgymDetail } from "./fgym"
import { fsrcDetail } from "./fsrc"
import { fmelodiesDetail } from "./fmelodies"
import { fptThingsDetail } from "./fpt-things"
import { volleyballDetail } from "./volleyball"
import { mangaAnimeDetail } from "./manga-anime"
import { sodesDetail } from "./sodes"
import { fchineseDetail } from "./fchinese"
import { fvsDetail } from "./fvs"
import { fpsDetail } from "./fps"
import { basketballDetail } from "./basketball"
import { footballDetail } from "./football"
import { mecDetail } from "./mec"
import { fchemcolorDetail } from "./fchemcolor"
import { hoaNoMuaVanDetail } from "./hoa-no-mua-van"

export const clubDetailsMap: Record<number, ClubDetail> = {
   1: ecoFDetail,
   2: fbizDetail,
   3: sunshareDetail,
   4: fmicDetail,
   5: fskillDetail,
   6: fasDetail,
   7: badmintonDetail,
   8: fdanxDetail,
   9: fdnEventsDetail,
   10: fgymDetail,
   12: fmelodiesDetail,
   13: fptThingsDetail,
   14: volleyballDetail,
   15: fsrcDetail,
   16: mangaAnimeDetail,
   17: sodesDetail,
   18: fchineseDetail,
   19: fvsDetail,
   101: fpsDetail,
   102: mecDetail,
   103: basketballDetail,
   104: footballDetail,
   105: fchemcolorDetail,
   106: hoaNoMuaVanDetail,
}

export const allClubDetails: ClubDetail[] = Object.values(clubDetailsMap)


