import styled from "styled-components";

import {
    Tabs,
    TabList,
    Tab,
    TabPanel
} from 'react-tabs'


export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
    border: 1px solid #ccc;
    padding: 8px;
    user-select: none;
    cursor: pointer;

    &:focus {
        outline:none;
    }

    &.is-selected {
        background-color: #e8e8e8;
        border-bottom-right-radius: 0; 
        border-bottom-left-radius: 0 ; 
        border-bottom: 1px solid white;
    }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
    padding: 8px;
    display: none;
    border: 1px solid #ccc;
    margin: 4px;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
    
`;

WrapperTabPanel.tabsRole = 'TabPanel';