import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from './types';
import { DoCheck, ElementRef, EventEmitter, IterableDiffers, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, Validator, FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
export declare class MultiselectDropdown implements OnInit, OnChanges, DoCheck, OnDestroy, ControlValueAccessor, Validator {
    private element;
    private fb;
    options: Array<IMultiSelectOption>;
    settings: IMultiSelectSettings;
    texts: IMultiSelectTexts;
    disabled: boolean;
    disabledSelection: false;
    selectionLimitReached: EventEmitter<{}>;
    dropdownClosed: EventEmitter<{}>;
    dropdownOpened: EventEmitter<{}>;
    onAdded: EventEmitter<{}>;
    onRemoved: EventEmitter<{}>;
    onLazyLoad: EventEmitter<{}>;
    onClick(target: HTMLElement): void;
    destroyed$: Subject<void>;
    model: any[];
    parents: any[];
    title: string;
    differ: any;
    numSelected: number;
    isVisible: boolean;
    renderItems: boolean;
    defaultSettings: IMultiSelectSettings;
    defaultTexts: IMultiSelectTexts;
    filterControl: FormControl;
    readonly searchLimit: number;
    readonly searchRenderAfter: number;
    readonly searchLimitApplied: boolean;
    constructor(element: ElementRef, fb: FormBuilder, differs: IterableDiffers);
    getItemStyle(option: IMultiSelectOption): any;
    getItemStyleSelectionDisabled(): any;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    updateRenderItems(): void;
    onModelChange: Function;
    onModelTouched: Function;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(isDisabled: boolean): void;
    ngDoCheck(): void;
    validate(_c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(_fn: () => void): void;
    clearSearch(event: Event): void;
    toggleDropdown(): void;
    isSelected(option: IMultiSelectOption): boolean;
    setSelected(_event: Event, option: IMultiSelectOption): void;
    updateNumSelected(): void;
    updateTitle(): void;
    searchFilterApplied(): boolean;
    checkAll(): void;
    uncheckAll(): void;
    preventCheckboxCheck(event: Event, option: IMultiSelectOption): void;
    isCheckboxDisabled(): boolean;
    checkScrollPosition(ev: any): void;
    checkScrollPropagation(ev: any, element: any): void;
    load(): void;
}