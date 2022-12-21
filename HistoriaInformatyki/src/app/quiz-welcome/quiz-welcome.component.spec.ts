import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizWelcomeComponent } from './quiz-welcome.component';

describe('QuizWelcomeComponent', () => {
  let component: QuizWelcomeComponent;
  let fixture: ComponentFixture<QuizWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
