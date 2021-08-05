import { Component, OnInit, } from '@angular/core';

@Component({
    selector: 'app-family-list',
    templateUrl: './family-list.component.html',
    styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {

    families: any[] =[
        {
          "date_added": "2021-02-24 11:56:22",
          "preferred_name": "Clay Atkins and Family",
          "about": "Est duis adipisicing consequat consequat sint reprehenderit incididunt adipisicing. Aute adipisicing nostrud cupidatat cupidatat excepteur sint tempor eu dolor voluptate duis ex aliquip deserunt. Reprehenderit reprehenderit officia ipsum eu amet velit pariatur tempor voluptate pariatur ipsum ut dolor quis. Et culpa et labore aliqua mollit est minim Lorem ad ut cupidatat. Sit do ullamco culpa eu ut minim.\r\n",
          "phone": "+1 (999) 504-2990",
          "mobile": "888-888-888",
          "country": "India",
          "unit": "Apple Unit",
          "family_id": 10,
          "custom_77493627-aaba-426e-48dc-b0b0d8d24c99": "Plumber",
          "id": "61083f502871699161ba4e76",
          "address": "377 Greenpoint Avenue, Townsend, Alaska, 4684"
        },
        {
          "date_added": "2021-02-24 11:56:22",
          "preferred_name": "Lott Donovan and Family",
          "about": "Ut labore consectetur voluptate proident exercitation elit veniam ipsum consectetur sunt ex voluptate eu duis. Ex non Lorem officia culpa cupidatat eiusmod culpa ut. Ipsum commodo nostrud duis velit fugiat aute. Et eiusmod qui commodo id excepteur fugiat ullamco fugiat quis fugiat aute incididunt. Cillum ut laboris cupidatat ea pariatur esse laborum mollit aliqua. Aliquip Lorem fugiat ex enim magna deserunt dolore.\r\n",
          "phone": "+1 (932) 515-3746",
          "mobile": "888-888-888",
          "country": "India",
          "family_id": 10,
          "unit": "Orange Unit",
          "custom_77493627-aaba-426e-48dc-b0b0d8d24c99": "Plumber",
          "id": "61083f508b399d26d013c629",
          "address": "255 Fane Court, Kieler, Ohio, 6293"
        },
        {
          "date_added": "2021-02-24 11:56:22",
          "preferred_name": "Hope Beasley and Family",
          "about": "Pariatur anim eiusmod laborum eu laborum ut culpa laborum sint. Deserunt esse adipisicing excepteur laboris nisi eiusmod id dolor nisi veniam nostrud. Ex ut Lorem velit sint ex cupidatat deserunt cillum fugiat amet labore culpa nostrud. Ipsum quis consequat dolor commodo duis ut nostrud fugiat ea id. Occaecat nisi nostrud sunt eiusmod aliquip et nostrud. Veniam ea Lorem eu aliquip aute. Id ea minim id eiusmod nostrud nulla magna cillum id ea.\r\n",
          "phone": "+1 (872) 579-2090",
          "mobile": "888-888-888",
          "country": "India",
          "unit": "Apple Unit",
          "family_id": 10,
          "custom_77493627-aaba-426e-48dc-b0b0d8d24c99": "Plumber",
          "id": "61083f50dd2a9d9e31424d16",
          "address": "256 High Street, Fairlee, Washington, 198"
        },
        {
          "date_added": "2021-02-24 11:56:22",
          "preferred_name": "Calhoun Oneal and Family",
          "about": "Laborum pariatur excepteur in duis. Elit quis ad incididunt sint. Proident ipsum ex mollit ullamco laboris eu aute eu veniam occaecat elit. Culpa nostrud esse cillum velit esse id ipsum esse fugiat laborum incididunt mollit enim ullamco. Nisi culpa non proident deserunt tempor labore nostrud qui labore minim nostrud amet non ea. Magna in ad dolor mollit.\r\n",
          "phone": "+1 (872) 433-3138",
          "mobile": "888-888-888",
          "country": "India",
          "family_id": 10,
          "unit": "Orange Unit",
          "custom_77493627-aaba-426e-48dc-b0b0d8d24c99": "Plumber",
          "id": "61083f503f59469888fde6c5",
          "address": "808 Montague Street, Gilmore, Kentucky, 8859"
        },
        {
          "date_added": "2021-02-24 11:56:22",
          "preferred_name": "Jerri Montgomery and Family",
          "about": "Mollit quis consectetur aliqua quis aliqua occaecat. Reprehenderit mollit exercitation eiusmod dolor veniam sunt adipisicing. Est do sit velit tempor ullamco nostrud amet. Adipisicing magna occaecat mollit proident tempor pariatur dolor nostrud.\r\n",
          "phone": "+1 (957) 527-3857",
          "mobile": "888-888-888",
          "country": "India",
          "unit": "Orange Unit",
          "family_id": 10,
          "custom_77493627-aaba-426e-48dc-b0b0d8d24c99": "Plumber",
          "id": "61083f50f7f382b78e8ba23e",
          "address": "908 Coffey Street, Tecolotito, Northern Mariana Islands, 5471"
        }
      ]
    ngOnInit(): void {

    }
}
