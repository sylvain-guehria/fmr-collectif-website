/* eslint-disable no-unused-vars */
export class PresenterListener {
  onPresenterLinked(presenter) {}

  onBeforeRefreshUI(initialized) {}

  onAfterRefreshUI(initialized) {}

  onBeforeRefreshBulkUI(initialized) {}

  onAfterRefreshBulkUI(initialized) {}

  onBeforeDestroy() {}

  onAfterDestroy() {}

  onViewModelChange(viewModel, initialized) {}

  onBeforeDependencyChanged(changes, initialized) {}

  onAfterDependencyChanged(changes, initialized) {}
}
