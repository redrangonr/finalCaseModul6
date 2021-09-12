import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListAuthorComponent } from './post-list-author.component';

describe('PostListAuthorComponent', () => {
  let component: PostListAuthorComponent;
  let fixture: ComponentFixture<PostListAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
