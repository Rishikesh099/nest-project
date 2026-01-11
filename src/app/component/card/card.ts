import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  cards: any[]=[];
  constructor(
    private apiservice: Service,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}
  
  
  ngOnInit(): void {

    this.apiservice.getrecipes().subscribe((data: any)=>{
      this.cards = data.recipes;
      this.cdr.detectChanges();
    })
    
  }

 viewrecipedetails(recipe: any) {
  console.log('FULL recipe object ', recipe);

  if (!recipe) {
    console.error(' recipe is undefined');
    return;
  }

  if (!recipe.id) {
    console.error(' recipe.id is undefined');
    return;
  }

  this.router.navigate(['/recipe-details', recipe.id], { state: { recipe } });
}

  
  count=Array(6);
  c=Array(3);  

}
