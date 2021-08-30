/* eslint-disable */
import * as moment from 'moment';

export const calendars = [
    {
        id: '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
        title: 'Personal',
        color: 'bg-teal-500',
        visible: true
    },
    {
        id: '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        title: 'Parish',
        color: 'bg-indigo-500',
        visible: true
    }
];
export const events = [
    // Personal
    {
        id: '3be50686-e3a1-4f4b-aa4d-5cb8517ba4e4',
        calendarId: '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        title: 'Parish Day',
        description: '',
        start: moment().add(1, 'week').hour(9).minute(0).second(0).millisecond(0).toISOString(), // Today 09:00
        end: moment().add(1, 'week').hour(14).minute(0).second(0).millisecond(0).toISOString(), // Tomorrow 14:00
        duration: 90,
        allDay: false,
        recurrence: null
    },

    {
        id: 'c3e6c110-9b67-4e6b-a2ab-3046abf1b074',
        calendarId: '1a470c8e-40ed-4c2d-b590-a4f1f6ead6cc',
        title: 'Mom\'s Birthday',
        description: '',
        start: moment().add(-2, 'day').startOf('day').toISOString(), // 8th of the current month at start of the day
        end: moment().year(9999).endOf('year').toISOString(), // End of the times
        duration: 0,
        allDay: true,
        recurrence: 'FREQ=YEARLY;INTERVAL=1'
    },

    {
        id: '4d88418c-cbdf-4f03-89e1-e3dca14a9e92',
        calendarId: '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        title: 'Holy Mass',
        description: '',
        start: moment().year(2018).hour(6).minute(0).second(0).millisecond(0).toISOString(), // Second Saturday of the current month at 13:00
        end: moment().year(9999).endOf('year').toISOString(), // End of the times
        duration: 120, // Minutes
        allDay: false,
        recurrence: 'FREQ=WEEKLY;BYDAY=SU'
    },
    // Work
    {
        id: '0e848e4a-0333-42e3-b223-0209c4b58a3b',
        calendarId: '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        title: 'Dhyanam',
        description: '',
        start: moment().date(19).hour(15).minute(0).second(0).millisecond(0).toISOString(), // 19th of the current month at 15:00
        end: moment().date(19).hour(17).minute(30).second(0).millisecond(0).toISOString(), // 19th of the current month at 17:30
        duration: null,
        allDay: true,
        recurrence: null
    },
    {
        id: 'f619eb76-c21b-4bb0-aeff-41e765cae290',
        calendarId: '5dab5f7b-757a-4467-ace1-305fe07b11fe',
        title: 'Namaskaram',
        description: 'Sarah and Jessica will be joining the call',
        start: moment().date(8).hour(18).minute(30).second(0).millisecond(0).toISOString(), // 8th of the current month at 11:30
        end: moment().date(8).hour(19).minute(45).second(0).millisecond(0).toISOString(), // 8th of the current month at 12:45
        duration: null,
        allDay: false,
        recurrence: 'FREQ=WEEKLY;BYDAY=SA'
    },
    // {
    //     id         : 'd97ea3ca-0e5a-4b86-a4fa-5b80a261081e',
    //     calendarId : '5dab5f7b-757a-4467-ace1-305fe07b11fe',
    //     title      : 'Meeting',
    //     description: '',
    //     start      : moment().date(1).hour(9).minute(0).second(0).millisecond(0).add((5 - moment().date(1).day()) % 7, 'day').add(1, 'week').toISOString(), // Second Friday of the current month at 09:00
    //     end        : moment().year(9999).endOf('year').toISOString(), // End of the times
    //     duration   : 150, // Minutes
    //     allDay     : false,
    //     recurrence : 'FREQ=WEEKLY;INTERVAL=2;BYDAY=FR'
    // }
];
export const exceptions = [];
export const settings = {
    dateFormat: 'll', // Aug 20, 2019
    timeFormat: '24', // 24-hour format
    startWeekOn: 0 // Monday
};
export const weekdays = [
    {
        abbr: 'M',
        label: 'Monday',
        value: 'MO'
    },
    {
        abbr: 'T',
        label: 'Tuesday',
        value: 'TU'
    },
    {
        abbr: 'W',
        label: 'Wednesday',
        value: 'WE'
    },
    {
        abbr: 'T',
        label: 'Thursday',
        value: 'TH'
    },
    {
        abbr: 'F',
        label: 'Friday',
        value: 'FR'
    },
    {
        abbr: 'S',
        label: 'Saturday',
        value: 'SA'
    },
    {
        abbr: 'S',
        label: 'Sunday',
        value: 'SU'
    }
];
