import React, { FC, ReactElement } from 'react';

import FooterNavigation from '@basics/molecules/navigation/footerNavigation/FooterNavigation';
import { FooterProps } from '@/interfaces';
import Headline from '@basics/atoms/typography/headline/Headline';
import OpeningHours from '@basics/atoms/information/openingHours/OpeningHours';
import Fontawesome from '@/components/_basics/atoms/icons/fontawesome/Fontawesome';
import { getPhoneNumberFormatted } from '@/utils/getPhoneNumberFormatted';
import Paragraph from '@/components/_basics/atoms/typography/paragraph/Paragraph';
import { StyledFooter } from './Footer.styles';

const Footer: FC<FooterProps> = (props): ReactElement => {
  const { footerTextColor, contents = [] } = props;

  return (
    <StyledFooter>
      {contents.map((element, key) => (
        <div key={key}>
          {element.content.headline && (
            <Headline
              headlineLevel="h4"
              color={footerTextColor || 'white'}
              style={{ marginTop: 0, marginBottom: 40 }}
              uppercase
            >
              {element.content.headline}
            </Headline>
          )}

          {element.type === 'footerNavigation' && (
            <FooterNavigation footerNavigationItems={element.content.items} />
          )}

          {element.type === 'contactInfos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {element.content?.openingHoursHeadline && (
                <div style={{ fontWeight: 'bold' }}>
                  {element.content?.openingHoursHeadline}
                </div>
              )}

              {element.content?.openingHours && (
                <OpeningHours
                  openingHours={element.content.openingHours}
                  style={{ maxWidth: '66%' }}
                />
              )}

              <Paragraph style={{ paddingLeft: 0, color: footerTextColor }}>
                {element.content?.phoneNumber && (
                  <div>
                    <span style={{ fontWeight: 'bold' }}>Telefon:</span>{' '}
                    <a
                      href={`tel:${getPhoneNumberFormatted(
                        element.content?.phoneNumber,
                      )}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {getPhoneNumberFormatted(element.content?.phoneNumber)}
                    </a>
                  </div>
                )}

                {element.content?.email && (
                  <div>
                    <span>
                      <a
                        href={`mailto:${element.content.email}`}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {element.content?.email}
                      </a>
                    </span>
                  </div>
                )}
              </Paragraph>
            </div>
          )}

          {element.type === 'iconLinkSection' && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {(element.content?.icons || []).map(
                ({ icon = 'plus', link = '' }, key2) => (
                  <div key={key2} onClick={() => window.open(link, '_blank')}>
                    <Fontawesome
                      key={key2}
                      iconName={icon}
                      iconSize="normal"
                      iconStyle="light"
                    />
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      ))}
    </StyledFooter>
  );
};

export default Footer;
