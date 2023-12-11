import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class AddFoyerComponent implements OnInit {
  foyerForm: FormGroup;
  public universites: Universite[] = [];

  constructor(
    private fb: FormBuilder,
    private foyerService: FoyerService, 
    private universiteService: UniversiteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchUniversities();
    this.initForm();
  }

  private initForm(): void {
    this.foyerForm = this.fb.group({
      nomFoyer: ['', [Validators.required]],
      capaciteFoyer: [null, [Validators.required, Validators.min(50)]]
    });
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

  creerFoyer() {
    if (confirm('Est-ce que vous voulez vraiment ajouter ce foyer ?')) {
      const foyerData: Partial<Foyer> = {
        nomFoyer: this.foyerForm.value.nomFoyer,
        capaciteFoyer: this.foyerForm.value.capaciteFoyer
      };
  
      this.foyerService.addFoyer(foyerData).subscribe(
        (response: Foyer) => {
          console.log('Foyer ajouté avec succès :', response);
          this.router.navigate(['/foyers']);
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
  
}
