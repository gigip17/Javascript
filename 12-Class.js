
/// Les classes sont un outil que les développeurs utilisent pour produire rapidement des objets similaires

// Structure
class className ()

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }

}
const surgeonCurry = new Surgeon ('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon ('Durant', 'Orthopedics');

