import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {
  annonce;
  annonceForm;

  constructor(private formBuilder: FormBuilder) { 
    this.annonceForm = this.formBuilder.group(
    {
      name: '',
      numberofseats: '',
      rdvdatetime: '',
      journeyfrom: '',
      journeyto: '',
      authorname: '',
      authorage: '',
      authorgender: '',
      chercheoupropose: '',
      message: '',
      contrepartietype: '',
      contrepartiemsg: '',
    })
  }

  onSubmit(annonceData) {
    // Process checkout data here
    console.warn('Your annonce has been submitted', annonceData);
 
    this.annonceForm.reset();
  }

  ngOnInit() {
  }

}