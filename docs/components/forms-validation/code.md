# Forms validation - Code

> Code examples and API documentation for the ix-validation-tooltip

import Admonition from '@theme/Admonition';

# Forms validation - Code

This section details the technical implementation of validation in form components, utilizing component attributes along with corresponding CSS classes to represent various validation states.

## Validation text

- **helperText** (optional): Text displayed below the field component to provide additional information.
- **infoText** (optional): Informational text for the field component.
- **warningText** (optional): Warning text for the field component.
- **invalidText** (optional): Error text for the field component.
- **validText** (optional): Valid text for the field component.
- **showTextAsTooltip** (optional): Determines whether to display helper, info, warning, error, and valid text as tooltips.

## Validation states

To change the validation representation, you have to apply the corresponding classes to the component.

- `ix-valid`: To show component as valid (Priority 1)
- `ix-info`: To show component as info (Priority 2)
- `ix-warning`: To show component as warning (Priority 3)
- `ix-invalid`: To show component as invalid (Priority 4)

These classes have different priority levels, which determining in which order the styling is applied to the component. (`1` is the lowest priority and `3` the highest)

## Example

```html
<ix-select class="ix-invalid ix-info"></ix-select>
```

Above example will result in displaying the component as `invalid`, because `invalid` has a higher priority than `info`.

<Admonition type="info" title="You are using Angular?">
  When using Angular in combination with reactive forms, it is not necessary to
  manually apply the CSS classes `.ix-invalid` and `.ix-valid`. This will be
  done automatically through value accessors.
</Admonition>

## Suppress internal validation

To suppress the internal validation of a component, you have to provide the `novalidate` attribute to the [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#novalidate).

```html
<form novalidate>
  <!-- form content -->
</form>
```

## Basic

## Angular

<Admonition type="info" title="Important">
      Please note that using the `required` attribute in an Angular application could result in unfavourabe behaviour displaying the field as invalid even if there was no user interaction yet.
      To avoid that it is suggested not to add the `required` attribute, but implement a custom validator for required fields instead (see `name` and `last-name` in the following code).
    </Admonition>
    ### React Examples

#### form-validation.tsx
```tsx
import './form-validation.scoped.css';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  iconBezierCurve,
  iconLocation,
  iconStar,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxCheckbox,
  IxCheckboxGroup,
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxLayoutAuto,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxSelect,
  IxSelectItem,
  IxInput,
  IxTextarea,
  IxTypography,
} from '@siemens/ix-react';
import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  'last-name': yup.string(),
  address: yup.string(),
  thresholdLimitA: yup
    .number()
    .max(5, 'The threshold must be equal or lesser than 5'),
  thresholdLimitB: yup.number(),
  begin: yup.string(),
  end: yup
    .string()
    .test('valid-date', '2024/05/05 is not allowed to pick', (value) => {
      return value !== '2024/05/05';
    }),
  comment: yup.string(),
  agreed: yup.boolean().oneOf([true], 'You must agree to continue'),
  'booking-option': yup.string(),
  'travel-option': yup.string(),
  'room-size': yup.number(),
  email: yup.string(),
  pin: yup.string(),
  'confirm-pin': yup.string().oneOf([yup.ref('pin')], 'PIN does not match'),
  upload: yup.string(),
  'upload-path': yup.string().required('You need to upload a file'),
});

export default function FormValidation() {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [showWarning, setShowWarning] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      name: 'John',
      'last-name': 'Muster',
      address: 'John Street 14',
      thresholdLimitA: 6,
      thresholdLimitB: 7,
      begin: '2024/05/05',
      end: '2024/05/05',
      comment: 'Some info',
      agreed: false,
      'booking-option': '2',
      'travel-option': '3',
      'room-size': 100,
      email: '',
      pin: '',
      'confirm-pin': '',
      upload: '',
      'upload-path': '',
    },
    resolver: yupResolver(validationSchema),
  });

  useLayoutEffect(() => {
    // Do instant validation after rendering
    trigger();
  }, [trigger]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-validation-example">
      <IxLayoutAuto>
        <IxInput
          label="Name"
          {...register('name')}
          className={clsx({ 'ix-invalid': errors.name })}
          invalidText={errors.name?.message}
          required
        />
        <IxInput label="Last Name" {...register('last-name')} />
        <IxInput label="Address" data-colspan="2" {...register('address')}>
          <IxIcon slot="start" name={iconLocation} size="16"></IxIcon>
        </IxInput>

        <IxRadioGroup label="Booking option">
          {Array.from({ length: 3 }).map((_, option) => (
            <Controller
              key={`Option${option}`}
              control={control}
              name="booking-option"
              render={({ field }) => (
                <IxRadio
                  label={`Option ${option}`}
                  value={`${option}`}
                  checked={field.value === `${option}`}
                  onCheckedChange={() => field.onChange(`${option}`)}
                ></IxRadio>
              )}
            />
          ))}
        </IxRadioGroup>

        <IxNumberInput
          label="Preferred room size"
          className="ix-info"
          infoText="You can adjust the room size"
          {...register('room-size')}
        >
          <IxIcon slot="start" name={iconBezierCurve} size="16"></IxIcon>
          <IxTypography slot="end" color="weak" className="padding-right">
            m<sup>2</sup>
          </IxTypography>
        </IxNumberInput>

        <IxSelect
          label="Travel option"
          data-colspan="2"
          {...register('travel-option')}
        >
          <IxSelectItem value="1" label="Option 1"></IxSelectItem>
          <IxSelectItem value="2" label="Option 2"></IxSelectItem>
          <IxSelectItem value="3" label="Option 3"></IxSelectItem>
        </IxSelect>

        <IxNumberInput
          label="Threshold limit A"
          data-colspan="1"
          helperText="Max threshold is 5"
          {...register('thresholdLimitA', { required: false, max: '5' })}
          className={clsx({ 'ix-invalid': errors.thresholdLimitA })}
          invalidText={errors.thresholdLimitA?.message}
        ></IxNumberInput>

        <IxNumberInput
          label="Threshold limit B"
          data-colspan="1"
          showStepperButtons
          {...register('thresholdLimitB')}
          className={clsx({
            'ix-warning': showWarning,
          })}
          warningText={'A threshold greater than 5 is not recommended'}
          onValueChange={({ detail }) => {
            setShowWarning(detail > 5);
          }}
        ></IxNumberInput>

        <IxDateInput
          label="Begin"
          i18nErrorDateUnparsable="Please enter a valid date"
          {...register('begin')}
        ></IxDateInput>
        <IxDateInput
          label="End"
          {...register('end')}
          invalidText={errors.end?.message}
          className={clsx({
            'ix-invalid': errors.end,
          })}
        ></IxDateInput>

        <IxTextarea
          maxLength={100}
          label="Comment"
          data-colspan="2"
          textareaHeight="10rem"
          helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
          {...register('comment')}
        ></IxTextarea>

        <IxInput type="email" label="Email" {...register('email')}></IxInput>

        {}
        <IxCustomField label="Upload" invalidText="You need to upload a file">
          <IxInput
            type="text"
            onClick={() => uploadRef.current?.click()}
            readonly
            style={{ width: '100%' }}
            {...register('upload-path')}
            className={clsx({ 'ix-invalid': errors['upload-path'] })}
          ></IxInput>
          <input
            ref={uploadRef}
            type="file"
            style={{ display: 'none' }}
            onChange={(file) => {
              setValue('upload-path', file.target.value);
            }}
            name="upload"
          />
          <IxIconButton variant="subtle-primary" icon={iconStar} onClick={() => uploadRef.current?.click()}
          ></IxIconButton>
        </IxCustomField>

        <IxInput
          type="password"
          label="PIN"
          helperText="Only numbers between 1 and 4 is allowed"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('pin')}
        ></IxInput>
        <IxInput
          type="password"
          label="PIN"
          helperText="Confirm password"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('confirm-pin')}
          className={clsx({ 'ix-invalid': errors['confirm-pin'] })}
          invalidText={errors['confirm-pin']?.message}
        ></IxInput>

        <Controller
          control={control}
          name="agreed"
          render={({ field }) => (
            <IxCheckboxGroup invalidText={errors.agreed?.message}>
              <IxCheckbox
                label="I agree everything"
                data-colspan="2"
                name={field.name}
                disabled={field.disabled}
                checked={field.value}
                onCheckedChange={(evt) => setValue('agreed', evt.detail)}
                className={clsx({ 'ix-invalid': errors.agreed })}
              ></IxCheckbox>
            </IxCheckboxGroup>
          )}
        />

        <IxButton type="submit" data-colspan="1">
          Submit
        </IxButton>
      </IxLayoutAuto>
    </form>
  );
}
```

#### form-validation.scoped.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Angular Examples

#### form-validation.ts
```ts
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.untouched) {
      return Validators.required(control);
    }
    return null;
  };
}

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: `./form-validation.html`,
  styles: [
    `
      @import './form-validation.css';
    `,
  ],
})
export default class FormValidation implements OnInit, OnDestroy {
  @ViewChild('upload') upload?: ElementRef<HTMLInputElement>;

  thresholdLimitAErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  thresholdLimitBWarning = false;

  exampleForm = new FormGroup({
    name: new FormControl('', [customRequiredValidator()]),
    'last-name': new FormControl('Muster', [customRequiredValidator()]),
    address: new FormControl('John Street 14', [Validators.required]),
    thresholdLimitA: new FormControl(6, [
      Validators.required,
      Validators.max(5),
    ]),
    thresholdLimitB: new FormControl(7, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
    upload: new FormControl('', []),
    uploadPath: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.thresholdLimitBWarning =
      !!value.thresholdLimitB && value.thresholdLimitB > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['thresholdLimitA'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['thresholdLimitA'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.thresholdLimitAErrorText =
        'The threshold must be equal or lesser than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  openFileUpload() {
    this.upload?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }
    // Store the file somewhere to upload the asset after the form is submitted
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    this.exampleForm.controls['uploadPath'].setValue(file.name);
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}
```

#### form-validation.html
```html
<form class="form-validation-example" [formGroup]="exampleForm" (ngSubmit)="submit()">
  <ix-layout-auto>
    <ix-input label="Name" formControlName="name"></ix-input>
    <ix-input label="Last Name" formControlName="last-name"></ix-input>
    <ix-input label="Address" data-colspan="2" formControlName="address">
      <ix-icon slot="start" name="location" size="16"></ix-icon>
    </ix-input>

    <ix-radio-group label="Booking option">
      <ix-radio
        label="Option 1"
        value="1"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 2"
        value="2"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 3"
        value="3"
        formControlName="booking-option"
      ></ix-radio>
    </ix-radio-group>

    <ix-number-input label="Preferred room size" formControlName="room-size" class="ix-info" infoText="You can adjust the room size">
      <ix-icon slot="start" name="bezier-curve" size="16"></ix-icon>
      <ix-typography slot="end" color="weak" class="padding-right">
        m<sup>2</sup>
      </ix-typography>
    </ix-number-input>

    <ix-select
      label="Travel option"
      data-colspan="2"
      formControlName="travel-option"
    >
      <ix-select-item value="1" label="Option 1"></ix-select-item>
      <ix-select-item value="2" label="Option 2"></ix-select-item>
      <ix-select-item value="3" label="Option 3"></ix-select-item>
    </ix-select>

    <ix-number-input
      formControlName="thresholdLimitA"
      label="Threshold limit A"
      data-colspan="1"
      helperText="Max threshold is 5"
      [invalidText]="thresholdLimitAErrorText"
    ></ix-number-input>

    <ix-number-input
      formControlName="thresholdLimitB"
      label="Threshold limit B"
      data-colspan="1"
      showStepperButtons
      [class.ix-warning]="thresholdLimitBWarning"
      warningText="A threshold greater than 5 is not recommended"
    ></ix-number-input>

    <ix-date-input
      formControlName="begin"
      label="Begin"
      i18nErrorDateUnparsable="Please enter a valid date"
      invalidText="ERROR!"
      >
      <ix-icon slot="start" name="calendar" size="16"></ix-icon>
    </ix-date-input>
    <ix-date-input formControlName="end" label="End" [invalidText]="beginErrorText">
      <ix-icon slot="end" name="calendar" size="16"></ix-icon>
    </ix-date-input>

    <ix-textarea
      max-length="100"
      formControlName="comment"
      label="Comment"
      data-colspan="2"
      textareaHeight="10rem"
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></ix-textarea>

    <ix-input type="email" label="Email" formControlName="email"></ix-input>

    
    <ix-custom-field label="Upload" invalidText="You need to upload a file">
      <ix-input type="text" readonly style="width: 100%;" formControlName="uploadPath"></ix-input>
      <input #upload type="file" style="display: none;" (change)="onFileSelected($event)" formControlName="upload"/>
      <ix-icon-button variant="subtle-primary" icon="star" (click)="upload.click()"></ix-icon-button>
    </ix-custom-field>

    <ix-input type="password" label="PIN" formControlName="pin" helperText="Only numbers between 1 and 4 is allowed" allowedCharactersPattern="[1-4]" maxLength="4"></ix-input>
    <ix-input type="password" label="PIN" helperText="Confirm password" allowedCharactersPattern="[1-4]" maxLength="4"></ix-input>

    <ix-checkbox label="I agree everything" formControlName="agreed" data-colspan="2"></ix-checkbox>
    <ix-button type="submit" data-colspan="1">
      Submit
    </ix-button>
  </ix-layout-auto>
</form>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Angular Standalone Examples

#### form-validation.ts
```ts
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  IxLayoutAuto,
  IxInput,
  IxIcon,
  IxRadioGroup,
  IxRadio,
  IxNumberInput,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxTextarea,
  IxCustomField,
  IxIconButton,
  IxCheckbox,
  IxButton,
  IxBooleanValueAccessorDirective,
  IxDateValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.untouched) {
      return Validators.required(control);
    }
    return null;
  };
}

