import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableModule } from "@angular/material/table";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from "@angular/material/sidenav";
import { MatSelectModule } from "@angular/material/select";

const modules = [
    // CDK
    ScrollingModule,

    //MATERIAL
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatTableModule,

    // Select
    MatSelectModule,
    // Drawer
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent
]

@NgModule({
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class MaterialModule{}