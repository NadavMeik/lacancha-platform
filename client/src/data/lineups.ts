export type LineupRole = 'GK' | 'DF' | 'MF' | 'FW'

export type LineupPlayer = {
  playerId: string
  name: string
  number: number
  role: LineupRole
}

export type TeamLineup = {
  formation: string
  starters: LineupPlayer[]
  bench: LineupPlayer[]
}

export type MatchLineups = {
  matchId: string
  home: TeamLineup
  away: TeamLineup
}

function xi(
  players: Array<[string, string, number, LineupRole]>,
): LineupPlayer[] {
  return players.map(([playerId, name, number, role]) => ({
    playerId,
    name,
    number,
    role,
  }))
}

function bench(
  players: Array<[string, string, number, LineupRole]>,
): LineupPlayer[] {
  return xi(players)
}

const MCI_LIV: MatchLineups = {
  matchId: 'pl-2025-12-mci-liv',
  home: {
    formation: '4-2-3-1',
    starters: xi([
      ['mci-ederson', 'Ederson', 31, 'GK'],
      ['mci-walker', 'Walker', 2, 'DF'],
      ['mci-dias', 'Dias', 3, 'DF'],
      ['mci-aké', 'Aké', 6, 'DF'],
      ['mci-gvardiol', 'Gvardiol', 24, 'DF'],
      ['mci-rodri', 'Rodri', 16, 'MF'],
      ['mci-kovacic', 'Kovačić', 8, 'MF'],
      ['mci-silva', 'Bernardo Silva', 20, 'MF'],
      ['mci-debruyne', 'De Bruyne', 17, 'MF'],
      ['mci-foden', 'Foden', 47, 'MF'],
      ['mci-haaland', 'Haaland', 9, 'FW'],
    ]),
    bench: bench([
      ['mci-ortega', 'Ortega', 18, 'GK'],
      ['mci-stones', 'Stones', 5, 'DF'],
      ['mci-nunes', 'Nunes', 27, 'MF'],
      ['mci-grealish', 'Grealish', 10, 'MF'],
      ['mci-alvarez', 'Álvarez', 19, 'FW'],
    ]),
  },
  away: {
    formation: '4-3-3',
    starters: xi([
      ['liv-alisson', 'Alisson', 1, 'GK'],
      ['liv-alexander', 'Alexander-Arnold', 66, 'DF'],
      ['liv-konate', 'Konaté', 5, 'DF'],
      ['liv-van', 'Van Dijk', 4, 'DF'],
      ['liv-robertson', 'Robertson', 26, 'DF'],
      ['liv-mac', 'Mac Allister', 10, 'MF'],
      ['liv-szobo', 'Szoboszlai', 8, 'MF'],
      ['liv-jones', 'Jones', 17, 'MF'],
      ['liv-salah', 'Salah', 11, 'FW'],
      ['liv-darwin', 'Núñez', 9, 'FW'],
      ['liv-diaz', 'Díaz', 7, 'FW'],
    ]),
    bench: bench([
      ['liv-kelleher', 'Kelleher', 62, 'GK'],
      ['liv-gomez', 'Gomez', 2, 'DF'],
      ['liv-graven', 'Gravenberch', 38, 'MF'],
      ['liv-gakpo', 'Gakpo', 18, 'FW'],
      ['liv-jota', 'Jota', 20, 'FW'],
    ]),
  },
}

