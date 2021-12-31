/**
 * @return {{presenter: ProfilePresenter, viewModel: any}}
 */
import React, { useState, useMemo, useEffect } from 'react';
import { LoggerPresenterListener } from './listener/LoggerPresenterListener';
import { ViewModelChangePresenterListener } from './listener/ViewModelChangePresenterListener';
import { MultiplePresenterListener } from './listener/MultiplePresenterListener';

/**
 * @param {function(): ProfilePresenter} makePresenter
 * @param {function(): any} useDynamicDependencies
 * @return {function(*): function(): *}
 */
const withMVP = (makePresenter, useDynamicDependencies = () => ({})) => Wrapped =>
  function WithPresenter(props) {
    const debug = !!Wrapped.debugMvp || !!Wrapped.whyDidYouRender;
    const [viewModel, setViewModel] = useState();

    const presenter = useMemo(() => {
      const viewModelListener = new ViewModelChangePresenterListener(setViewModel);
      const listener =
        debug && process.env.NODE_ENV === 'development'
          ? new MultiplePresenterListener([viewModelListener, new LoggerPresenterListener()])
          : viewModelListener;
      const presenter = makePresenter();
      presenter.setListener(listener);
      return presenter;
    }, [debug]);

    presenter.updateDependencies(useDynamicDependencies(props));

    useEffect(() => () => presenter.destroy(), [presenter]);

    return <Wrapped {...props} presenter={presenter} viewModel={viewModel || presenter.viewModel()} />;
  };

  export default withMVP;