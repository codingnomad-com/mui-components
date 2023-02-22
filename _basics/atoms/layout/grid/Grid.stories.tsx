import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { Container, Item } from '@/index';

import GridComponent from './Grid';
import { GridProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Layout/Grid',
  component: GridComponent,
  argTypes: {},
} as Meta;

const genHexString = (length = 6) => {
  let output = '';
  for (let i = 0; i < length; ++i) {
    output += Math.floor(Math.random() * 16).toString(16);
  }
  return `#${output}`;
};

const GridTemplate: Story<GridProps> = (args: GridProps): ReactElement => (
  <>
    <GridComponent fullWidth>
      <Container {...args}>
        <Item md="hidden" lg={2} xl={2}>
          <Container>
            <Item lg={2} xl={2}>
              <Container>
                <Item lg={2} xl={2}>
                  <div style={{ backgroundColor: genHexString() }}>1</div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>2</div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>3</div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>4</div>
                </Item>

                <Item md={2} lg={3}>
                  <div style={{ backgroundColor: genHexString() }}>
                    <div style={{ backgroundColor: genHexString() }}>5</div>
                  </div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>
                    <div style={{ backgroundColor: genHexString() }}>6</div>
                  </div>
                </Item>
              </Container>
            </Item>

            <Item>
              <div style={{ backgroundColor: genHexString() }}>2</div>
            </Item>

            <Item>
              <div style={{ backgroundColor: genHexString() }}>3</div>
            </Item>
          </Container>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>2</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>3</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>4</div>
        </Item>

        <Item md={2} lg={3}>
          <div style={{ backgroundColor: genHexString() }}>5</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>6</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>7</div>
        </Item>

        <Item lg={2}>
          <div style={{ backgroundColor: genHexString() }}>8</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>9</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>10</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>11</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>12</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>13</div>
        </Item>
      </Container>
    </GridComponent>

    <GridComponent>
      <Container {...args}>
        <Item lg={2} xl={2}>
          <Container>
            <Item lg={2} xl={2}>
              <Container>
                <Item lg={2} xl={2}>
                  <div style={{ backgroundColor: genHexString() }}>1</div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>2</div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>3</div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>4</div>
                </Item>

                <Item md={2} lg={3}>
                  <div style={{ backgroundColor: genHexString() }}>5</div>
                </Item>

                <Item>
                  <div style={{ backgroundColor: genHexString() }}>6</div>
                </Item>
              </Container>
            </Item>

            <Item>
              <div style={{ backgroundColor: genHexString() }}>2</div>
            </Item>

            <Item>
              <div style={{ backgroundColor: genHexString() }}>3</div>
            </Item>
          </Container>
        </Item>

        <Item>2</Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>3</div>
        </Item>

        <Item>4</Item>

        <Item md={2} lg={3}>
          <div style={{ backgroundColor: genHexString() }}>5</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>6</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>7</div>
        </Item>

        <Item lg={2}>
          <div style={{ backgroundColor: genHexString() }}>8</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>9</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>10</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>11</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>12</div>
        </Item>

        <Item>
          <div style={{ backgroundColor: genHexString() }}>13</div>
        </Item>
      </Container>
    </GridComponent>
  </>
);

export const Grid = GridTemplate.bind({});

Grid.args = {
  itemsPerRowXs: 1,
  itemsPerRowSm: 1,
  itemsPerRowMd: 2,
  itemsPerRowLg: 4,
  itemsPerRowXl: 4,
};