const ARS_TOT: MatchLineups = {
  matchId: 'pl-2025-12-ars-tot',
  home: {
    formation: '4-3-3',
    starters: xi([
      ['ars-ramsdale', 'Raya', 1, 'GK'],
      ['ars-white', 'White', 4, 'DF'],
      ['ars-saliba', 'Saliba', 2, 'DF'],
      ['ars-gabriel', 'Gabriel', 6, 'DF'],
      ['ars-zinchenko', 'Zinchenko', 35, 'DF'],
      ['ars-odegaard', 'Ødegaard', 8, 'MF'],
      ['ars-rice', 'Rice', 41, 'MF'],
      ['ars-havertz', 'Havertz', 29, 'MF'],
      ['ars-saka', 'Saka', 7, 'FW'],
      ['ars-jesus', 'Jesus', 9, 'FW'],
      ['ars-martinelli', 'Martinelli', 11, 'FW'],
    ]),
    bench: bench([
      ['ars-hein', 'Hein', 31, 'GK'],
      ['ars-tomi', 'Tomiyasu', 18, 'DF'],
      ['ars-vieira', 'Vieira', 21, 'MF'],
      ['ars-trossard', 'Trossard', 19, 'FW'],
    ]),
  },
  away: {
    formation: '3-4-3',
    starters: xi([
      ['tot-vicario', 'Vicario', 13, 'GK'],
      ['tot-romero', 'Romero', 17, 'DF'],
      ['tot-van', 'Van de Ven', 37, 'DF'],
      ['tot-davies', 'Davies', 33, 'DF'],
      ['tot-porro', 'Porro', 23, 'MF'],
      ['tot-bissouma', 'Bissouma', 8, 'MF'],
      ['tot-bentancur', 'Bentancur', 30, 'MF'],
      ['tot-son', 'Son', 7, 'FW'],
      ['tot-kulusevski', 'Kulusevski', 21, 'FW'],
      ['tot-richarlison', 'Richarlison', 9, 'FW'],
      ['tot-maddison', 'Maddison', 10, 'MF'],
    ]),
    bench: bench([
      ['tot-forster', 'Forster', 20, 'GK'],
      ['tot-dragusin', 'Dragusin', 6, 'DF'],
      ['tot-johnson', 'Johnson', 22, 'FW'],
    ]),
  },
}

const ELC_SEV: MatchLineups = {
  matchId: 'laliga-2025-elc-sev',
  home: {
    formation: '4-4-2',
    starters: xi([
      ['elc-gazz', 'Gazzaniga', 13, 'GK'],
      ['elc-pal', 'Palacios', 23, 'DF'],
      ['elc-big', 'Bigas', 4, 'DF'],
      ['elc-gon', 'González', 5, 'DF'],
      ['elc-cis', 'Cissé', 12, 'DF'],
      ['elc-fidel', 'Fidel', 10, 'MF'],
      ['elc-masc', 'Mascarell', 8, 'MF'],
      ['elc-more', 'Morente', 17, 'MF'],
      ['elc-pere', 'Pere Milla', 11, 'MF'],
      ['elc-boy', 'Boye', 9, 'FW'],
      ['elc-lucas', 'Lucas Pérez', 7, 'FW'],
    ]),
    bench: bench([
      ['elc-edgar', 'Badía', 1, 'GK'],
      ['elc-josan', 'Josan', 16, 'MF'],
    ]),
  },
  away: {
    formation: '4-3-3',
    starters: xi([
      ['sev-bono', 'Bounou', 13, 'GK'],
      ['sev-navas', 'Navas', 16, 'DF'],
      ['sev-bade', 'Badé', 23, 'DF'],
      ['sev-marc', 'Marcão', 23, 'DF'],
      ['sev-acuna', 'Acuña', 19, 'DF'],
      ['sev-rakitic', 'Rakitić', 10, 'MF'],
      ['sev-gudelj', 'Gudelj', 6, 'MF'],
      ['sev-torres', 'Óliver Torres', 21, 'MF'],
      ['sev-ocampos', 'Ocampos', 5, 'FW'],
      ['sev-en', 'En-Nesyri', 15, 'FW'],
      ['sev-suso', 'Suso', 7, 'FW'],
    ]),
    bench: bench([
      ['sev-dmitrovic', 'Dmitrović', 1, 'GK'],
      ['sev-lamela', 'Lamela', 17, 'FW'],
    ]),
  },
}

