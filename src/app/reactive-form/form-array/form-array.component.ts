import { Component } from '@angular/core';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  createForm = this.formBuilder.group({
    channel: [1],
    careScriptName: [],
    careScriptSteps: this.formBuilder.array([]),
  });

  isSaving = false;
  actions: ICareScriptAction[];
  channels = CHANNELS;
  currentChannel = 1;

  constructor(
    private formBuilder: FormBuilder,
    protected activatedRoute: ActivatedRoute,
    private careScriptService: CareScriptService,
    private careScriptActionService: CareScriptActionService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.careScriptActionService.query({ channelId: 1 }).subscribe(res => {
      this.actions = res.body || [];
      this.newStep(0);
    });
  }

  get careScriptSteps() {
    return this.createForm.controls['careScriptSteps'] as FormArray;
  }

  getFormGroupAtIndex(index: number) {
    return this.careScriptSteps.at(index) as FormGroup;
  }

  createFromForm(): any {
    return {
      careScriptName: this.createForm.get(['careScriptName'])!.value,
      channelId: this.createForm.get(['channel'])!.value,
      careScriptSteps: this.convertStepValues(),
    };
  }

  save() {
    this.isSaving = true;
    const param = this.createFromForm();

    this.careScriptService.saveScriptStep({ ...param }).subscribe(
      res => {
        this.isSaving = false;
        this.previousState();
      },
      error => {
        this.isSaving = false;
      }
    );
  }

  createStepForm(): FormGroup {
    return this.formBuilder.group({
      action: [this.actions[0].id],
      delay: [5, [Validators.required, Validators.min(1)]],
      limitPerDay: [0, [Validators.required, Validators.min(0)]],
    });
  }

  newStep(afterIndex: number) {
    this.careScriptSteps.insert(afterIndex + 1, this.createStepForm());
  }

  removeStep(index: number) {
    if (this.careScriptSteps.length <= 1) {
      return;
    } else {
      this.careScriptSteps.removeAt(index);
    }
  }

  // reselectStepAction() {
  //   for (let i = 0; i < this.careScriptSteps.length; i++) {
  //     const step = this.getFormGroupAtIndex(i);
  //     const stepActionId = step.get('action').value;
  //     step.controls['action'].setValue(stepActionId);
  //   }
  // }

  convertStepValues() {
    const doStepValues = this.careScriptSteps.value;
    const stepValues = [];
    let seq = 0;
    doStepValues.forEach(value => {
      stepValues.push({
        sequence: seq++,
        delay: Number(value.delay),
        careScriptAction: {
          id: value.action,
        },
        limitPerDay: value.limitPerDay,
      });
    });
    return stepValues;
  }

  // selectChannel(event: any) {
  //   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //     maxWidth: '400px',
  //     data: reloadChannelActionConfirmDialogConfig,
  //   });

  //   dialogRef.afterClosed().subscribe(dialogResult => {
  //     if (dialogResult) {
  //       const channelId = event.target.value;
  //       this.currentChannel = channelId;
  //       this.careScriptActionService.query({ channelId: channelId }).subscribe(res => {
  //         this.actions = res.body || [];
  //         this.reselectStepAction();
  //       });
  //     } else {
  //       this.createForm.controls['channel'].setValue(this.currentChannel);
  //     }
  //   });
  // }

  selectChannel(event: any) {
    const channelId = event.target.value;
    this.careScriptActionService.query({ channelId: channelId }).subscribe(res => {
      this.actions = res.body || [];
      this.clearAllSteps();
    });
  }

  clearAllSteps() {
    this.careScriptSteps.clear();
    this.careScriptSteps.push(this.createStepForm());
  }

  validSpaceName(event: any) {
    this.createForm.controls['careScriptName'].setValue(validSpace(event.target.value, 'careScriptName', this.createForm));
  }

  previousState() {
    window.history.back();
  }
}
