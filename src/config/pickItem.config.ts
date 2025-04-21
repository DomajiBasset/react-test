
export const rowData: RowData[] = [
    {
        id: '101001(101)',
        planNumber: '101001',
        year: '101',
        englishCode: 'AA',
        title: 'AA-Plan',
        nature: 'AAA',
        period: '999/06/01~999/12/31',
    },
    {
        id: '107005(102)',
        planNumber: '107002',
        year: '102',
        englishCode: 'BB',
        title: 'BB-Plan',
        nature: 'BBB',
        period: 'xxx/06/01~xxx/12/31',
    },
    {
        id: '103003(103)',
        planNumber: '103003',
        year: '103',
        englishCode: 'CC',
        title: 'CC-Plan',
        nature: 'ccc',
        period: 'ccc/06/01~ccc/12/31',
    },
    {
        id: '104004(104)',
        planNumber: '104004',
        year: '104',
        englishCode: 'DD',
        title: 'DD-Plan',
        nature: 'DDD',
        period: 'ddd/06/01~ddd/12/31',
    }
];

export const th_Columns = [
    { title: 'Plan', className: 'th-width-10' },
    { title: 'Year', className: 'th-width-8' },
    { title: 'Code-en', className: 'th-width-12' },
    { title: 'Name', className: 'th-width-auto' },
    { title: 'Nature', className: 'th-width-12' },
    { title: 'Duration', className: 'th-width-18' },
];

export type RowData = {
    id: string;
    planNumber: string;
    year: string;
    englishCode: string;
    title: string;
    nature: string;
    period: string;
};