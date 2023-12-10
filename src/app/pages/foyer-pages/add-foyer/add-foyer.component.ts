import { Component } from '@angular/core';
import { Foyer } from 'src/app/Models/Foyer';
import { FoyerService } from '../../../services/foyer.service';
import { UniversiteService } from '../../../services/universite.service';
import { Universite } from '../../../Models/Universite';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})

export class AddFoyerComponent {
  foyer: Foyer = {
    idFoyer: 0,
    nomFoyer: '',
    capaciteFoyer: 0,
   // universite: { idUniversite: 0, nomUniversite: '', adresse: '' },
    //listBloc: [] // Assuming listBloc is an array property in Foyer
  };
  public universites: Universite[] = [];

  constructor(
    private foyerService: FoyerService, 
    private universiteService: UniversiteService,
    private router: Router) {}

  ngOnInit(): void {
    this.fetchUniversities();
  }

  private fetchUniversities(): void {
    this.universiteService.getUniversities().subscribe(
      (universites: Universite[]) => {
        this.universites = universites;
      },
      (error) => {
        console.error('Error fetching universities:', error);
      }
    );
  }

  creerFoyer(event:any) {
    const { idFoyer, ...foyerWithoutId } = this.foyer;
  

if(confirm('est ce que vous voulez vraiment ajouter ce foyer')){

  event.target.innerText="Adding..."
this.foyerService.addFoyer(foyerWithoutId as Partial<Foyer>).subscribe(
  (Response: Foyer) => {
    console.log('Foyer ajouté avec succès :', Response);
    this.router.navigate(['/foyers']) ;
  },
  (error) => {
    console.error('Erreur lors de l\'ajout du foyer :', error);
    if (error instanceof HttpErrorResponse) {
      console.error('Full error response:', error);
    }
  }
);
}
  }

  test(err: any){
    console.log(err);
  }

}
