import React from 'react';
import { engineering } from '../../lib/data';
import { PAGES, UI_TEXT } from '../../lib/constants';
import CollectionPageContainer from '../../components/CollectionPageContainer';
import CollectionPageHeader from '../../components/CollectionPageHeader';
import TimelineList from '../../components/TimelineList';

export default function EngineeringPage() {
    const items = engineering;
    const title = PAGES.engineering.title;
    const description = PAGES.engineering.description;
    const accentColor = PAGES.engineering.accentColor;
    const basePath = PAGES.engineering.basePath;

    return (
        <CollectionPageContainer>
            <CollectionPageHeader 
                title={title}
                description={description}
                itemCount={items.length}
            />

            <TimelineList
                items={items}
                basePath={basePath}
                accentColor={accentColor}
                buttonText={UI_TEXT.buttons.viewDemo}
                slugPrefix="engineering"
            />
        </CollectionPageContainer>
    );
}

