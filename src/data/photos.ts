// IMPORTANT: We travel during the midnight-sun season (June 7-14, 2026).
// All hero photos must be summer / daytime — NO northern-lights, NO snow-on-Kirkjufell shots.
// URLs below are verified Wikimedia Commons thumbnails. Replace with your own photos before the trip.

const W = 'https://upload.wikimedia.org/wikipedia/commons/thumb'

// Hero candidates (all verified at 1920px). Swap `hero` below to change the opening shot.
const HERO_SELJALANDSFOSS_IDYLLIC = `${W}/3/33/Idyllic_landscape_with_a_waterfall_%28Unsplash%29.jpg/1920px-Idyllic_landscape_with_a_waterfall_%28Unsplash%29.jpg`
const HERO_LANDMANNALAUGAR       = `${W}/5/52/Landmannalaugar_Campsite.jpg/1920px-Landmannalaugar_Campsite.jpg`
const HERO_ALDEYJARFOSS          = `${W}/6/6f/Waterfall_Aldeyjarfoss_and_Black_Basalt_Columns_-_2013.08_-_panoramio.jpg/1920px-Waterfall_Aldeyjarfoss_and_Black_Basalt_Columns_-_2013.08_-_panoramio.jpg`
const HERO_KIRKJUFELL            = `${W}/d/df/Kirkjufell_in_Iceland.jpg/1920px-Kirkjufell_in_Iceland.jpg`
const HERO_SKOGAFOSS             = `${W}/8/8c/2008-05-24_35_Sk%C3%B3gafoss.jpg/1920px-2008-05-24_35_Sk%C3%B3gafoss.jpg`

const REYKJAVIK = `${W}/0/04/Reykjav%C3%ADk%2C_view_from_Hallgr%C3%ADmskirkja_%282%29.jpg/1280px-Reykjav%C3%ADk%2C_view_from_Hallgr%C3%ADmskirkja_%282%29.jpg`
const GOLDEN_CIRCLE_GULLFOSS = `${W}/1/18/Gullfoss_from_the_Air_%28cropped%29.jpg/1920px-Gullfoss_from_the_Air_%28cropped%29.jpg`
const REYKJANES = `${W}/e/eb/Reykjanes_%282023%29.jpg/1280px-Reykjanes_%282023%29.jpg`
const SKOGAFOSS = `${W}/8/8c/2008-05-24_35_Sk%C3%B3gafoss.jpg/1280px-2008-05-24_35_Sk%C3%B3gafoss.jpg`
const FJADRARGLJUFUR = `${W}/2/2b/Iceland_2008-05-27_%282684049831%29.jpg/1280px-Iceland_2008-05-27_%282684049831%29.jpg`
const KIRKJUFELL = `${W}/d/df/Kirkjufell_in_Iceland.jpg/1280px-Kirkjufell_in_Iceland.jpg`
const HALLGRIMSKIRKJA = `${W}/b/b4/Leifur_Eir%C3%ADksson_and_Hallgr%C3%ADmskirkja_%2814527191932%29.jpg/1280px-Leifur_Eir%C3%ADksson_and_Hallgr%C3%ADmskirkja_%2814527191932%29.jpg`
const REYNISFJARA = `${W}/7/74/Reynisfjara_Beach_Looking_West_Towards_Dyrh%C3%B3laey.jpg/1280px-Reynisfjara_Beach_Looking_West_Towards_Dyrh%C3%B3laey.jpg`
const SOLHEIMAJOKULL_ROAD = `${W}/9/99/View_of_S%C3%B3lheimaj%C3%B6kull_from_Road_1%2C_Iceland.jpg/1920px-View_of_S%C3%B3lheimaj%C3%B6kull_from_Road_1%2C_Iceland.jpg`

// Currently using the Seljalandsfoss "idyllic landscape" Unsplash-on-Wikimedia shot —
// classic dramatic Iceland: tall waterfall, lush green cliffs, wide format. Swap to
// HERO_LANDMANNALAUGAR (riolite mountains), HERO_ALDEYJARFOSS (basalt columns),
// HERO_KIRKJUFELL (pyramidal mountain), or HERO_SKOGAFOSS if you want a different vibe.
export const photos = {
  hero: HERO_SELJALANDSFOSS_IDYLLIC,

  grid: [
    { url: REYKJAVIK,       label: 'Reykjavík from Hallgrímskirkja' },
    { url: GOLDEN_CIRCLE_GULLFOSS, label: 'Gullfoss · Golden Circle' },
    { url: SKOGAFOSS,       label: 'Skógafoss' },
    { url: REYNISFJARA,     label: 'Reynisfjara' },
    { url: FJADRARGLJUFUR,  label: 'Fjaðrárgljúfur' },
    { url: KIRKJUFELL,      label: 'Kirkjufell' },
  ],

  days: {
    1: REYKJAVIK,             // arrival
    2: GOLDEN_CIRCLE_GULLFOSS, // Golden Circle + Silfra — Gullfoss aerial double cascade
    3: REYKJANES,             // Reykjanes loop + Reykjavík culture
    4: SKOGAFOSS,             // South coast → Vík
    5: FJADRARGLJUFUR,        // Fjaðrárgljúfur day
    6: KIRKJUFELL,            // Snæfellsnes
    7: HALLGRIMSKIRKJA,       // Reykjavík proper + farewell
    8: SOLHEIMAJOKULL_ROAD,   // departure — looking at a glacier from Road 1
  } as Record<number, string>,
}
