import { PresenterListener } from './PresenterListener';

const callerName = () => new Error().stack.split('\n')[8].split('@').shift();

export class LoggerPresenterListener extends PresenterListener {
  onBeforeRefreshUI(initialized) {
    if (!initialized) {
      return;
    }
    // eslint-disable-next-line no-console
    console.log(`%cMVP.refreshUI(%c${callerName()}%c)`, 'color: blue', 'color: red', 'color: blue');
  }

  onBeforeRefreshBulkUI(initialized) {
    if (!initialized) {
      return;
    }
    // eslint-disable-next-line no-console
    console.group(`%cMVP.refreshUIAfter(%c${callerName()}%c)`, 'color: blue', 'color: red', 'color: blue');
  }

  onAfterRefreshBulkUI(initialized) {
    if (!initialized) {
      return;
    }
    // eslint-disable-next-line no-console
    console.groupEnd();
  }

  onBeforeDependencyChanged(changes, initialized) {
    if (!initialized) {
      return;
    }
    // eslint-disable-next-line no-console
    console.group('%cMVP.Dependencie(s) changed', 'color: blue');
    // eslint-disable-next-line no-console
    console.log({
      'To see values, right click the following fn, save as global, and run': () => changes
    });
  }
  onAfterDependencyChanged(changes, initialized) {
    if (!initialized) {
      return;
    }
    // eslint-disable-next-line no-console
    console.groupEnd();
  }

  onPresenterLinked(presenter) {
    // eslint-disable-next-line no-console
    console.group('Presenter');
    // eslint-disable-next-line no-console
    console.log({
      'To interact with the presenter, right click the following fn, save as global, and run': () => presenter
    });
    // eslint-disable-next-line no-console
    console.groupEnd();
  }

  onBeforeDestroy() {
    // eslint-disable-next-line no-console
    console.log('presenter will be destroyed');
  }

  onAfterDestroy() {
    // eslint-disable-next-line no-console
    console.log('presenter destroyed');
  }

  onViewModelChange(viewModel, initialized) {
    if (!initialized) {
      return;
    }
    // eslint-disable-next-line no-console
    console.log({
      'viewModel changed. To see values, right click the following fn, save as global, and run': () => viewModel
    });
  }
}
