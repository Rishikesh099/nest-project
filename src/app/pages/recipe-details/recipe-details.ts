import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  imports: [],
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css',
})
export class RecipeDetails {
  recipe: any;

  constructor(private route : ActivatedRoute){}

  ngOnInit(): void {
      this.route.queryParams.subscribe((res: any)=>{
        this.recipe=res;
        if (history.state && history.state.recipe){
          this.recipe=history.state.recipe;
        }
      });
  }
}
