// @flow
import typeof store from 'stores/store';

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import views from 'config/views';

//images
import LogoSvg from 'img/logo.svg';

//styled-components
import {Toolbar, ToolbarLeft, ToolbarRight, Logo, UrlBar} from './styles';

//components
import HeaderLink from 'components/HeaderLink';

type Props = {
  store: any | store
};

@inject('store')
@observer
class ToolbarComponent extends Component {
  static defaultProps = {
    store: null
  };

  props: Props;

  render() {
    const {store} = this.props;
    const {app, router} = store;
    const {isValidUrl, loading} = app;

    return (
      <Toolbar>

        <ToolbarLeft>
          <h1>Bizzy</h1>
          {isValidUrl && <UrlBar />}
        </ToolbarLeft>

        {!window.isElectron &&
          <ToolbarRight>
            <HeaderLink
              icon="github"
              text="Code"
              link="https://github.com/nileshtrivedi/bizzy"
            />
            <HeaderLink
              icon="twitter"
              text="Follow"
              link="https://twitter.com/polyglot_devs"
            />
            <HeaderLink
              icon="question-circle"
              text="FAQ"
              view={views.faq}
              router={router}
            />
            <HeaderLink
              icon="chrome"
              text="Extension"
              link="https://chrome.google.com/webstore/detail/bizzy/nfhlbmjiiogoelaflfclodlkncbdiefo"
            />
          </ToolbarRight>}

      </Toolbar>
    );
  }
}

export default ToolbarComponent;