@Component({
  selector: 'app-example',
  imports: [
    IxLayoutAuto,
    IxInput,
    IxIcon,
    IxRadioGroup,
    IxRadio,
    IxNumberInput,
    IxTypography,
    IxSelect,
    IxSelectItem,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
    IxCheckbox,
    IxButton,
    IxBooleanValueAccessorDirective,
    IxDateValueAccessorDirective,
    IxRadioValueAccessorDirective,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
    ReactiveFormsModule,
  ],
  templateUrl: `./form-validation.html`,
  styles: [
    `
      @import './form-validation.css';
    `,
  ],
})
export default class FormValidation implements OnInit, OnDestroy {
  @ViewChild('upload') upload?: ElementRef<HTMLInputElement>;

  thresholdLimitAErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  thresholdLimitBWarning = false;

  exampleForm = new FormGroup({
    name: new FormControl('', [customRequiredValidator()]),
    'last-name': new FormControl('Muster', [customRequiredValidator()]),
    address: new FormControl('John Street 14', [Validators.required]),
    thresholdLimitA: new FormControl(6, [
      Validators.required,
      Validators.max(5),
    ]),
    thresholdLimitB: new FormControl(7, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
    upload: new FormControl('', []),
    uploadPath: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.thresholdLimitBWarning =
      !!value.thresholdLimitB && value.thresholdLimitB > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['thresholdLimitA'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['thresholdLimitA'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.thresholdLimitAErrorText =
        'The threshold must be equal or lesser than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  openFileUpload() {
    this.upload?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }
    // Store the file somewhere to upload the asset after the form is submitted
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    this.exampleForm.controls['uploadPath'].setValue(file.name);
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}
```

#### form-validation.html
```html
<form
  class="form-validation-example"
  [formGroup]="exampleForm"
  (ngSubmit)="submit()"
>
  <ix-layout-auto>
    <ix-input label="Name" formControlName="name"></ix-input>
    <ix-input label="Last Name" formControlName="last-name"></ix-input>
    <ix-input label="Address" data-colspan="2" formControlName="address">
      <ix-icon slot="start" name="location" size="16"></ix-icon>
    </ix-input>

    <ix-radio-group label="Booking option">
      <ix-radio
        label="Option 1"
        value="1"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 2"
        value="2"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 3"
        value="3"
        formControlName="booking-option"
      ></ix-radio>
    </ix-radio-group>

    <ix-number-input
      label="Preferred room size"
      formControlName="room-size"
      class="ix-info"
      infoText="You can adjust the room size"
    >
      <ix-icon slot="start" name="bezier-curve" size="16"></ix-icon>
      <ix-typography slot="end" color="weak" class="padding-right">
        m<sup>2</sup>
      </ix-typography>
    </ix-number-input>

    <ix-select
      label="Travel option"
      data-colspan="2"
      formControlName="travel-option"
    >
      <ix-select-item value="1" label="Option 1"></ix-select-item>
      <ix-select-item value="2" label="Option 2"></ix-select-item>
      <ix-select-item value="3" label="Option 3"></ix-select-item>
    </ix-select>

    <ix-number-input
      formControlName="thresholdLimitA"
      label="Threshold limit A"
      data-colspan="1"
      helperText="Max threshold is 5"
      [invalidText]="thresholdLimitAErrorText"
    ></ix-number-input>

    <ix-number-input
      formControlName="thresholdLimitB"
      label="Threshold limit B"
      data-colspan="1"
      showStepperButtons
      [class.ix-warning]="thresholdLimitBWarning"
      warningText="A threshold greater than 5 is not recommended"
    ></ix-number-input>

    <ix-date-input
      formControlName="begin"
      label="Begin"
      i18nErrorDateUnparsable="Please enter a valid date"
      invalidText="ERROR!"
    >
      <ix-icon slot="start" name="calendar" size="16"></ix-icon>
    </ix-date-input>
    <ix-date-input
      formControlName="end"
      label="End"
      [invalidText]="beginErrorText"
    >
      <ix-icon slot="end" name="calendar" size="16"></ix-icon>
    </ix-date-input>

    <ix-textarea
      max-length="100"
      formControlName="comment"
      label="Comment"
      data-colspan="2"
      textareaHeight="10rem"
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></ix-textarea>

    <ix-input type="email" label="Email" formControlName="email"></ix-input>

    
    <ix-custom-field label="Upload" invalidText="You need to upload a file">
      <ix-input
        type="text"
        readonly
        style="width: 100%"
        formControlName="uploadPath"
      ></ix-input>
      <input
        #upload
        type="file"
        style="display: none"
        (change)="onFileSelected($event)"
        formControlName="upload"
      />
      <ix-icon-button variant="subtle-primary" icon="star" (click)="upload.click()"></ix-icon-button>
    </ix-custom-field>

    <ix-input
      type="password"
      label="PIN"
      formControlName="pin"
      helperText="Only numbers between 1 and 4 is allowed"
      allowedCharactersPattern="[1-4]"
      maxLength="4"
    ></ix-input>
    <ix-input
      type="password"
      label="PIN"
      helperText="Confirm password"
      allowedCharactersPattern="[1-4]"
      maxLength="4"
    ></ix-input>

    <ix-checkbox
      label="I agree everything"
      formControlName="agreed"
      data-colspan="2"
    ></ix-checkbox>
    <ix-button type="submit" data-colspan="1"> Submit </ix-button>
  </ix-layout-auto>
</form>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Vue Examples

#### form-validation.vue
```vue
<script lang="ts">
import {
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxTextarea,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxButton,
  IxLayoutAuto,
  IxInput,
} from '@siemens/ix-vue';
import {
  iconLocation,
  iconBezierCurve,
  iconStar,
} from '@siemens/ix-icons/icons';
import useValidate from '@vuelidate/core';
import { required, helpers, email, sameAs } from '@vuelidate/validators';
import { ref } from 'vue';

export default {
  name: 'ValidationSelect',
  components: {
    IxIcon,
    IxSelect,
    IxSelectItem,
    IxButton,
    IxLayoutAuto,
    IxInput,
    IxRadio,
    IxRadioGroup,
    IxNumberInput,
    IxTypography,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
  },
  setup() {
    
    const v$ = useValidate();
    const uploadRef = ref<HTMLInputElement | null>(null);
    return { v$, uploadRef, iconLocation, iconBezierCurve, iconStar };
  },
  methods: {
    async submitForm() {
      await this.v$.$validate();
      console.log(this.$data);
    },
  },
  data() {
    return {
      car: 'audi',
      name: 'John',
      lastName: 'Doe',
      address: 'Max-Muster 18',
      bookingOption: 'option-1',
      travelOption: 'travel-option-1',
      limitA: 6,
      limitB: 7,
      warningLimitB: true,
      begin: '2024/05/03',
      end: '2024/05/05',
      comment: 'Some comment',
      upload: '',
      uploadPath: '',
      email: '',
      pin: '',
      pinConfirm: '',
      iconLocation,
      iconBezierCurve,
    };
  },
  validations() {
    return {
      travelOption: {
        required,
      },
      end: {
        isEnd: helpers.withMessage(
          'Its not allowed to pick 2024/05/05',
          (value) => value !== '2024/05/05'
        ),
      },
      email: {
        required,
        email,
      },
      pin: {
        required,
      },
      pinConfirm: {
        required,
        sameAsPin: helpers.withMessage('PINs do not match', sameAs(this.pin)),
      },
    };
  },
  watch: {
    limitB(value) {
      this.warningLimitB = value > 5;
    },
  },
};
</script>

<style scoped src="./form-validation.css"></style>

<template>
  <form
    className="form-validation-example"
    @submit.prevent
    @submit="submitForm"
  >
    <IxLayoutAuto>
      <IxInput v-model="name" label="Name"></IxInput>

      <IxInput v-model="lastName" label="Last Name"></IxInput>

      <IxInput v-model="address" label="Last Name" data-colspan="2">
        <IxIcon slot="start" :name="iconLocation" size="16"></IxIcon>
      </IxInput>

      <IxRadioGroup
        label="Booking option"
        @value-change="bookingOption = $event.detail"
      >
        <IxRadio
          label="Option 0"
          value="option-0"
          :checked="'option-0' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 1"
          value="option-1"
          :checked="'option-1' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 2"
          value="option-2"
          :checked="'option-2' === bookingOption"
        ></IxRadio>
      </IxRadioGroup>

      <IxNumberInput
        label="Preferred room size"
        className="ix-info"
        infoText="You can adjust the room size"
      >
        <IxIcon slot="start" :name="iconBezierCurve" size="16"></IxIcon>
        <IxTypography slot="end" color="weak" className="padding-right">
          m<sup>2</sup>
        </IxTypography>
      </IxNumberInput>

      <IxSelect
        v-model="travelOption"
        allowClear
        label="Select your travel option"
        data-colspan="2"
      >
        <IxSelectItem
          value="travel-option-0"
          label="Travel Option 1"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-1"
          label="Travel Option 2"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-2"
          label="Travel Option 3"
        ></IxSelectItem>
      </IxSelect>

      <IxNumberInput
        label="Threshold limit A"
        data-colspan="1"
        helper-text="Max threshold is 5"
        invalid-text="Not higher then 5 is allowed"
        v-model="limitA"
        :class="{ 'ix-invalid': limitA > 5 }"
      ></IxNumberInput>

      <IxNumberInput
        label="Threshold limit B"
        data-colspan="1"
        :class="{ 'ix-warning': warningLimitB }"
        warning-text="A threshold greater than 5 is not recommended"
        v-model="limitB"
        showStepperButtons
      ></IxNumberInput>

      <IxDateInput
        v-model="begin"
        label="Begin"
        i18n-error-date-unparsable="Please enter a valid date"
      ></IxDateInput>

      <IxDateInput
        v-model="end"
        label="End"
        :class="{ 'ix-invalid': v$.end.isEnd.$invalid }"
        :invalid-text="v$.end.isEnd.$message"
      ></IxDateInput>

      <IxTextarea
        v-model="comment"
        :max-length="100"
        label="Comment"
        data-colspan="2"
        textarea-height="10rem"
        helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
      ></IxTextarea>

      <IxInput
        type="email"
        label="Email"
        v-model="email"
        :class="{ 'ix-invalid': v$.email.$invalid }"
        :invalid-text="v$.email?.$errors?.[0]?.$message"
      ></IxInput>

      
      <IxCustomField label="Upload" invalidText="You need to upload a file">
        <IxInput
          type="text"
          readonly
          style="width: 100%"
          v-model="uploadPath"
          @click="uploadRef?.click()"
        ></IxInput>

        <input
          ref="uploadRef"
          type="file"
          style="display: none"
          @change="uploadPath = ($event.target as HTMLInputElement).value"
        />

        <IxIconButton variant="subtle-primary" :icon="iconStar" @click="uploadRef?.click()"></IxIconButton>
      </IxCustomField>

      <IxInput
        type="password"
        label="PIN"
        helperText="Only numbers between 1 and 4 is allowed"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pin"
        :class="{ 'ix-invalid': v$.pin.$invalid }"
      ></IxInput>

      <IxInput
        required
        type="password"
        label="PIN"
        helperText="Confirm password"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pinConfirm"
        :class="{ 'ix-invalid': v$.pinConfirm.sameAsPin.$invalid }"
        :invalid-text="v$.pinConfirm.sameAsPin.$message"
      ></IxInput>
      <IxButton type="submit">Submit</IxButton>
    </IxLayoutAuto>
  </form>
</template>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

## React

<Admonition type="info" title="Just an example">
      Using `react-form-hook` is just an example to demonstrate how validation could be done
      within React. You can use any other validation library or write your own validation logic.
    </Admonition>
    ### React Examples

#### form-validation.tsx
```tsx
import './form-validation.scoped.css';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  iconBezierCurve,
  iconLocation,
  iconStar,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxCheckbox,
  IxCheckboxGroup,
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxLayoutAuto,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxSelect,
  IxSelectItem,
  IxInput,
  IxTextarea,
  IxTypography,
} from '@siemens/ix-react';
import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  'last-name': yup.string(),
  address: yup.string(),
  thresholdLimitA: yup
    .number()
    .max(5, 'The threshold must be equal or lesser than 5'),
  thresholdLimitB: yup.number(),
  begin: yup.string(),
  end: yup
    .string()
    .test('valid-date', '2024/05/05 is not allowed to pick', (value) => {
      return value !== '2024/05/05';
    }),
  comment: yup.string(),
  agreed: yup.boolean().oneOf([true], 'You must agree to continue'),
  'booking-option': yup.string(),
  'travel-option': yup.string(),
  'room-size': yup.number(),
  email: yup.string(),
  pin: yup.string(),
  'confirm-pin': yup.string().oneOf([yup.ref('pin')], 'PIN does not match'),
  upload: yup.string(),
  'upload-path': yup.string().required('You need to upload a file'),
});

export default function FormValidation() {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [showWarning, setShowWarning] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      name: 'John',
      'last-name': 'Muster',
      address: 'John Street 14',
      thresholdLimitA: 6,
      thresholdLimitB: 7,
      begin: '2024/05/05',
      end: '2024/05/05',
      comment: 'Some info',
      agreed: false,
      'booking-option': '2',
      'travel-option': '3',
      'room-size': 100,
      email: '',
      pin: '',
      'confirm-pin': '',
      upload: '',
      'upload-path': '',
    },
    resolver: yupResolver(validationSchema),
  });

  useLayoutEffect(() => {
    // Do instant validation after rendering
    trigger();
  }, [trigger]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-validation-example">
      <IxLayoutAuto>
        <IxInput
          label="Name"
          {...register('name')}
          className={clsx({ 'ix-invalid': errors.name })}
          invalidText={errors.name?.message}
          required
        />
        <IxInput label="Last Name" {...register('last-name')} />
        <IxInput label="Address" data-colspan="2" {...register('address')}>
          <IxIcon slot="start" name={iconLocation} size="16"></IxIcon>
        </IxInput>

        <IxRadioGroup label="Booking option">
          {Array.from({ length: 3 }).map((_, option) => (
            <Controller
              key={`Option${option}`}
              control={control}
              name="booking-option"
              render={({ field }) => (
                <IxRadio
                  label={`Option ${option}`}
                  value={`${option}`}
                  checked={field.value === `${option}`}
                  onCheckedChange={() => field.onChange(`${option}`)}
                ></IxRadio>
              )}
            />
          ))}
        </IxRadioGroup>

        <IxNumberInput
          label="Preferred room size"
          className="ix-info"
          infoText="You can adjust the room size"
          {...register('room-size')}
        >
          <IxIcon slot="start" name={iconBezierCurve} size="16"></IxIcon>
          <IxTypography slot="end" color="weak" className="padding-right">
            m<sup>2</sup>
          </IxTypography>
        </IxNumberInput>

        <IxSelect
          label="Travel option"
          data-colspan="2"
          {...register('travel-option')}
        >
          <IxSelectItem value="1" label="Option 1"></IxSelectItem>
          <IxSelectItem value="2" label="Option 2"></IxSelectItem>
          <IxSelectItem value="3" label="Option 3"></IxSelectItem>
        </IxSelect>

        <IxNumberInput
          label="Threshold limit A"
          data-colspan="1"
          helperText="Max threshold is 5"
          {...register('thresholdLimitA', { required: false, max: '5' })}
          className={clsx({ 'ix-invalid': errors.thresholdLimitA })}
          invalidText={errors.thresholdLimitA?.message}
        ></IxNumberInput>

        <IxNumberInput
          label="Threshold limit B"
          data-colspan="1"
          showStepperButtons
          {...register('thresholdLimitB')}
          className={clsx({
            'ix-warning': showWarning,
          })}
          warningText={'A threshold greater than 5 is not recommended'}
          onValueChange={({ detail }) => {
            setShowWarning(detail > 5);
          }}
        ></IxNumberInput>

        <IxDateInput
          label="Begin"
          i18nErrorDateUnparsable="Please enter a valid date"
          {...register('begin')}
        ></IxDateInput>
        <IxDateInput
          label="End"
          {...register('end')}
          invalidText={errors.end?.message}
          className={clsx({
            'ix-invalid': errors.end,
          })}
        ></IxDateInput>

        <IxTextarea
          maxLength={100}
          label="Comment"
          data-colspan="2"
          textareaHeight="10rem"
          helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
          {...register('comment')}
        ></IxTextarea>

        <IxInput type="email" label="Email" {...register('email')}></IxInput>

        {}
        <IxCustomField label="Upload" invalidText="You need to upload a file">
          <IxInput
            type="text"
            onClick={() => uploadRef.current?.click()}
            readonly
            style={{ width: '100%' }}
            {...register('upload-path')}
            className={clsx({ 'ix-invalid': errors['upload-path'] })}
          ></IxInput>
          <input
            ref={uploadRef}
            type="file"
            style={{ display: 'none' }}
            onChange={(file) => {
              setValue('upload-path', file.target.value);
            }}
            name="upload"
          />
          <IxIconButton variant="subtle-primary" icon={iconStar} onClick={() => uploadRef.current?.click()}
          ></IxIconButton>
        </IxCustomField>

        <IxInput
          type="password"
          label="PIN"
          helperText="Only numbers between 1 and 4 is allowed"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('pin')}
        ></IxInput>
        <IxInput
          type="password"
          label="PIN"
          helperText="Confirm password"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('confirm-pin')}
          className={clsx({ 'ix-invalid': errors['confirm-pin'] })}
          invalidText={errors['confirm-pin']?.message}
        ></IxInput>

        <Controller
          control={control}
          name="agreed"
          render={({ field }) => (
            <IxCheckboxGroup invalidText={errors.agreed?.message}>
              <IxCheckbox
                label="I agree everything"
                data-colspan="2"
                name={field.name}
                disabled={field.disabled}
                checked={field.value}
                onCheckedChange={(evt) => setValue('agreed', evt.detail)}
                className={clsx({ 'ix-invalid': errors.agreed })}
              ></IxCheckbox>
            </IxCheckboxGroup>
          )}
        />

        <IxButton type="submit" data-colspan="1">
          Submit
        </IxButton>
      </IxLayoutAuto>
    </form>
  );
}
```

#### form-validation.scoped.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Angular Examples

#### form-validation.ts
```ts
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.untouched) {
      return Validators.required(control);
    }
    return null;
  };
}

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: `./form-validation.html`,
  styles: [
    `
      @import './form-validation.css';
    `,
  ],
})
export default class FormValidation implements OnInit, OnDestroy {
  @ViewChild('upload') upload?: ElementRef<HTMLInputElement>;

  thresholdLimitAErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  thresholdLimitBWarning = false;

  exampleForm = new FormGroup({
    name: new FormControl('', [customRequiredValidator()]),
    'last-name': new FormControl('Muster', [customRequiredValidator()]),
    address: new FormControl('John Street 14', [Validators.required]),
    thresholdLimitA: new FormControl(6, [
      Validators.required,
      Validators.max(5),
    ]),
    thresholdLimitB: new FormControl(7, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
    upload: new FormControl('', []),
    uploadPath: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.thresholdLimitBWarning =
      !!value.thresholdLimitB && value.thresholdLimitB > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['thresholdLimitA'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['thresholdLimitA'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.thresholdLimitAErrorText =
        'The threshold must be equal or lesser than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  openFileUpload() {
    this.upload?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }
    // Store the file somewhere to upload the asset after the form is submitted
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    this.exampleForm.controls['uploadPath'].setValue(file.name);
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}
```

#### form-validation.html
```html
<form class="form-validation-example" [formGroup]="exampleForm" (ngSubmit)="submit()">
  <ix-layout-auto>
    <ix-input label="Name" formControlName="name"></ix-input>
    <ix-input label="Last Name" formControlName="last-name"></ix-input>
    <ix-input label="Address" data-colspan="2" formControlName="address">
      <ix-icon slot="start" name="location" size="16"></ix-icon>
    </ix-input>

    <ix-radio-group label="Booking option">
      <ix-radio
        label="Option 1"
        value="1"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 2"
        value="2"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 3"
        value="3"
        formControlName="booking-option"
      ></ix-radio>
    </ix-radio-group>

    <ix-number-input label="Preferred room size" formControlName="room-size" class="ix-info" infoText="You can adjust the room size">
      <ix-icon slot="start" name="bezier-curve" size="16"></ix-icon>
      <ix-typography slot="end" color="weak" class="padding-right">
        m<sup>2</sup>
      </ix-typography>
    </ix-number-input>

    <ix-select
      label="Travel option"
      data-colspan="2"
      formControlName="travel-option"
    >
      <ix-select-item value="1" label="Option 1"></ix-select-item>
      <ix-select-item value="2" label="Option 2"></ix-select-item>
      <ix-select-item value="3" label="Option 3"></ix-select-item>
    </ix-select>

    <ix-number-input
      formControlName="thresholdLimitA"
      label="Threshold limit A"
      data-colspan="1"
      helperText="Max threshold is 5"
      [invalidText]="thresholdLimitAErrorText"
    ></ix-number-input>

    <ix-number-input
      formControlName="thresholdLimitB"
      label="Threshold limit B"
      data-colspan="1"
      showStepperButtons
      [class.ix-warning]="thresholdLimitBWarning"
      warningText="A threshold greater than 5 is not recommended"
    ></ix-number-input>

    <ix-date-input
      formControlName="begin"
      label="Begin"
      i18nErrorDateUnparsable="Please enter a valid date"
      invalidText="ERROR!"
      >
      <ix-icon slot="start" name="calendar" size="16"></ix-icon>
    </ix-date-input>
    <ix-date-input formControlName="end" label="End" [invalidText]="beginErrorText">
      <ix-icon slot="end" name="calendar" size="16"></ix-icon>
    </ix-date-input>

    <ix-textarea
      max-length="100"
      formControlName="comment"
      label="Comment"
      data-colspan="2"
      textareaHeight="10rem"
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></ix-textarea>

    <ix-input type="email" label="Email" formControlName="email"></ix-input>

    
    <ix-custom-field label="Upload" invalidText="You need to upload a file">
      <ix-input type="text" readonly style="width: 100%;" formControlName="uploadPath"></ix-input>
      <input #upload type="file" style="display: none;" (change)="onFileSelected($event)" formControlName="upload"/>
      <ix-icon-button variant="subtle-primary" icon="star" (click)="upload.click()"></ix-icon-button>
    </ix-custom-field>

    <ix-input type="password" label="PIN" formControlName="pin" helperText="Only numbers between 1 and 4 is allowed" allowedCharactersPattern="[1-4]" maxLength="4"></ix-input>
    <ix-input type="password" label="PIN" helperText="Confirm password" allowedCharactersPattern="[1-4]" maxLength="4"></ix-input>

    <ix-checkbox label="I agree everything" formControlName="agreed" data-colspan="2"></ix-checkbox>
    <ix-button type="submit" data-colspan="1">
      Submit
    </ix-button>
  </ix-layout-auto>
</form>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Angular Standalone Examples

#### form-validation.ts
```ts
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  IxLayoutAuto,
  IxInput,
  IxIcon,
  IxRadioGroup,
  IxRadio,
  IxNumberInput,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxTextarea,
  IxCustomField,
  IxIconButton,
  IxCheckbox,
  IxButton,
  IxBooleanValueAccessorDirective,
  IxDateValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.untouched) {
      return Validators.required(control);
    }
    return null;
  };
}

@Component({
  selector: 'app-example',
  imports: [
    IxLayoutAuto,
    IxInput,
    IxIcon,
    IxRadioGroup,
    IxRadio,
    IxNumberInput,
    IxTypography,
    IxSelect,
    IxSelectItem,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
    IxCheckbox,
    IxButton,
    IxBooleanValueAccessorDirective,
    IxDateValueAccessorDirective,
    IxRadioValueAccessorDirective,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
    ReactiveFormsModule,
  ],
  templateUrl: `./form-validation.html`,
  styles: [
    `
      @import './form-validation.css';
    `,
  ],
})
export default class FormValidation implements OnInit, OnDestroy {
  @ViewChild('upload') upload?: ElementRef<HTMLInputElement>;

  thresholdLimitAErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  thresholdLimitBWarning = false;

  exampleForm = new FormGroup({
    name: new FormControl('', [customRequiredValidator()]),
    'last-name': new FormControl('Muster', [customRequiredValidator()]),
    address: new FormControl('John Street 14', [Validators.required]),
    thresholdLimitA: new FormControl(6, [
      Validators.required,
      Validators.max(5),
    ]),
    thresholdLimitB: new FormControl(7, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
    upload: new FormControl('', []),
    uploadPath: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.thresholdLimitBWarning =
      !!value.thresholdLimitB && value.thresholdLimitB > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['thresholdLimitA'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['thresholdLimitA'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.thresholdLimitAErrorText =
        'The threshold must be equal or lesser than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  openFileUpload() {
    this.upload?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }
    // Store the file somewhere to upload the asset after the form is submitted
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    this.exampleForm.controls['uploadPath'].setValue(file.name);
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}
```

#### form-validation.html
```html
<form
  class="form-validation-example"
  [formGroup]="exampleForm"
  (ngSubmit)="submit()"
>
  <ix-layout-auto>
    <ix-input label="Name" formControlName="name"></ix-input>
    <ix-input label="Last Name" formControlName="last-name"></ix-input>
    <ix-input label="Address" data-colspan="2" formControlName="address">
      <ix-icon slot="start" name="location" size="16"></ix-icon>
    </ix-input>

    <ix-radio-group label="Booking option">
      <ix-radio
        label="Option 1"
        value="1"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 2"
        value="2"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 3"
        value="3"
        formControlName="booking-option"
      ></ix-radio>
    </ix-radio-group>

    <ix-number-input
      label="Preferred room size"
      formControlName="room-size"
      class="ix-info"
      infoText="You can adjust the room size"
    >
      <ix-icon slot="start" name="bezier-curve" size="16"></ix-icon>
      <ix-typography slot="end" color="weak" class="padding-right">
        m<sup>2</sup>
      </ix-typography>
    </ix-number-input>

    <ix-select
      label="Travel option"
      data-colspan="2"
      formControlName="travel-option"
    >
      <ix-select-item value="1" label="Option 1"></ix-select-item>
      <ix-select-item value="2" label="Option 2"></ix-select-item>
      <ix-select-item value="3" label="Option 3"></ix-select-item>
    </ix-select>

    <ix-number-input
      formControlName="thresholdLimitA"
      label="Threshold limit A"
      data-colspan="1"
      helperText="Max threshold is 5"
      [invalidText]="thresholdLimitAErrorText"
    ></ix-number-input>

    <ix-number-input
      formControlName="thresholdLimitB"
      label="Threshold limit B"
      data-colspan="1"
      showStepperButtons
      [class.ix-warning]="thresholdLimitBWarning"
      warningText="A threshold greater than 5 is not recommended"
    ></ix-number-input>

    <ix-date-input
      formControlName="begin"
      label="Begin"
      i18nErrorDateUnparsable="Please enter a valid date"
      invalidText="ERROR!"
    >
      <ix-icon slot="start" name="calendar" size="16"></ix-icon>
    </ix-date-input>
    <ix-date-input
      formControlName="end"
      label="End"
      [invalidText]="beginErrorText"
    >
      <ix-icon slot="end" name="calendar" size="16"></ix-icon>
    </ix-date-input>

    <ix-textarea
      max-length="100"
      formControlName="comment"
      label="Comment"
      data-colspan="2"
      textareaHeight="10rem"
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></ix-textarea>

    <ix-input type="email" label="Email" formControlName="email"></ix-input>

    
    <ix-custom-field label="Upload" invalidText="You need to upload a file">
      <ix-input
        type="text"
        readonly
        style="width: 100%"
        formControlName="uploadPath"
      ></ix-input>
      <input
        #upload
        type="file"
        style="display: none"
        (change)="onFileSelected($event)"
        formControlName="upload"
      />
      <ix-icon-button variant="subtle-primary" icon="star" (click)="upload.click()"></ix-icon-button>
    </ix-custom-field>

    <ix-input
      type="password"
      label="PIN"
      formControlName="pin"
      helperText="Only numbers between 1 and 4 is allowed"
      allowedCharactersPattern="[1-4]"
      maxLength="4"
    ></ix-input>
    <ix-input
      type="password"
      label="PIN"
      helperText="Confirm password"
      allowedCharactersPattern="[1-4]"
      maxLength="4"
    ></ix-input>

    <ix-checkbox
      label="I agree everything"
      formControlName="agreed"
      data-colspan="2"
    ></ix-checkbox>
    <ix-button type="submit" data-colspan="1"> Submit </ix-button>
  </ix-layout-auto>
</form>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Vue Examples

#### form-validation.vue
```vue
<script lang="ts">
import {
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxTextarea,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxButton,
  IxLayoutAuto,
  IxInput,
} from '@siemens/ix-vue';
import {
  iconLocation,
  iconBezierCurve,
  iconStar,
} from '@siemens/ix-icons/icons';
import useValidate from '@vuelidate/core';
import { required, helpers, email, sameAs } from '@vuelidate/validators';
import { ref } from 'vue';

export default {
  name: 'ValidationSelect',
  components: {
    IxIcon,
    IxSelect,
    IxSelectItem,
    IxButton,
    IxLayoutAuto,
    IxInput,
    IxRadio,
    IxRadioGroup,
    IxNumberInput,
    IxTypography,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
  },
  setup() {
    
    const v$ = useValidate();
    const uploadRef = ref<HTMLInputElement | null>(null);
    return { v$, uploadRef, iconLocation, iconBezierCurve, iconStar };
  },
  methods: {
    async submitForm() {
      await this.v$.$validate();
      console.log(this.$data);
    },
  },
  data() {
    return {
      car: 'audi',
      name: 'John',
      lastName: 'Doe',
      address: 'Max-Muster 18',
      bookingOption: 'option-1',
      travelOption: 'travel-option-1',
      limitA: 6,
      limitB: 7,
      warningLimitB: true,
      begin: '2024/05/03',
      end: '2024/05/05',
      comment: 'Some comment',
      upload: '',
      uploadPath: '',
      email: '',
      pin: '',
      pinConfirm: '',
      iconLocation,
      iconBezierCurve,
    };
  },
  validations() {
    return {
      travelOption: {
        required,
      },
      end: {
        isEnd: helpers.withMessage(
          'Its not allowed to pick 2024/05/05',
          (value) => value !== '2024/05/05'
        ),
      },
      email: {
        required,
        email,
      },
      pin: {
        required,
      },
      pinConfirm: {
        required,
        sameAsPin: helpers.withMessage('PINs do not match', sameAs(this.pin)),
      },
    };
  },
  watch: {
    limitB(value) {
      this.warningLimitB = value > 5;
    },
  },
};
</script>

<style scoped src="./form-validation.css"></style>

<template>
  <form
    className="form-validation-example"
    @submit.prevent
    @submit="submitForm"
  >
    <IxLayoutAuto>
      <IxInput v-model="name" label="Name"></IxInput>

      <IxInput v-model="lastName" label="Last Name"></IxInput>

      <IxInput v-model="address" label="Last Name" data-colspan="2">
        <IxIcon slot="start" :name="iconLocation" size="16"></IxIcon>
      </IxInput>

      <IxRadioGroup
        label="Booking option"
        @value-change="bookingOption = $event.detail"
      >
        <IxRadio
          label="Option 0"
          value="option-0"
          :checked="'option-0' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 1"
          value="option-1"
          :checked="'option-1' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 2"
          value="option-2"
          :checked="'option-2' === bookingOption"
        ></IxRadio>
      </IxRadioGroup>

      <IxNumberInput
        label="Preferred room size"
        className="ix-info"
        infoText="You can adjust the room size"
      >
        <IxIcon slot="start" :name="iconBezierCurve" size="16"></IxIcon>
        <IxTypography slot="end" color="weak" className="padding-right">
          m<sup>2</sup>
        </IxTypography>
      </IxNumberInput>

      <IxSelect
        v-model="travelOption"
        allowClear
        label="Select your travel option"
        data-colspan="2"
      >
        <IxSelectItem
          value="travel-option-0"
          label="Travel Option 1"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-1"
          label="Travel Option 2"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-2"
          label="Travel Option 3"
        ></IxSelectItem>
      </IxSelect>

      <IxNumberInput
        label="Threshold limit A"
        data-colspan="1"
        helper-text="Max threshold is 5"
        invalid-text="Not higher then 5 is allowed"
        v-model="limitA"
        :class="{ 'ix-invalid': limitA > 5 }"
      ></IxNumberInput>

      <IxNumberInput
        label="Threshold limit B"
        data-colspan="1"
        :class="{ 'ix-warning': warningLimitB }"
        warning-text="A threshold greater than 5 is not recommended"
        v-model="limitB"
        showStepperButtons
      ></IxNumberInput>

      <IxDateInput
        v-model="begin"
        label="Begin"
        i18n-error-date-unparsable="Please enter a valid date"
      ></IxDateInput>

      <IxDateInput
        v-model="end"
        label="End"
        :class="{ 'ix-invalid': v$.end.isEnd.$invalid }"
        :invalid-text="v$.end.isEnd.$message"
      ></IxDateInput>

      <IxTextarea
        v-model="comment"
        :max-length="100"
        label="Comment"
        data-colspan="2"
        textarea-height="10rem"
        helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
      ></IxTextarea>

      <IxInput
        type="email"
        label="Email"
        v-model="email"
        :class="{ 'ix-invalid': v$.email.$invalid }"
        :invalid-text="v$.email?.$errors?.[0]?.$message"
      ></IxInput>

      
      <IxCustomField label="Upload" invalidText="You need to upload a file">
        <IxInput
          type="text"
          readonly
          style="width: 100%"
          v-model="uploadPath"
          @click="uploadRef?.click()"
        ></IxInput>

        <input
          ref="uploadRef"
          type="file"
          style="display: none"
          @change="uploadPath = ($event.target as HTMLInputElement).value"
        />

        <IxIconButton variant="subtle-primary" :icon="iconStar" @click="uploadRef?.click()"></IxIconButton>
      </IxCustomField>

      <IxInput
        type="password"
        label="PIN"
        helperText="Only numbers between 1 and 4 is allowed"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pin"
        :class="{ 'ix-invalid': v$.pin.$invalid }"
      ></IxInput>

      <IxInput
        required
        type="password"
        label="PIN"
        helperText="Confirm password"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pinConfirm"
        :class="{ 'ix-invalid': v$.pinConfirm.sameAsPin.$invalid }"
        :invalid-text="v$.pinConfirm.sameAsPin.$message"
      ></IxInput>
      <IxButton type="submit">Submit</IxButton>
    </IxLayoutAuto>
  </form>
</template>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

## Vue

<Admonition type="info" title="Just an example">
      Using `@vuelidate/core` is just an example to demonstrate how validation could be done
      within Vue. You can use any other validation library or write your own validation logic.
    </Admonition>
    ### React Examples

#### form-validation.tsx
```tsx
import './form-validation.scoped.css';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  iconBezierCurve,
  iconLocation,
  iconStar,
} from '@siemens/ix-icons/icons';
import {
  IxButton,
  IxCheckbox,
  IxCheckboxGroup,
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxLayoutAuto,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxSelect,
  IxSelectItem,
  IxInput,
  IxTextarea,
  IxTypography,
} from '@siemens/ix-react';
import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  'last-name': yup.string(),
  address: yup.string(),
  thresholdLimitA: yup
    .number()
    .max(5, 'The threshold must be equal or lesser than 5'),
  thresholdLimitB: yup.number(),
  begin: yup.string(),
  end: yup
    .string()
    .test('valid-date', '2024/05/05 is not allowed to pick', (value) => {
      return value !== '2024/05/05';
    }),
  comment: yup.string(),
  agreed: yup.boolean().oneOf([true], 'You must agree to continue'),
  'booking-option': yup.string(),
  'travel-option': yup.string(),
  'room-size': yup.number(),
  email: yup.string(),
  pin: yup.string(),
  'confirm-pin': yup.string().oneOf([yup.ref('pin')], 'PIN does not match'),
  upload: yup.string(),
  'upload-path': yup.string().required('You need to upload a file'),
});

export default function FormValidation() {
  const uploadRef = useRef<HTMLInputElement>(null);

  const [showWarning, setShowWarning] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    setValue,
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      name: 'John',
      'last-name': 'Muster',
      address: 'John Street 14',
      thresholdLimitA: 6,
      thresholdLimitB: 7,
      begin: '2024/05/05',
      end: '2024/05/05',
      comment: 'Some info',
      agreed: false,
      'booking-option': '2',
      'travel-option': '3',
      'room-size': 100,
      email: '',
      pin: '',
      'confirm-pin': '',
      upload: '',
      'upload-path': '',
    },
    resolver: yupResolver(validationSchema),
  });

  useLayoutEffect(() => {
    // Do instant validation after rendering
    trigger();
  }, [trigger]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-validation-example">
      <IxLayoutAuto>
        <IxInput
          label="Name"
          {...register('name')}
          className={clsx({ 'ix-invalid': errors.name })}
          invalidText={errors.name?.message}
          required
        />
        <IxInput label="Last Name" {...register('last-name')} />
        <IxInput label="Address" data-colspan="2" {...register('address')}>
          <IxIcon slot="start" name={iconLocation} size="16"></IxIcon>
        </IxInput>

        <IxRadioGroup label="Booking option">
          {Array.from({ length: 3 }).map((_, option) => (
            <Controller
              key={`Option${option}`}
              control={control}
              name="booking-option"
              render={({ field }) => (
                <IxRadio
                  label={`Option ${option}`}
                  value={`${option}`}
                  checked={field.value === `${option}`}
                  onCheckedChange={() => field.onChange(`${option}`)}
                ></IxRadio>
              )}
            />
          ))}
        </IxRadioGroup>

        <IxNumberInput
          label="Preferred room size"
          className="ix-info"
          infoText="You can adjust the room size"
          {...register('room-size')}
        >
          <IxIcon slot="start" name={iconBezierCurve} size="16"></IxIcon>
          <IxTypography slot="end" color="weak" className="padding-right">
            m<sup>2</sup>
          </IxTypography>
        </IxNumberInput>

        <IxSelect
          label="Travel option"
          data-colspan="2"
          {...register('travel-option')}
        >
          <IxSelectItem value="1" label="Option 1"></IxSelectItem>
          <IxSelectItem value="2" label="Option 2"></IxSelectItem>
          <IxSelectItem value="3" label="Option 3"></IxSelectItem>
        </IxSelect>

        <IxNumberInput
          label="Threshold limit A"
          data-colspan="1"
          helperText="Max threshold is 5"
          {...register('thresholdLimitA', { required: false, max: '5' })}
          className={clsx({ 'ix-invalid': errors.thresholdLimitA })}
          invalidText={errors.thresholdLimitA?.message}
        ></IxNumberInput>

        <IxNumberInput
          label="Threshold limit B"
          data-colspan="1"
          showStepperButtons
          {...register('thresholdLimitB')}
          className={clsx({
            'ix-warning': showWarning,
          })}
          warningText={'A threshold greater than 5 is not recommended'}
          onValueChange={({ detail }) => {
            setShowWarning(detail > 5);
          }}
        ></IxNumberInput>

        <IxDateInput
          label="Begin"
          i18nErrorDateUnparsable="Please enter a valid date"
          {...register('begin')}
        ></IxDateInput>
        <IxDateInput
          label="End"
          {...register('end')}
          invalidText={errors.end?.message}
          className={clsx({
            'ix-invalid': errors.end,
          })}
        ></IxDateInput>

        <IxTextarea
          maxLength={100}
          label="Comment"
          data-colspan="2"
          textareaHeight="10rem"
          helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
          {...register('comment')}
        ></IxTextarea>

        <IxInput type="email" label="Email" {...register('email')}></IxInput>

        {}
        <IxCustomField label="Upload" invalidText="You need to upload a file">
          <IxInput
            type="text"
            onClick={() => uploadRef.current?.click()}
            readonly
            style={{ width: '100%' }}
            {...register('upload-path')}
            className={clsx({ 'ix-invalid': errors['upload-path'] })}
          ></IxInput>
          <input
            ref={uploadRef}
            type="file"
            style={{ display: 'none' }}
            onChange={(file) => {
              setValue('upload-path', file.target.value);
            }}
            name="upload"
          />
          <IxIconButton variant="subtle-primary" icon={iconStar} onClick={() => uploadRef.current?.click()}
          ></IxIconButton>
        </IxCustomField>

        <IxInput
          type="password"
          label="PIN"
          helperText="Only numbers between 1 and 4 is allowed"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('pin')}
        ></IxInput>
        <IxInput
          type="password"
          label="PIN"
          helperText="Confirm password"
          allowedCharactersPattern="[1-4]"
          maxLength={4}
          {...register('confirm-pin')}
          className={clsx({ 'ix-invalid': errors['confirm-pin'] })}
          invalidText={errors['confirm-pin']?.message}
        ></IxInput>

        <Controller
          control={control}
          name="agreed"
          render={({ field }) => (
            <IxCheckboxGroup invalidText={errors.agreed?.message}>
              <IxCheckbox
                label="I agree everything"
                data-colspan="2"
                name={field.name}
                disabled={field.disabled}
                checked={field.value}
                onCheckedChange={(evt) => setValue('agreed', evt.detail)}
                className={clsx({ 'ix-invalid': errors.agreed })}
              ></IxCheckbox>
            </IxCheckboxGroup>
          )}
        />

        <IxButton type="submit" data-colspan="1">
          Submit
        </IxButton>
      </IxLayoutAuto>
    </form>
  );
}
```

#### form-validation.scoped.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Angular Examples

#### form-validation.ts
```ts
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.untouched) {
      return Validators.required(control);
    }
    return null;
  };
}

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: `./form-validation.html`,
  styles: [
    `
      @import './form-validation.css';
    `,
  ],
})
export default class FormValidation implements OnInit, OnDestroy {
  @ViewChild('upload') upload?: ElementRef<HTMLInputElement>;

  thresholdLimitAErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  thresholdLimitBWarning = false;

  exampleForm = new FormGroup({
    name: new FormControl('', [customRequiredValidator()]),
    'last-name': new FormControl('Muster', [customRequiredValidator()]),
    address: new FormControl('John Street 14', [Validators.required]),
    thresholdLimitA: new FormControl(6, [
      Validators.required,
      Validators.max(5),
    ]),
    thresholdLimitB: new FormControl(7, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
    upload: new FormControl('', []),
    uploadPath: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.thresholdLimitBWarning =
      !!value.thresholdLimitB && value.thresholdLimitB > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['thresholdLimitA'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['thresholdLimitA'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.thresholdLimitAErrorText =
        'The threshold must be equal or lesser than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  openFileUpload() {
    this.upload?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }
    // Store the file somewhere to upload the asset after the form is submitted
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    this.exampleForm.controls['uploadPath'].setValue(file.name);
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}
```

#### form-validation.html
```html
<form class="form-validation-example" [formGroup]="exampleForm" (ngSubmit)="submit()">
  <ix-layout-auto>
    <ix-input label="Name" formControlName="name"></ix-input>
    <ix-input label="Last Name" formControlName="last-name"></ix-input>
    <ix-input label="Address" data-colspan="2" formControlName="address">
      <ix-icon slot="start" name="location" size="16"></ix-icon>
    </ix-input>

    <ix-radio-group label="Booking option">
      <ix-radio
        label="Option 1"
        value="1"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 2"
        value="2"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 3"
        value="3"
        formControlName="booking-option"
      ></ix-radio>
    </ix-radio-group>

    <ix-number-input label="Preferred room size" formControlName="room-size" class="ix-info" infoText="You can adjust the room size">
      <ix-icon slot="start" name="bezier-curve" size="16"></ix-icon>
      <ix-typography slot="end" color="weak" class="padding-right">
        m<sup>2</sup>
      </ix-typography>
    </ix-number-input>

    <ix-select
      label="Travel option"
      data-colspan="2"
      formControlName="travel-option"
    >
      <ix-select-item value="1" label="Option 1"></ix-select-item>
      <ix-select-item value="2" label="Option 2"></ix-select-item>
      <ix-select-item value="3" label="Option 3"></ix-select-item>
    </ix-select>

    <ix-number-input
      formControlName="thresholdLimitA"
      label="Threshold limit A"
      data-colspan="1"
      helperText="Max threshold is 5"
      [invalidText]="thresholdLimitAErrorText"
    ></ix-number-input>

    <ix-number-input
      formControlName="thresholdLimitB"
      label="Threshold limit B"
      data-colspan="1"
      showStepperButtons
      [class.ix-warning]="thresholdLimitBWarning"
      warningText="A threshold greater than 5 is not recommended"
    ></ix-number-input>

    <ix-date-input
      formControlName="begin"
      label="Begin"
      i18nErrorDateUnparsable="Please enter a valid date"
      invalidText="ERROR!"
      >
      <ix-icon slot="start" name="calendar" size="16"></ix-icon>
    </ix-date-input>
    <ix-date-input formControlName="end" label="End" [invalidText]="beginErrorText">
      <ix-icon slot="end" name="calendar" size="16"></ix-icon>
    </ix-date-input>

    <ix-textarea
      max-length="100"
      formControlName="comment"
      label="Comment"
      data-colspan="2"
      textareaHeight="10rem"
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></ix-textarea>

    <ix-input type="email" label="Email" formControlName="email"></ix-input>

    
    <ix-custom-field label="Upload" invalidText="You need to upload a file">
      <ix-input type="text" readonly style="width: 100%;" formControlName="uploadPath"></ix-input>
      <input #upload type="file" style="display: none;" (change)="onFileSelected($event)" formControlName="upload"/>
      <ix-icon-button variant="subtle-primary" icon="star" (click)="upload.click()"></ix-icon-button>
    </ix-custom-field>

    <ix-input type="password" label="PIN" formControlName="pin" helperText="Only numbers between 1 and 4 is allowed" allowedCharactersPattern="[1-4]" maxLength="4"></ix-input>
    <ix-input type="password" label="PIN" helperText="Confirm password" allowedCharactersPattern="[1-4]" maxLength="4"></ix-input>

    <ix-checkbox label="I agree everything" formControlName="agreed" data-colspan="2"></ix-checkbox>
    <ix-button type="submit" data-colspan="1">
      Submit
    </ix-button>
  </ix-layout-auto>
</form>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Angular Standalone Examples

#### form-validation.ts
```ts
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  IxLayoutAuto,
  IxInput,
  IxIcon,
  IxRadioGroup,
  IxRadio,
  IxNumberInput,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxTextarea,
  IxCustomField,
  IxIconButton,
  IxCheckbox,
  IxButton,
  IxBooleanValueAccessorDirective,
  IxDateValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '@siemens/ix-angular/standalone';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { Subscription } from 'rxjs';

export function forbiddenDateValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden
      ? {
          forbiddenDate: {
            value: control.value,
            message: 'Its not allowed to choose this date!',
          },
        }
      : null;
  };
}

export function customRequiredValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (!control.untouched) {
      return Validators.required(control);
    }
    return null;
  };
}

