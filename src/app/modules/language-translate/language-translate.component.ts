import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-translate',
  templateUrl: './language-translate.component.html',
  styleUrls: ['./language-translate.component.css']
})
export class LanguageTranslateComponent implements OnInit {

  /**
   * @ Function : constructor
   * @ Purpose  : Translating the language
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  constructor(public translate: TranslateService) { 
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }
/**
   * @ Function : switchLang
   * @ Purpose  : Switching between the language
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  public switchLang(lang: string) {
    this.translate.use(lang);
  }

}
