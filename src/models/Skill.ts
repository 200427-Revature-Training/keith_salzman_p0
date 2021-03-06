export class Skill {
    id: number;
    skillLevel: string;
    technology: string;

/**
 *  Static function for creating a Skill instance based on
 *  the structure within the database. This accepts an object of
 *  type defined by the interface SkillRow and uses that to
 * create an instance of Skill.
 */

static from(obj: SkillRow): Skill {
    const skill = new Skill(
        obj.id,
        obj.skill_level,
        obj.technology
    );
    return skill;
}

    constructor( id: number, skillLevel: string, technology: string, ) {
        this.id = id;
        this.skillLevel = skillLevel;
        this.technology = technology;
    }
}

export interface SkillRow {
    id: number;
    skill_level: string;
    technology: string;
}

