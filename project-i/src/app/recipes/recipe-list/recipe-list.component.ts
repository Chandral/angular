import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Tacos', 'Mexican food', 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/1520956952-chicken-tacos-horizontal.jpg'),
    new Recipe('Burritos', 'Mexican food', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/6/3/1/DV3004_The-Chuys-Burrito_s4x3.jpg.rend.hgtvcom.826.620.suffix/1559586868357.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
