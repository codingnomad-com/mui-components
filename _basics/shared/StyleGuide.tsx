/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { ReactElement, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Wrapper = styled.div.attrs(() => ({}))`
  & {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const ColorComponent = styled.div.attrs((props: { color: string }) => ({
  color: props.color,
}))`
  & {
    background: ${(props): string => props.theme.colors[props.color]};
    height: 40px;
    width: 243px;
    margin: 0 10px 0 0;
  }
`;

const StyleGuide = (): ReactElement => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h2>Colors</h2>
      <Wrapper>
        <ColorComponent color="primary" />

        <span>primary ({theme.colors?.primary?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="secondary" />

        <span>secondary ({theme.colors?.secondary?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="primaryBackground" />

        <span>
          primaryBackground ({theme.colors?.primaryBackground?.toLowerCase()})
        </span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="secondaryBackground" />

        <span>
          secondaryBackground (
          {theme.colors?.secondaryBackground?.toLowerCase()})
        </span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="link" />

        <span>link ({theme.colors?.link?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="border" />

        <span>border ({theme.colors?.border?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="linearGradient" />

        <span>
          linearGradient ({theme.colors?.linearGradient?.toLowerCase()})
        </span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="black" />

        <span>black ({theme.colors?.black?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="gray" />

        <span>gray ({theme.colors?.gray?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="darkGray" />

        <span>darkGray ({theme.colors?.darkGray?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="white" />

        <span>white ({theme.colors?.white?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="highlight" />

        <span>highlight ({theme.colors?.highlight?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="success" />

        <span>success ({theme.colors?.success?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="warning" />

        <span>warning ({theme.colors?.warning?.toLowerCase()})</span>
      </Wrapper>

      <Wrapper>
        <ColorComponent color="error" />

        <span>error ({theme.colors?.error?.toLowerCase()})</span>
      </Wrapper>
    </>
  );
};

export default StyleGuide;
