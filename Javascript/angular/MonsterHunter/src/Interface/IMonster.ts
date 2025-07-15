export interface IMonster {
    id:          number;
    type:        WelcomeType;
    species:     string;
    elements:    Element[];
    name:        string;
    description: string;
    ailments:    Ailment[];
    locations:   Location[];
    resistances: Resistance[];
    weaknesses:  Weakness[];
    rewards:     Reward[];
}

export interface Ailment {
    id:          number;
    name:        string;
    description: string;
    recovery:    Recovery;
    protection:  Protection;
}

export interface Protection {
    skills: Skill[];
    items:  Item[];
}

export interface Item {
    id:          number;
    rarity:      number;
    value:       number;
    carryLimit:  number;
    name:        string;
    description: string;
}

export interface Skill {
    id:          number;
    name:        string;
    description: string;
}

export interface Recovery {
    actions: Action[];
    items:   Item[];
}

export enum Action {
    Dodge = "dodge",
}

export enum Element {
    Blast = "blast",
    Dragon = "dragon",
    Fire = "fire",
    Ice = "ice",
    Paralysis = "paralysis",
    Poison = "poison",
    Sleep = "sleep",
    Stun = "stun",
    Thunder = "thunder",
    Water = "water",
}

export interface Location {
    id:        number;
    zoneCount: number;
    name:      string;
}

export interface Resistance {
    element:   Element;
    condition: null | string;
}

export interface Reward {
    id:         number;
    item:       Item;
    conditions: Condition[];
}

export interface Condition {
    type:     ConditionType;
    rank:     Rank;
    quantity: number;
    chance:   number;
    subtype:  null | string;
}

export enum Rank {
    High = "high",
    Low = "low",
}

export enum ConditionType {
    Carve = "carve",
    Investigation = "investigation",
    Palico = "palico",
    Plunderblade = "plunderblade",
    Reward = "reward",
    Shiny = "shiny",
    Track = "track",
    Wound = "wound",
}

export enum WelcomeType {
    Large = "large",
    Small = "small",
}

export interface Weakness {
    element:   Element;
    stars:     number;
    condition: null | string;
}
