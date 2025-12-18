// country
export interface Country {
  id: number;
  name: string;
  fifa_code?: string;
}

// division
export interface Division {
  id: number;
  name: string;
  level: number;          // 1 = top division
  country_id?: number;
}

// club
export interface Club {
  id: number;
  name: string;
  short_name?: string;
  country_id?: number;
  division_id?: number ;
  stadium_name?: string;
  reputation: number;
  bank_balance: number;
  color:string;
}

// player
export interface Player {
  id: number;
  full_name: string;
  short_name?: string | null;
  position: string;       // 'GK' | 'DF' | 'MF' | 'FW' etc.
  age: number;
  skill: number;
  fitness: number;
  morale: number;
  value: number;
  wage: number;
  club_id?: number | null;
  is_listed: number;      // 0/1
}

// human_manager
export interface HumanManager {
  id: number;
  name: string;
  email?: string | null;
}

// save_game
export interface SaveGame {
  id: number;
  name: string;
  created_at: string;     // ISO datetime
  current_season_id?: number | null;
}

// season
export interface Season {
  id: number;
  save_game_id: number;
  year: number;
  is_current: number;     // 0/1
}

// competition
export interface Competition {
  id: number;
  name: string;
  type: string;           // 'LEAGUE' | 'CUP'
  country_id?: number | null;
  division_id?: number | null;
  is_international: number; // 0/1
}

// season_competition
export interface SeasonCompetition {
  id: number;
  season_id: number;
  competition_id: number;
}

// season_competition_club
export interface SeasonCompetitionClub {
  id: number;
  season_competition_id: number;
  club_id: number;
}

// league_table_row
export interface LeagueTableRow {
  id: number;
  season_competition_id: number;
  club_id: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goals_for: number;
  goals_against: number;
  points: number;
  position?: number | null;
}

// round
export interface Round {
  id: number;
  season_competition_id: number;
  name: string;
  sequence: number;
}

// match
export interface Match {
  id: number;
  round_id: number;
  home_club_id: number;
  away_club_id: number;
  kick_off?: string | null;   // ISO datetime
  home_goals?: number | null;
  away_goals?: number | null;
  played: number;             // 0/1
  attendance?: number | null;
  gate_revenue: number;
}

// match_event
export interface MatchEvent {
  id: number;
  match_id: number;
  minute: number;
  type: string;               // 'GOAL' | 'YELLOW' | 'RED' | 'SUB' ...
  player_id?: number | null;
  assisting_player_id?: number | null;
  extra_info?: string | null;
}

// match_lineup
export interface MatchLineup {
  id: number;
  match_id: number;
  club_id: number;
  player_id: number;
  is_starting: number;        // 0/1
  position?: string | null;
  minute_in: number;
  minute_out?: number | null;
  rating?: number | null;
  goals: number;
  assists: number;
  yellow_cards: number;
  red_cards: number;
}

// manager_contract
export interface ManagerContract {
  id: number;
  human_manager_id: number;
  save_game_id: number;
  club_id: number;
  start_season_id: number;
  end_season_id?: number | null;
}

// transfer
export interface Transfer {
  id: number;
  season_id: number;
  player_id: number;
  from_club_id?: number | null;
  to_club_id?: number | null;
  fee: number;
  transfer_date: string;      // ISO date
}
