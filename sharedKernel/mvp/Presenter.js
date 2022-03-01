import { PresenterListener } from './listener/PresenterListener';

export default class Presenter {
  constructor({ viewModel = {}, onDependencyChange = () => null } = {}) {
    this._viewModel = viewModel;
    this._listener = new PresenterListener();
    this._refreshMode = 'realtime';
    this._dependencies = {};
    this._initialized = false;
    this._onDependencyChange = onDependencyChange;
    this._onDestroy = () => null;
  }

  isInitialized() {
    return this._initialized;
  }

  viewModel() {
    return { ...this._viewModel };
  }

  /**
   * @param {PresenterListener} listener
   */
  setListener(listener) {
    this._listener = listener;
    this._listener.onPresenterLinked(this);
  }

  updateDependencies(dependencies) {
    let somethingWasUpdated = false;
    const updatedDependencies = {};
    for (const [key, value] of Object.entries(dependencies)) {
      if (this._dependencies[key] !== value) {
        somethingWasUpdated = true;
        updatedDependencies[key] = { prev: this._dependencies[key], next: value };
        this._dependencies[key] = value;
      }
    }
    if (somethingWasUpdated) {
      try {
        this._listener.onBeforeDependencyChanged(updatedDependencies, this._initialized);
        this._onDependencyChange(updatedDependencies);
        this._listener.onAfterDependencyChanged(updatedDependencies, this._initialized);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }

    this._initialized = true;
  }

  dependency(name) {
    return this._dependencies[name];
  }

  update(updatedPartOfViewModel) {
    this._viewModel = { ...this._viewModel, ...updatedPartOfViewModel };
    this._refreshUI();
  }

  _refreshUI() {
    this._listener.onBeforeRefreshUI(this._initialized);
    if (this._refreshMode === 'realtime') {
      this.__dispatchChanges();
    }
    this._listener.onAfterRefreshUI(this._initialized);
  }

  bulkUpdate(callback) {
    this._listener.onBeforeRefreshBulkUI(this._initialized);
    this._refreshUIAfter(callback);
    this._listener.onAfterRefreshBulkUI(this._initialized);
  }

  _refreshUIAfter(callback) {
    this._refreshMode = 'bulk';
    try {
      callback();
    } catch (e) {
      //We should not fail if the callback fails
    }
    this._refreshMode = 'realtime';
    this.__dispatchChanges();
  }

  __dispatchChanges() {
    try {
      this._listener.onViewModelChange(this.viewModel(), this._initialized);
    } catch (e) {
      //We should not fail it the listener fails
    }
  }

  onDestroy(callback) {
    this._onDestroy = callback;
  }

  destroy() {
    this._listener.onBeforeDestroy();
    this._onDestroy();
    this._listener.onAfterDestroy();
  }
}
