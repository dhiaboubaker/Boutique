import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailsProductsComponent } from './home-details-products.component';

describe('HomeDetailsProductsComponent', () => {
  let component: HomeDetailsProductsComponent;
  let fixture: ComponentFixture<HomeDetailsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDetailsProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDetailsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