@Component({
  selector: 'app-example',
  imports: [
    IxLayoutAuto,
    IxInput,
    IxIcon,
    IxRadioGroup,
    IxRadio,
    IxNumberInput,
    IxTypography,
    IxSelect,
    IxSelectItem,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
    IxCheckbox,
    IxButton,
    IxBooleanValueAccessorDirective,
    IxDateValueAccessorDirective,
    IxRadioValueAccessorDirective,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
    ReactiveFormsModule,
  ],
  templateUrl: `./form-validation.html`,
  styles: [
    `
      @import './form-validation.css';
    `,
  ],
})
export default class FormValidation implements OnInit, OnDestroy {
  @ViewChild('upload') upload?: ElementRef<HTMLInputElement>;

  thresholdLimitAErrorText = '';
  beginErrorText = '';

  statusSubscription?: Subscription;
  valueSubscription?: Subscription;

  thresholdLimitBWarning = false;

  exampleForm = new FormGroup({
    name: new FormControl('', [customRequiredValidator()]),
    'last-name': new FormControl('Muster', [customRequiredValidator()]),
    address: new FormControl('John Street 14', [Validators.required]),
    thresholdLimitA: new FormControl(6, [
      Validators.required,
      Validators.max(5),
    ]),
    thresholdLimitB: new FormControl(7, [Validators.required]),
    begin: new FormControl('2024/05/05', [Validators.required]),
    end: new FormControl('2024/05/05', [
      Validators.required,
      forbiddenDateValidator(/2024\/05\/05/),
    ]),
    comment: new FormControl('Some info', [Validators.required]),
    agreed: new FormControl(true, [Validators.requiredTrue]),
    'booking-option': new FormControl('2', [Validators.required]),
    'travel-option': new FormControl('3', [Validators.required]),
    'room-size': new FormControl(100, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    pin: new FormControl('', [Validators.required]),
    upload: new FormControl('', []),
    uploadPath: new FormControl('', [Validators.required]),
  });

  private onValidationChange(value: typeof this.exampleForm.value) {
    this.thresholdLimitBWarning =
      !!value.thresholdLimitB && value.thresholdLimitB > 5;
  }

  private onStatusChange() {
    if (this.exampleForm.controls['thresholdLimitA'].errors) {
      this.handleParentsValidationErrors(
        this.exampleForm.controls['thresholdLimitA'].errors
      );
    }

    if (this.exampleForm.controls['end'].errors) {
      this.handleEndValidationErrors(this.exampleForm.controls['end'].errors);
    }
  }

  handleParentsValidationErrors(errors: ValidationErrors) {
    if (errors['max']) {
      this.thresholdLimitAErrorText =
        'The threshold must be equal or lesser than 5';
    }
  }

  handleEndValidationErrors(errors: ValidationErrors) {
    if (errors['forbiddenDate']) {
      this.beginErrorText = errors['forbiddenDate'].message;
    }
  }

  ngOnInit(): void {
    this.statusSubscription = this.exampleForm.statusChanges.subscribe(
      (status) => {
        if (status !== 'VALID') {
          this.onStatusChange();
        }
      }
    );

    this.onStatusChange();

    this.valueSubscription = this.exampleForm.valueChanges.subscribe((value) =>
      this.onValidationChange(value)
    );

    this.onValidationChange(this.exampleForm.value);
  }

  ngOnDestroy(): void {
    if (this.statusSubscription) {
      this.statusSubscription.unsubscribe();
    }

    if (this.valueSubscription) {
      this.valueSubscription.unsubscribe();
    }
  }

  openFileUpload() {
    this.upload?.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target) {
      return;
    }
    // Store the file somewhere to upload the asset after the form is submitted
    const file = target.files?.[0];
    if (!file) {
      return;
    }

    this.exampleForm.controls['uploadPath'].setValue(file.name);
  }

