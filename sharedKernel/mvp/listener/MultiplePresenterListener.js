import { PresenterListener } from './PresenterListener';

const safeCall = callback => {
  try {
    callback();
  } catch (e) {
    //Oops
  }
};

export class MultiplePresenterListener extends PresenterListener {
  /**
   * @param {PresenterListener[]}listeners
   */
  constructor(listeners) {
    super();
    this._listeners = listeners;
  }

  onPresenterLinked(...args) {
    this._listeners.forEach(l => safeCall(() => l.onPresenterLinked(...args)));
  }

  onBeforeRefreshUI(...args) {
    this._listeners.forEach(l => safeCall(() => l.onBeforeRefreshUI(...args)));
  }

  onBeforeRefreshBulkUI(...args) {
    this._listeners.forEach(l => safeCall(() => l.onBeforeRefreshBulkUI(...args)));
  }

  onAfterRefreshBulkUI(...args) {
    this._listeners.forEach(l => safeCall(() => l.onAfterRefreshBulkUI(...args)));
  }

  onBeforeDestroy(...args) {
    this._listeners.forEach(l => safeCall(() => l.onBeforeDestroy(...args)));
  }

  onAfterDestroy(...args) {
    this._listeners.forEach(l => safeCall(() => l.onAfterDestroy(...args)));
  }

  onViewModelChange(...args) {
    this._listeners.forEach(l => safeCall(() => l.onViewModelChange(...args)));
  }

  onBeforeDependencyChanged(...args) {
    this._listeners.forEach(l => safeCall(() => l.onBeforeDependencyChanged(...args)));
  }

  onAfterDependencyChanged(...args) {
    this._listeners.forEach(l => safeCall(() => l.onAfterDependencyChanged(...args)));
  }
}
