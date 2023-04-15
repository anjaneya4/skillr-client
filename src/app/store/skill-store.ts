import { BehaviorSubject } from 'rxjs';

export class SkillStore {
  private _data = new BehaviorSubject<any>(null);

  get data() {
    return this._data.asObservable();
  }

  updateData(newData: any) {
    this._data.next(newData);
  }

  append(newData: any) {
    const currentArray = this._data.getValue();
    const updatedArray = [...currentArray, newData];
    this._data.next(updatedArray);
  }
}