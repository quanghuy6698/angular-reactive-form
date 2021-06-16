import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/shared/model/product.model';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  productGroupForm = this.formBuilder.group({
    productGroup: [''],
    productList: this.formBuilder.array([]),
  });

  productListDisplay: IProduct[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.newProduct(0);
  }

  /**
   * Get productList
   *
   * @return productList
   */
  get productList(): FormArray {
    return this.productGroupForm.controls['productList'] as FormArray;
  }

  /**
   * Get productForm at index in productList
   *
   * @param index refer productForm index in productList
   * @returns productForm
   */
  getProductForm(index: number): FormGroup {
    return this.productList.at(index) as FormGroup;
  }

  /**
   * Simple display product list
   */
  createProductGroup() {
    const doProductListDisplay: IProduct[] = [];
    const doProductListValue = this.productList.value;
    doProductListValue.forEach((product: any) => {
      doProductListDisplay.push({
        name: product.name,
        quantity: product.quantity,
        price: product.price,
      });
    });
    this.productListDisplay = doProductListDisplay;
  }

  /**
   * Create a product form
   *
   * @returns product form
   */
  createProductForm(): FormGroup {
    return this.formBuilder.group({
      name: [''],
      quantity: [0],
      price: [1],
    });
  }

  /**
   * Add new product after index
   *
   * @param afterIndex refer to productForm index stand in front of productForm will add
   */
  newProduct(afterIndex: number) {
    this.productList.insert(afterIndex + 1, this.createProductForm());
  }

  /**
   * Delete product at index
   *
   * @param index refer to productForm index in productList
   */
  deleteProduct(index: number) {
    if (this.productList.length <= 1) {
      return;
    } else {
      this.productList.removeAt(index);
    }
  }
}