  submit() {
    console.log(this.exampleForm.value);
  }
}
```

#### form-validation.html
```html
<form
  class="form-validation-example"
  [formGroup]="exampleForm"
  (ngSubmit)="submit()"
>
  <ix-layout-auto>
    <ix-input label="Name" formControlName="name"></ix-input>
    <ix-input label="Last Name" formControlName="last-name"></ix-input>
    <ix-input label="Address" data-colspan="2" formControlName="address">
      <ix-icon slot="start" name="location" size="16"></ix-icon>
    </ix-input>

    <ix-radio-group label="Booking option">
      <ix-radio
        label="Option 1"
        value="1"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 2"
        value="2"
        formControlName="booking-option"
      ></ix-radio>
      <ix-radio
        label="Option 3"
        value="3"
        formControlName="booking-option"
      ></ix-radio>
    </ix-radio-group>

    <ix-number-input
      label="Preferred room size"
      formControlName="room-size"
      class="ix-info"
      infoText="You can adjust the room size"
    >
      <ix-icon slot="start" name="bezier-curve" size="16"></ix-icon>
      <ix-typography slot="end" color="weak" class="padding-right">
        m<sup>2</sup>
      </ix-typography>
    </ix-number-input>

    <ix-select
      label="Travel option"
      data-colspan="2"
      formControlName="travel-option"
    >
      <ix-select-item value="1" label="Option 1"></ix-select-item>
      <ix-select-item value="2" label="Option 2"></ix-select-item>
      <ix-select-item value="3" label="Option 3"></ix-select-item>
    </ix-select>

    <ix-number-input
      formControlName="thresholdLimitA"
      label="Threshold limit A"
      data-colspan="1"
      helperText="Max threshold is 5"
      [invalidText]="thresholdLimitAErrorText"
    ></ix-number-input>

    <ix-number-input
      formControlName="thresholdLimitB"
      label="Threshold limit B"
      data-colspan="1"
      showStepperButtons
      [class.ix-warning]="thresholdLimitBWarning"
      warningText="A threshold greater than 5 is not recommended"
    ></ix-number-input>

    <ix-date-input
      formControlName="begin"
      label="Begin"
      i18nErrorDateUnparsable="Please enter a valid date"
      invalidText="ERROR!"
    >
      <ix-icon slot="start" name="calendar" size="16"></ix-icon>
    </ix-date-input>
    <ix-date-input
      formControlName="end"
      label="End"
      [invalidText]="beginErrorText"
    >
      <ix-icon slot="end" name="calendar" size="16"></ix-icon>
    </ix-date-input>

    <ix-textarea
      max-length="100"
      formControlName="comment"
      label="Comment"
      data-colspan="2"
      textareaHeight="10rem"
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></ix-textarea>

    <ix-input type="email" label="Email" formControlName="email"></ix-input>

    
    <ix-custom-field label="Upload" invalidText="You need to upload a file">
      <ix-input
        type="text"
        readonly
        style="width: 100%"
        formControlName="uploadPath"
      ></ix-input>
      <input
        #upload
        type="file"
        style="display: none"
        (change)="onFileSelected($event)"
        formControlName="upload"
      />
      <ix-icon-button variant="subtle-primary" icon="star" (click)="upload.click()"></ix-icon-button>
    </ix-custom-field>

    <ix-input
      type="password"
      label="PIN"
      formControlName="pin"
      helperText="Only numbers between 1 and 4 is allowed"
      allowedCharactersPattern="[1-4]"
      maxLength="4"
    ></ix-input>
    <ix-input
      type="password"
      label="PIN"
      helperText="Confirm password"
      allowedCharactersPattern="[1-4]"
      maxLength="4"
    ></ix-input>

    <ix-checkbox
      label="I agree everything"
      formControlName="agreed"
      data-colspan="2"
    ></ix-checkbox>
    <ix-button type="submit" data-colspan="1"> Submit </ix-button>
  </ix-layout-auto>
