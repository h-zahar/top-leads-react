const data = [
    {
        id: 1,
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/andrew-carnegie.jpg',
        name: 'Andrew Carnegie',
        age: 83,
        died: true,
        birth_place: 'Dunfermline, Scotland',
        industry: 'Steel Manufacturing',
        influence: 'Pioneered many manufacturing process',
        net_worth: 0.38,
        website: 'https://www.carnegie.org/interactives/foundersstory/#!/'
    },

    {
        id: 2,
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/steve-jobs.jpg',
        age: 56,
        name: 'Steve Jobs',
        died: true,
        birth_place: 'San Francisco, California, USA',
        industry: 'Computer Technology, Computer Science',
        influence: 'Advancement in Computers and Media Devices',
        net_worth: 6.1,
        website: 'https://www.apple.com/'
    },

    {
        id: 3,
        name: 'Henry Ford',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/henry_ford2.jpg',
        age: 83,
        died: true,
        birth_place: 'Greenfield Township, Dearborn, Michigan, USA',
        industry: 'Auto-motive manufacturer',
        influence: 'Modern Transport Pioneer',
        net_worth: 1.1,
        website: 'http://www.thomasedison.com/'
    },

    {
        id: 4,
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/mark-zuckerberg8701.jpg',
        name: 'Mark Zuckerberg',
        age: 37,
        birth_place: 'White Plains, New York, USA',
        industry: 'Social Media Mogul',
        influence: 'Revolutionized Online Social Media and Networking',
        net_worth: 68,
        website: 'https://www.facebook.com/'
    },
    
    {
        id: 5,
        name: 'Jeff Bezos',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/bezos1.jpg',
        age: 58,
        birth_place: 'Albuquerque, New Mexico, USA',
        industry: 'Online Retail',
        influence: 'Revolutionized E-Commerce',
        net_worth: 117.2,
        website: 'http://www.amazon.com/'
    },

    {
        id: 6,
        name: 'William Bill Gates',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/Bill-Gates.jpg',
        age: 67,
        birth_place: 'Seattle, Washington, USA',
        industry: 'Information Technology, Computer Science',
        influence: 'Changed the Personal Computer Forever',
        net_worth: 98,
        website: 'https://www.gatesfoundation.org/'
    },

    {
        id: 7,
        name: 'Larry Page',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/larry-page.jpg',
        age: 49,
        birth_place: 'East Lansing, Michigan, USA',
        industry: 'I.T entrepreneur, Computer Science',
        influence: 'Revolutionized Online Searching and Media',
        net_worth: 58.3,
        website: 'https://en.wikipedia.org/wiki/Larry_Page'
    },

    {
        id: 8,
        name: 'Sergey Brin',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/sergey-brin.jpg',
        age: 49,
        birth_place: 'Moscow, Russia',
        industry: 'I.T , Computer Science',
        influence: 'Revolutionized Online Searching and Media',
        net_worth: 56.2,
        website: 'https://en.wikipedia.org/wiki/Sergey_Brin'
    },

    {
        id: 9,
        name: 'Sir Richard Branson',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/richard-branson1.jpg',
        age: 72,
        birth_place: 'Blackheath, London, England, UK',
        industry: 'British industrialist',
        influence: 'Music, Travel, Charity',
        net_worth: 4.4,
        website: 'http://www.virgin.co.uk/'
    },
    
    {
        id: 10,
        name: 'Thomas Alva Edison',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/Thomas-Edison1.jpg',
        age: 84,
        died: true,
        birth_place: 'Milan, Ohio, USA',
        industry: 'Science',
        influence: 'His Inventions Changed the World',
        net_worth: 0.012,
        website: 'https://www.thomasedison.com/'
    },

    {
        id: 11,
        name: 'Ariana Huffington',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/ariana-huffington.jpg',
        age: 72,
        birth_place: 'Athens, Greece',
        industry: 'Blogging Columnist and Author',
        influence: 'A Pioneer in Blogging and Online News',
        net_worth: 0.06,
        website: 'https://www.huffingtonpost.com/'
    },

    {
        id: 12,
        name: 'Matthew Boulton',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/Matthew_Boulton_-_Carl_Frederik_von_Breda.jpg',
        age: 80,
        died: true,
        birth_place: 'Birmingham, West Midlands UK',
        industry: 'Entrepreneurial Manufacturer',
        influence: 'Pioneered many manufacturing processes',
        net_worth: 0.1,
        website: 'https://en.wikipedia.org/wiki/Matthew_Boulton'
    },

    {
        id: 13,
        name: 'Peter Jones',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/peterjones.jpg',
        age: 56,
        birth_place: 'Maidenhead, Berks, United Kingdom',
        industry: 'Telecommunications',
        influence: 'Investing in young entrepreneurs',
        net_worth: 0.55,
        website: 'http://www.peterjones.tv/'
    },
    
    {
        id: 14,
        name: 'Penny Streeter',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/Penny-Streeter.jpg',
        age: 55,
        birth_place: 'Zimbabwe',
        industry: 'Recruitment',
        influence: 'Creating Employment Opportunities',
        net_worth: 0.35,
        website: 'http://www.a24group.com/'
    },

    {
        id: 15,
        name: 'Charles Kemmons Wilson',
        img: 'https://www.incomediary.com/wp-content/uploads/2010/10/0cmh419s.jpg',
        age: 90,
        died: true,
        birth_place: 'Osceola, Kansas, USA',
        industry: 'Hotelier',
        influence: 'Pioneered Hotel Industry',
        net_worth: 0.1,
        website: 'https://www.ihg.com/holidayinn/hotels/gb/en/reservation'
    }
]