import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClientHelper } from 'src/network/httpClient';

@Injectable({
  providedIn: 'root',
})
export class MaterialTaxService {
  private readonly url = '/purchase/material_tax';

  constructor(private httpHelper: HttpClientHelper) {}
  addMaterialTax(materialTax) {
    return this.httpHelper.post(this.url, materialTax, {}).pipe(
      map((materialTax) => {
        return materialTax;
      })
    );
  }
}
