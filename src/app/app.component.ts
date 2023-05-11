import { Component, Input, ViewChildren, QueryList  } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DrawerItem, DrawerSelectEvent, ExpansionPanelComponent, SelectEvent   } from "@progress/kendo-angular-layout";

import { countries } from "./models/countries";
import { tags, articles, recommendedArticles } from "./models/articles-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kendo-angular-themebuilder-themes';

  // button
  public onButtonClick(): void {
    console.log("click");
    alert("Kendo Angular UI Button was clicked.");
  }

  // conversetional-ui
  public bot: User = { id: 0 };
  public user: User = { id: 1 };
  public messages: Message[] = [
      {
          author: this.bot,
          text: 'Do you like Angular?'
      },
      {
        author: this.user,
        text: 'Definitely!',
      }
  ];
  public sendMessage(e: any): void {
    this.messages = [...this.messages, e.message];
  }

  // kendo-dialog ; kendo-dialog-actions
  // Do not show the Dialog initially.
  public opened = false;

  public closeDialog(): void {
    this.opened = false;
  }

  public openDialog(): void {
    this.opened = true;
  }

  // kendo-dropdownlist
  public listItems: Array<string> = [
      'Baseball',
      'Basketball',
      'Cricket',
      'Field Hockey',
      'Football',
      'Table Tennis',
      'Tennis',
      'Volleyball'
  ];

  // kendo-gauge
  public gaugeValue = 30;

  // kendo-grid
  public gridData: any[] = [
    {
      ProductID: 1,
      ProductName: "Chai",
      UnitPrice: 18,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 2,
      ProductName: "Chang",
      UnitPrice: 19,
      Category: {
        CategoryID: 1,
        CategoryName: "Beverages",
      },
    },
    {
      ProductID: 3,
      ProductName: "Aniseed Syrup",
      UnitPrice: 10,
      Category: {
        CategoryID: 2,
        CategoryName: "Condiments",
      },
    },
  ];

  // kendo-formfield
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(new Date(2000, 10, 10)),
    email: new FormControl("", Validators.email),
    acceptNews: new FormControl(),
  });

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
  }

  public clearForm(): void {
    this.registerForm.reset();
  }

  // kendo-switch
  public checked: boolean = true;

  // kendo-slider
  public valueHorizontal = 0;
  public valuesVertical: number[] = [10, 5, 0, 10, 15];
  public minSlide = -20;
  public maxSlide = 20;
  public largeStep = 20;
  public smallStep = 1;

  //kendo-floaringlabel
  public dateFloatingLabel: Date = new Date();
  public dataFloatingLabel: string[] = ["foo", "bar", "baz"];
  public comboBoxValueFloatingLabel: string = "";
  public ageFloatingLabel: number = 24;

  // kendo-label w/ kendo-formgroup
  public dataKendoLabel = {
    fullName: "",
    email: "",
    age: 0,
  };

  public formKendoLabel: FormGroup = new FormGroup({
    fullName: new FormControl(this.dataKendoLabel.fullName, [Validators.required]),
    email: new FormControl(this.dataKendoLabel.email, [
      Validators.required,
      Validators.email,
    ]),
    age: new FormControl(this.dataKendoLabel.age, [
      Validators.required,
      Validators.min(18),
    ]),
  });

  public submitFormKendoLabel(): void {
    console.log(this.formKendoLabel.value);
  }

  public clearFormKendoLabel(): void {
    this.formKendoLabel.reset();
  }

  // kendo-avatar
  public firstContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg";
  public secondContactImage =
    "https://demos.telerik.com/kendo-ui/content/web/Customers/GOURL.jpg";

  public contactImages: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
    {
      avatar: this.firstContactImage,
      name: "Michael Holz",
      position: "Manager",
    },
    {
      avatar: this.secondContactImage,
      name: "André Stewart",
      position: "Product Manager",
    },
  ];

  public contactInitials: Array<{
    avatar: string;
    name: string;
    position: string;
  }> = [
    { avatar: "JS", name: "Jason Smith", position: "UX Designer" },
    { avatar: "GP", name: "George Porter", position: "Software Engineer" },
  ];

  // kendo-drawer
  public selected = "Inbox";

  public items: Array<DrawerItem> = [
    { text: "Inbox", icon: "k-i-inbox", selected: true },
    { separator: true },
    { text: "Notifications", icon: "k-i-bell" },
    { text: "Calendar", icon: "k-i-calendar" },
    { separator: true },
    { text: "Attachments", icon: "k-i-envelop-link" },
    { text: "Favourites", icon: "k-i-star-outline" },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    this.selected = ev.item.text;
  }

  // kendo-expansionpanel
  @ViewChildren(ExpansionPanelComponent)
  public panelsExpansionPnl: QueryList<ExpansionPanelComponent> = new QueryList<ExpansionPanelComponent>();

  public itemsExpansionPnl = countries;

  public onAction(index: number): void {
    this.panelsExpansionPnl.forEach((panel, idx) => {
      if (idx !== index && panel.expanded) {
        panel.toggle();
      }
    });
  }

  // kendo-gridlayout
  public tagsKendoGrid = tags;
  public articlesKendoGrid = articles;
  public recommendedArticlesKendoGrid = recommendedArticles;
  public selectedDateKendoGrid: Date | undefined;

  handleValueChange(): void {
    this.articlesKendoGrid.sort(() => Math.random() - 0.5);
    this.recommendedArticlesKendoGrid.sort(() => Math.random() - 0.5);
  }

  // kendo-panelbar
  private baseImageUrl =
    "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  public imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + ".jpg";
  }

  // kendo-stepper
  public currentKendoStepper = 1;

  public stepsKendoStepper = [
    { label: "Personal Info", icon: "user" },
    { label: "Education", icon: "book" },
    { label: "Attachments", icon: "paperclip", optional: true },
    { label: "Preview", icon: "eye" },
    { label: "Submit", icon: "file-add" },
  ];

  // kenod-tabstrip
  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}

// conversetional-ui
class User {
  id: number;
 
  constructor(id: number) {
    this.id = id;
  }
}

// conversetional-ui
class Message {
  author: User;
  text: string;
 
  constructor(author: User, text: string) {
    this.author = author;
    this.text = text;
  }
}


