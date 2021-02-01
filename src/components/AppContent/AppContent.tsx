import React from 'react';
import * as Style from './styled';

interface Props {}
/**
 * The actual content for the app, rather than just the providers.
 */

const AppContent: React.FC<Props> = ({}) => {
  return (
    <Style.PageView>
      <Style.Content>
        <Style.FirstRow>
          {/* add input and button here */}
          <div>Input here</div>
        </Style.FirstRow>
        <Style.SecondRow>
          {/* output content list here */}
          <div>Display here</div>
        </Style.SecondRow>
      </Style.Content>
    </Style.PageView>
  );
};
export default AppContent;