</form>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```

### Vue Examples

#### form-validation.vue
```vue
<script lang="ts">
import {
  IxCustomField,
  IxDateInput,
  IxIcon,
  IxIconButton,
  IxNumberInput,
  IxRadio,
  IxRadioGroup,
  IxTextarea,
  IxTypography,
  IxSelect,
  IxSelectItem,
  IxButton,
  IxLayoutAuto,
  IxInput,
} from '@siemens/ix-vue';
import {
  iconLocation,
  iconBezierCurve,
  iconStar,
} from '@siemens/ix-icons/icons';
import useValidate from '@vuelidate/core';
import { required, helpers, email, sameAs } from '@vuelidate/validators';
import { ref } from 'vue';

export default {
  name: 'ValidationSelect',
  components: {
    IxIcon,
    IxSelect,
    IxSelectItem,
    IxButton,
    IxLayoutAuto,
    IxInput,
    IxRadio,
    IxRadioGroup,
    IxNumberInput,
    IxTypography,
    IxDateInput,
    IxTextarea,
    IxCustomField,
    IxIconButton,
  },
  setup() {
    
    const v$ = useValidate();
    const uploadRef = ref<HTMLInputElement | null>(null);
    return { v$, uploadRef, iconLocation, iconBezierCurve, iconStar };
  },
  methods: {
    async submitForm() {
      await this.v$.$validate();
      console.log(this.$data);
    },
  },
  data() {
    return {
      car: 'audi',
      name: 'John',
      lastName: 'Doe',
      address: 'Max-Muster 18',
      bookingOption: 'option-1',
      travelOption: 'travel-option-1',
      limitA: 6,
      limitB: 7,
      warningLimitB: true,
      begin: '2024/05/03',
      end: '2024/05/05',
      comment: 'Some comment',
      upload: '',
      uploadPath: '',
      email: '',
      pin: '',
      pinConfirm: '',
      iconLocation,
      iconBezierCurve,
    };
  },
  validations() {
    return {
      travelOption: {
        required,
      },
      end: {
        isEnd: helpers.withMessage(
          'Its not allowed to pick 2024/05/05',
          (value) => value !== '2024/05/05'
        ),
      },
      email: {
        required,
        email,
      },
      pin: {
        required,
      },
      pinConfirm: {
        required,
        sameAsPin: helpers.withMessage('PINs do not match', sameAs(this.pin)),
      },
    };
  },
  watch: {
    limitB(value) {
      this.warningLimitB = value > 5;
    },
  },
};
</script>

