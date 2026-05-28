// Festivals, concerts, and cultural moments overlapping June 7–14, 2026.
// Dates marked "confirmed" follow a fixed annual rule; "expected" should be
// verified ~3 months out (programmes are typically published Mar–Apr 2026).

export interface TripEvent {
  date: string
  day?: number
  title: string
  where: string
  blurb: string
  status: 'confirmed' | 'expected' | 'tentative'
  url?: string
  tag: 'festival' | 'music' | 'culture' | 'sport' | 'film' | 'theatre' | 'nightlife'
}

export const events: TripEvent[] = [
  {
    date: 'Sun · Jun 7',
    day: 1,
    title: 'Sjómannadagurinn — Seafarers\' Day',
    where: 'Old harbour, Reykjavík',
    blurb:
      'Iceland\'s national maritime festival — always the first Sunday of June, so it lands on our arrival day. Rowing races, sea rescue demos, food stalls, brass bands, fish-throwing contests at the old harbour. The whole town is out. Walk down once you\'ve dropped the bags.',
    status: 'confirmed',
    url: 'https://www.visitreykjavik.is/sjomannadagurinn',
    tag: 'festival',
  },
  {
    date: 'May 30 → Jun 14, 2026',
    title: 'Reykjavík Arts Festival (Listahátíð)',
    where: 'Harpa, Iðnó, multiple venues',
    blurb:
      'Biennial city-wide arts festival — visual art, theatre, dance, classical + contemporary concerts. 2026 IS a festival year and runs through to Jun 14 (your last full day). Confirm individual shows on listahatid.is.',
    status: 'confirmed',
    url: 'https://www.listahatid.is',
    tag: 'culture',
  },
  {
    date: 'Sat · Jun 13 · 20:00',
    day: 7,
    title: '★ John Grant @ Eldborg, Harpa',
    where: 'Eldborg main hall (~1,700 seats)',
    blurb:
      'American indie/folk legend who lives in Reykjavík (Queen of Denmark, Pale Green Ghosts, GMF). Saturday night in the big Harpa hall. CLASHES with the farewell dinner slot — would need to push ÓX/Grillið to 17:30 or move farewell to Friday. The single best concert add for the trip.',
    status: 'confirmed',
    url: 'https://en.harpa.is/calendar',
    tag: 'music',
  },
  {
    date: 'Mon · Jun 8 · 20:00',
    day: 2,
    title: 'viibra: Venutian Wetland',
    where: 'Harpa',
    blurb:
      'Reykjavík flute septet — the group that\'s recorded and toured with Björk. Avant-garde / experimental. Clashes with the Apothek dinner you\'ve booked Jun 8 at 20:30 — skip unless you move dinner.',
    status: 'confirmed',
    url: 'https://en.harpa.is/calendar',
    tag: 'music',
  },
  {
    date: 'Tue · Jun 9 · 20:00',
    day: 3,
    title: 'viibra: LOVE LOVE (album release)',
    where: 'Harpa',
    blurb:
      'Same flute septet, debut album release concert. Fits cleanly on the Tranquility variant (you\'re back from Reykjanes by 18:00). Tight on the Dramatic variant — Þórsmörk shuttle gets you back to Reykjavík ~21:00, you\'d miss the start.',
    status: 'confirmed',
    url: 'https://en.harpa.is/calendar',
    tag: 'music',
  },
  {
    date: 'Sun · Jun 7 · 16:00',
    day: 1,
    title: 'Sunday Classics: Ljóshljóð',
    where: 'Harpa',
    blurb:
      'Iceland Symphony chamber slot. You land 09:00, so the timing is feasible — but with the redeye, Sjómannadagurinn at the harbour, the Lóla dinner, and Day 2 starting at 07:00 for the Golden Circle loop, this is too much. Listed for completeness.',
    status: 'confirmed',
    url: 'https://en.harpa.is/sunday-classics',
    tag: 'music',
  },
  {
    date: 'Throughout the week',
    title: 'Harpa Concert Hall · check the full calendar',
    where: 'Harpa, downtown Reykjavík',
    blurb:
      'Beyond the listed shows: occasional jazz, organ matinées, "How To Become Icelandic in 60 Minutes" comedy nightly in summer. Refresh harpa.is closer to the trip.',
    status: 'confirmed',
    url: 'https://en.harpa.is/calendar',
    tag: 'music',
  },
  {
    date: 'Thu · Jun 11 · 12:00',
    title: 'Hallgrímskirkja organ matinée (lunchtime)',
    where: 'Hallgrímskirkja',
    blurb:
      'Free 30-min organ recital, every Thursday in summer. Jun 11 is a Thursday — BUT you\'re driving back from Vík that day, so the timing doesn\'t fit. Listed in case the schedule shifts.',
    status: 'confirmed',
    url: 'https://www.hallgrimskirkja.is',
    tag: 'music',
  },
  {
    date: 'Jun 12–14 (likely)',
    title: 'Hafnarfjörður Viking Festival',
    where: 'Hafnarfjörður (12 km south of Reykjavík)',
    blurb:
      'Viking encampment, axe-throwing, longship combat reenactments, mead-and-roasted-lamb market. Runs a long weekend in mid-June; second weekend lines up with our Day 6–7. 25 min drive from the Airbnb — easy late-afternoon detour.',
    status: 'expected',
    url: 'https://fjorukrain.is/vikingafestival',
    tag: 'festival',
  },
  {
    date: 'Live nightly',
    title: 'Live music · Húrra, Gaukurinn, Kex',
    where: 'Downtown Reykjavík',
    blurb:
      'Reykjavík\'s small venues run shows every night in summer. Húrra (post-rock, electronic), Gaukurinn (queer/punk/karaoke), Kex Hostel bar (free indie sets). Check Tix.is the morning of — most shows are walk-in for 2,000–4,000 ISK.',
    status: 'confirmed',
    url: 'https://tix.is',
    tag: 'music',
  },
  {
    date: 'Sat · Jun 13',
    day: 7,
    title: 'Kolaportið flea market',
    where: 'Old harbour, Reykjavík',
    blurb:
      'Iceland\'s only flea market — Saturdays + Sundays, 11am–5pm. Vintage lopapeysur, cassettes, hákarl shots, Icelandic candy. The locals\' Saturday morning. Bring cash.',
    status: 'confirmed',
    url: 'https://www.kolaportid.is',
    tag: 'culture',
  },
  {
    date: 'Jun 17 — after we leave',
    title: 'Þjóðhátíðardagurinn (Independence Day) build-up',
    where: 'Reykjavík',
    blurb:
      'Iceland\'s national day is June 17. We miss the day itself, but flags, decorations, and pop-up events go up the week before — expect bunting on Laugavegur and rehearsals at Austurvöllur square through Day 6–7.',
    status: 'confirmed',
    tag: 'culture',
  },
  {
    date: 'Jun 20-23, 2026 — AFTER we leave',
    title: 'Reykjavík Midsummer Music Festival',
    where: 'Harpa',
    blurb:
      'Víkingur Ólafsson\'s curated chamber-music festival lands AFTER our flight home (Jun 14). Confirmed dates Jun 20-23. Heads-up: do not extend planning around it. The "Generations in Harmony" Hildur Guðnadóttir programme that was floated for 2026 sits in this same window.',
    status: 'tentative',
    url: 'https://reykjavikmidsummermusic.com',
    tag: 'music',
  },
  {
    date: 'Daily',
    title: 'Bíó Paradís — independent + Icelandic cinema',
    where: 'Hverfisgata 54, downtown',
    blurb:
      'The arthouse cinema. Icelandic features with English subtitles, classic reissues, late shows. The Friday/Saturday "Black Sunday" cult slot is iconic. Tickets walk-in or biparadis.is.',
    status: 'confirmed',
    url: 'https://bioparadis.is',
    tag: 'film',
  },
  {
    date: 'Mon · Jun 8 · 13:00',
    day: 2,
    title: 'Community, arts & wellbeing — Reykjavík Arts Festival Hub',
    where: 'Iðnó (Vonarstræti 3)',
    blurb:
      'Art + lecture/education programme inside the Klúbbur Listahátíðar series at Iðnó. Lunchtime slot. CLASHES with the Golden Circle day — you\'ll be at Geysir/Gullfoss. Listed for completeness.',
    status: 'confirmed',
    url: 'https://www.listahatid.is/en/vidburdir',
    tag: 'culture',
  },
  {
    date: 'Tue · Jun 9 · 20:00',
    day: 3,
    title: 'Carried — Reykjavík Arts Festival Hub',
    where: 'Iðnó (Vonarstræti 3)',
    blurb:
      'Art + music performance in the Klúbbur Listahátíðar series. Tuesday evening. Tight on the current Day 3 schedule (Sundhöllin 19:00 + Kastrup dinner 20:30) — would need to swap dinner OR skip the hot pot to fit.',
    status: 'confirmed',
    url: 'https://www.listahatid.is/en/vidburdir',
    tag: 'culture',
  },
  {
    date: 'Fri · Jun 12 · 11:30',
    day: 6,
    title: 'Spilum og spjöllum — free Icelandic practice',
    where: 'Reykjavík City Library Grófin (Tryggvagata 15)',
    blurb:
      'Open drop-in language meet-up at the downtown library — locals + visitors playing word games, doing crosswords, chatting in Icelandic at any level. Free, no registration. Friday at 11:30. Note: you\'re leaving Reykjavík 08:30 for the Snæfellsnes day trip — would only fit if you skip Snæfellsnes that day.',
    status: 'confirmed',
    url: 'https://borgarbokasafn.is/en/event/language/chat-and-play-icelandic-21',
    tag: 'culture',
  },
  {
    date: 'Sat · Jun 13 · 20:00',
    day: 7,
    title: 'Closing Party — Reykjavík Arts Festival Hub',
    where: 'Iðnó (Vonarstræti 3)',
    blurb:
      'Klúbbur Listahátíðar — the festival\'s closing-night party at Iðnó. Live art + music programme curated by the festival, the wrap of two weeks of Listahátíð. Same night as John Grant + your farewell dinner — would be the third option if anyone wants something looser after dinner.',
    status: 'confirmed',
    url: 'https://www.listahatid.is/en/vidburdir',
    tag: 'festival',
  },
  {
    date: 'Listahátíð closing weekend (Jun 13-14) · time TBD',
    title: 'Brothætt: Ritual I — The Healing',
    where: 'Reykjavík Arts Festival Hub, Iðnó',
    blurb:
      'Performance-art piece in the Klúbbur Listahátíðar series at Iðnó. Confirm exact date + time on listahatid.is closer to the trip — programmes typically lock in late March / early April.',
    status: 'expected',
    url: 'https://www.listahatid.is/en/vidburdir',
    tag: 'culture',
  },
  {
    date: 'Wed–Sat nightly',
    title: 'Mengi — experimental music + sound art',
    where: 'Óðinsgata 2',
    blurb:
      'Tiny, beautiful concert space for the experimental side of Iceland\'s music scene. One show a night, ~2,500–4,000 ISK. The opposite of a tourist trap. Programme published weekly.',
    status: 'confirmed',
    url: 'https://mengi.net',
    tag: 'music',
  },
  {
    date: 'Thu–Sat',
    title: 'Tjarnarbíó — independent theatre + dance',
    where: 'Tjarnargata 12',
    blurb:
      'Reykjavík\'s independent stage by Tjörnin pond. New Icelandic theatre and dance, often with English surtitles or non-verbal. Check the calendar for shows during our window.',
    status: 'expected',
    url: 'https://tjarnarbio.is',
    tag: 'theatre',
  },
  {
    date: 'Late Jun (after we leave)',
    title: 'Secret Solstice festival — sits AFTER our window',
    where: 'Laugardalur park',
    blurb:
      'Iceland\'s big international music festival sits around the summer solstice — typically Jun 19–22. We fly home Jun 14, so this is a heads-up: do NOT extend planning around it for this trip.',
    status: 'tentative',
    url: 'https://secretsolstice.is',
    tag: 'festival',
  },
  {
    date: 'Most weeknights',
    title: 'Iðnó — concerts, comedy, club nights',
    where: 'Vonarstræti 3, by Tjörnin',
    blurb:
      '1897 wooden theatre by the pond, used as Reykjavík\'s do-anything venue — small concerts, dance nights, the "How To Become Icelandic in 60 Minutes" English-language comedy show that runs nightly in summer.',
    status: 'confirmed',
    url: 'https://idno.is',
    tag: 'theatre',
  },
  {
    date: 'Rolling',
    title: 'Reykjavík Grapevine — local what\'s-on',
    where: 'Online',
    blurb:
      'The English-language paper covers gigs, exhibitions, restaurant openings. The single best source for "what\'s on tonight" once you\'re in town.',
    status: 'confirmed',
    url: 'https://grapevine.is',
    tag: 'culture',
  },
]
