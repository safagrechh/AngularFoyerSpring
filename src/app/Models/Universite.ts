import { Foyer } from "./Foyer";

export interface Universite {
    idUniversite: number;
    nomUniversite: string;
    adresse: string;
    foyer: Foyer ; 
    
 // Assuming Foyer is another model/interface
  }