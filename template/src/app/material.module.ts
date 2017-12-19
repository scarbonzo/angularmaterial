import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatTableModule,
         MatInputModule, MatDatepickerModule, MatCheckboxModule,
         MatAutocompleteModule, MatFormFieldModule, MatCardModule,
         MatListModule, MatTabsModule, MatIconModule, MatTooltipModule,
         MatPaginatorModule, MatSortModule, MatProgressSpinnerModule,
         MatExpansionModule } from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule,
        MatListModule,
        MatTabsModule,
        MatIconModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule,
        MatListModule,
        MatTabsModule,
        MatIconModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatExpansionModule
    ]
})

export class MaterialModule { }