const FCB_BAY: MatchLineups = {
  matchId: 'ucl-2025-md5-fcb-bay',
  home: {
    formation: '4-3-3',
    starters: xi([
      ['fcb-ter', 'ter Stegen', 1, 'GK'],
      ['fcb-kounde', 'Koundé', 23, 'DF'],
      ['fcb-araujo', 'Araújo', 4, 'DF'],
      ['fcb-martinez', 'Martínez', 5, 'DF'],
      ['fcb-balde', 'Balde', 3, 'DF'],
      ['fcb-dejong', 'de Jong', 21, 'MF'],
      ['fcb-gundo', 'Gündoğan', 22, 'MF'],
      ['fcb-pedri', 'Pedri', 8, 'MF'],
      ['fcb-raphinha', 'Raphinha', 11, 'FW'],
      ['fcb-lewy', 'Lewandowski', 9, 'FW'],
      ['fcb-yamal', 'Yamal', 19, 'FW'],
    ]),
    bench: bench([
      ['fcb-peña', 'Peña', 13, 'GK'],
      ['fcb-gavi', 'Gavi', 6, 'MF'],
    ]),
  },
  away: {
    formation: '4-2-3-1',
    starters: xi([
      ['bay-neuer', 'Neuer', 1, 'GK'],
      ['bay-pavard', 'Laimer', 27, 'DF'],
      ['bay-upa', 'Upamecano', 2, 'DF'],
      ['bay-kim', 'Min-jae', 3, 'DF'],
      ['bay-davies', 'Davies', 19, 'DF'],
      ['bay-kimmich', 'Kimmich', 6, 'MF'],
      ['bay-goretzka', 'Goretzka', 8, 'MF'],
      ['bay-musiala', 'Musiala', 42, 'MF'],
      ['bay-sane', 'Sané', 10, 'MF'],
      ['bay-coman', 'Coman', 11, 'MF'],
      ['bay-kane', 'Kane', 9, 'FW'],
    ]),
    bench: bench([
      ['bay-ulreich', 'Ulreich', 26, 'GK'],
      ['bay-muller', 'Müller', 25, 'FW'],
    ]),
  },
}

const USA_ARG: MatchLineups = {
  matchId: 'wc-2026-sf-usa-arg',
  home: {
    formation: '4-4-2',
    starters: xi([
      ['usa-turner', 'Turner', 1, 'GK'],
      ['usa-dest', 'Dest', 2, 'DF'],
      ['usa-ream', 'Ream', 5, 'DF'],
      ['usa-richards', 'Richards', 4, 'DF'],
      ['usa-robinson', 'Robinson', 18, 'DF'],
      ['usa-mckennie', 'McKennie', 8, 'MF'],
      ['usa-adams', 'Adams', 4, 'MF'],
      ['usa-reyna', 'Reyna', 7, 'MF'],
      ['usa-weah', 'Weah', 21, 'MF'],
      ['usa-pulisic', 'Pulisic', 10, 'FW'],
      ['usa-balogun', 'Balogun', 20, 'FW'],
    ]),
    bench: bench([
      ['usa-horvath', 'Horvath', 18, 'GK'],
      ['usa-scally', 'Scally', 22, 'DF'],
    ]),
  },
  away: {
    formation: '4-3-3',
    starters: xi([
      ['arg-martinez', 'E. Martínez', 23, 'GK'],
      ['arg-molina', 'Molina', 26, 'DF'],
      ['arg-romero', 'Romero', 13, 'DF'],
      ['arg-otamendi', 'Otamendi', 19, 'DF'],
      ['arg-taglia', 'Tagliafico', 3, 'DF'],
      ['arg-depaul', 'De Paul', 7, 'MF'],
      ['arg-mcallister', 'Mac Allister', 20, 'MF'],
      ['arg-enzo', 'Fernández', 24, 'MF'],
      ['arg-di', 'Di María', 11, 'MF'],
      ['arg-messi', 'Messi', 10, 'FW'],
      ['arg-julian', 'Álvarez', 9, 'FW'],
    ]),
    bench: bench([
      ['arg-rulli', 'Rulli', 12, 'GK'],
      ['arg-lautaro', 'Martínez', 22, 'FW'],
    ]),
  },
}

const LINEUPS: Record<string, MatchLineups> = {
  [MCI_LIV.matchId]: MCI_LIV,
  [ARS_TOT.matchId]: ARS_TOT,
  [ELC_SEV.matchId]: ELC_SEV,
  [FCB_BAY.matchId]: FCB_BAY,
  [USA_ARG.matchId]: USA_ARG,
}

export function getLineups(matchId: string): MatchLineups | undefined {
  return LINEUPS[matchId]
}