<style scoped src="./form-validation.css"></style>

<template>
  <form
    className="form-validation-example"
    @submit.prevent
    @submit="submitForm"
  >
    <IxLayoutAuto>
      <IxInput v-model="name" label="Name"></IxInput>

      <IxInput v-model="lastName" label="Last Name"></IxInput>

      <IxInput v-model="address" label="Last Name" data-colspan="2">
        <IxIcon slot="start" :name="iconLocation" size="16"></IxIcon>
      </IxInput>

      <IxRadioGroup
        label="Booking option"
        @value-change="bookingOption = $event.detail"
      >
        <IxRadio
          label="Option 0"
          value="option-0"
          :checked="'option-0' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 1"
          value="option-1"
          :checked="'option-1' === bookingOption"
        ></IxRadio>
        <IxRadio
          label="Option 2"
          value="option-2"
          :checked="'option-2' === bookingOption"
        ></IxRadio>
      </IxRadioGroup>

      <IxNumberInput
        label="Preferred room size"
        className="ix-info"
        infoText="You can adjust the room size"
      >
        <IxIcon slot="start" :name="iconBezierCurve" size="16"></IxIcon>
        <IxTypography slot="end" color="weak" className="padding-right">
          m<sup>2</sup>
        </IxTypography>
      </IxNumberInput>

      <IxSelect
        v-model="travelOption"
        allowClear
        label="Select your travel option"
        data-colspan="2"
      >
        <IxSelectItem
          value="travel-option-0"
          label="Travel Option 1"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-1"
          label="Travel Option 2"
        ></IxSelectItem>
        <IxSelectItem
          value="travel-option-2"
          label="Travel Option 3"
        ></IxSelectItem>
      </IxSelect>

      <IxNumberInput
        label="Threshold limit A"
        data-colspan="1"
        helper-text="Max threshold is 5"
        invalid-text="Not higher then 5 is allowed"
        v-model="limitA"
        :class="{ 'ix-invalid': limitA > 5 }"
      ></IxNumberInput>

      <IxNumberInput
        label="Threshold limit B"
        data-colspan="1"
        :class="{ 'ix-warning': warningLimitB }"
        warning-text="A threshold greater than 5 is not recommended"
        v-model="limitB"
        showStepperButtons
      ></IxNumberInput>

      <IxDateInput
        v-model="begin"
        label="Begin"
        i18n-error-date-unparsable="Please enter a valid date"
      ></IxDateInput>

      <IxDateInput
        v-model="end"
        label="End"
        :class="{ 'ix-invalid': v$.end.isEnd.$invalid }"
        :invalid-text="v$.end.isEnd.$message"
      ></IxDateInput>

      <IxTextarea
        v-model="comment"
        :max-length="100"
        label="Comment"
        data-colspan="2"
        textarea-height="10rem"
        helper-text="Let us know if you have any special requests or comments. We will do our best to accommodate you."
      ></IxTextarea>

      <IxInput
        type="email"
        label="Email"
        v-model="email"
        :class="{ 'ix-invalid': v$.email.$invalid }"
        :invalid-text="v$.email?.$errors?.[0]?.$message"
      ></IxInput>

      
      <IxCustomField label="Upload" invalidText="You need to upload a file">
        <IxInput
          type="text"
          readonly
          style="width: 100%"
          v-model="uploadPath"
          @click="uploadRef?.click()"
        ></IxInput>

        <input
          ref="uploadRef"
          type="file"
          style="display: none"
          @change="uploadPath = ($event.target as HTMLInputElement).value"
        />

        <IxIconButton variant="subtle-primary" :icon="iconStar" @click="uploadRef?.click()"></IxIconButton>
      </IxCustomField>

      <IxInput
        type="password"
        label="PIN"
        helperText="Only numbers between 1 and 4 is allowed"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pin"
        :class="{ 'ix-invalid': v$.pin.$invalid }"
      ></IxInput>

      <IxInput
        required
        type="password"
        label="PIN"
        helperText="Confirm password"
        allowedCharactersPattern="[1-4]"
        :max-length="4"
        v-model="pinConfirm"
        :class="{ 'ix-invalid': v$.pinConfirm.sameAsPin.$invalid }"
        :invalid-text="v$.pinConfirm.sameAsPin.$message"
      ></IxInput>
      <IxButton type="submit">Submit</IxButton>
    </IxLayoutAuto>
  </form>
</template>
```

#### form-validation.css
```css
.form-validation-example {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.form-validation-example .padding-right {
  padding-right: 0.5rem;
}
```
