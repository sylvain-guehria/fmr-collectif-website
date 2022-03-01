import { PresenterListener } from './PresenterListener';

export class ViewModelChangePresenterListener extends PresenterListener {
  constructor(onViewModelChange) {
    super();
    this._onViewModelChange = onViewModelChange;
  }

  onViewModelChange(viewModel) {
    this._onViewModelChange(viewModel);
  }
}
