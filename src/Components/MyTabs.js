import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { MyMap1, MyMap2, MyMap3, MyMap4 } from './MyMaps';


const MyTabs = () => {
    
return  <Tabs>
        <TabList>
            <Tab>Zu Hause</Tab>
            <Tab>Lieblingsstadt in Europa</Tab>
            <Tab>Bester Strandurlaub</Tab>
            <Tab>Spannendste Stadt</Tab>
        </TabList>

        <TabPanel>
            <h2>Langerwehe, Deutschland</h2>
            <MyMap1 height={800} />
        </TabPanel>
        <TabPanel>
            <h2>Tromsø, Nordnorwegen</h2>
            <MyMap2 height={800} />
        </TabPanel>
        <TabPanel>
            <h2>Bamboo Beach, Ko Lanta, Thailand</h2>
            <MyMap3 height={800} />
        </TabPanel>
        <TabPanel>
            <h2>Cusco, Peru</h2>
            <MyMap4 height={800} />
        </TabPanel>
    </Tabs>
};

export default MyTabs