import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-farmer-page',
  templateUrl: './farmer-page.component.html',
  styleUrls: ['./farmer-page.component.css']
})
export class FarmerPageComponent implements OnInit {
  constructor(private router:Router) { }
 
  Jumppg()
  {
    this.router.navigate(["placerequest"]);
  }
  

  ngOnInit(): void {
  }

}
