export interface PokemonResponse {
    abilities: Ability[]
    base_experience: number
    id: number
    moves: Mfe[]
    name: string
    stats: Stat[]
    weight: number
  }
  
  export interface Ability {
    ability: Ability2
    is_hidden: boolean
    slot: number
  }
  
  export interface Ability2 {
    name: string
    url: string
  }
  
  export interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
  }
  
  export interface Move {
    name: string
    url: string
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    version_group: VersionGroup
  }
  
  export interface MoveLearnMethod {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface Stat {
    base_stat: number
    effort: number
    stat: Stat2
  }
  
  export interface Stat2 {
    name: string
    url: string
  }
  