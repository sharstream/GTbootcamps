class Character {
  constructor(name, role, age, forcePoints) {
    this.name = name;
    this.role = role;
    this.age = age;
    this.forcePoints = forcePoints;
  }

  standardize() {
    return this.name.replace(/\s+/g, "").toLowerCase();
  }
}

module.exports = Character;

