import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css'],
})
export class MultiselectComponent implements OnInit {
  available_languages: Array<string> = [];
  selected_languages: Array<string> = [];
  primary_language: Array<string> = [];
  myArray: Array<{}> = [];
  action = 'create';

  constructor() {}

  ngOnInit() {
    this.available_languages = [
      'Slovenian',
      'Slovak',
      'Urdu',
      'Polish',
      'Vietnamese',
      'Albanian',
      'Swedish',
      'Ivish',
      'Hebrew',
      'Armenian',
      'Danish',
      'Marathi',
      'Gujarati',
      'Japanese',
      'Greek',
      'Latvian',
      'Luxembourgish',
      'Italian',
      'Catalan',
      'Icelandic',
      'Czech',
      'Telugu',
      'Russian',
      'Tagalog',
      'Romanian',
      'Yoruba',
      'Portuguese',
      'Chinese',
      'Ukrainian',
      'Serbian',
      'Sinhala',
      'Malayalam',
      'Ligurian',
      'Kannada',
      'Arabic',
      'Croatin',
      'Hungarian',
      'Dutch',
      'Bulgarian',
      'Bengali',
      'Nepali',
      'Afrikaans',
      'Norwegian Bokmal',
      'Hindi',
      'German',
      'Korean',
      'Finnish',
      'Indonesian',
      'French',
      'Spanish',
      'Estonian',
      'English',
      'Persian',
      'Lithuanian',
      'Basque',
      'Tatar',
      'Tamil',
      'Thai',
      'Turkish',
      'Malay',
    ];

    let i = 0;
    i++;
    this.available_languages.forEach((data, i) => {
      this.myArray.push({ id: i, name: data });
    });

    console.log(JSON.stringify(this.myArray));
    this.selectAllForDropdownItems(this.myArray);
  }

  selectAllForDropdownItems(items: any[]) {
    let allSelect = (items) => {
      items.forEach((element) => {
        element['selectedAllGroup'] = 'selectedAllGroup';
      });
    };

    allSelect(items);
    console.log('Available languages -> ' + JSON.stringify(this.myArray));
  }

  onChange($event) {
    console.log('change -> ', $event);
  }
}
