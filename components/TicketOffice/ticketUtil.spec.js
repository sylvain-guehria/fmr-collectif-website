/* eslint-disable camelcase */
import TicketEntity from '../../modules/ticket/TicketEntity';
import { getIdOfTheNextTicketEvent, formatTicketDate, formatTicketHour } from './ticketUtil';

describe('#getIdOfTheNextTicketEvent', () => {
    it('Return an empty string if there is no event', () => {
        expect(getIdOfTheNextTicketEvent([])).toBe('');
    });
    it('Return the ticket id if the date is later than now', () => {
        expect(getIdOfTheNextTicketEvent([new TicketEntity({
            uid: 'ticket1',
            date: new Date('10/10/2099')
        })
        ])).toBe('ticket1');
    });
    it('Do not return the ticket id if the date is sooner than now', () => {
        expect(getIdOfTheNextTicketEvent([new TicketEntity({
            uid: 'ticket2',
            date: new Date('10/10/1999')
        })
        ])).toBe('');
    });
    it('Return the ticket id with the closest date in the future', () => {
        expect(getIdOfTheNextTicketEvent([
            new TicketEntity({
                uid: 'ticket1',
                date: new Date('10/10/1999')
            }),
            new TicketEntity({
                uid: 'ticket2',
                date: new Date(`10/12/${new Date().getFullYear() + 1}`)
            }),
            new TicketEntity({
                uid: 'ticket3',
                date: new Date(`7/12/${new Date().getFullYear() + 1}`)
            }),
            new TicketEntity({
                uid: 'ticket4',
                date: new Date(`14/01/${new Date().getFullYear() + 2}`)
            })
        ])).toBe('ticket3');
    });
});


describe('#formatTicketDate', () => {
    it('Return an empty string if there is no timestamp', () => {
        expect(formatTicketDate()).toBe('');
    });
    it('Return the timestamp ref 01/01/1970', () => {
        const _01_january_1970_At_00_00 = 0;
        expect(formatTicketDate(_01_january_1970_At_00_00)).toBe('01/01/1970');
    });
    it('Return the date', () => {
        const _10_december_2020_At_12_30 = 1607599800000;
        expect(formatTicketDate(_10_december_2020_At_12_30)).toBe('10/12/2020');
    });
});

describe('#formatTicketHour', () => {
    it('Return an empty string if there is no timestamp', () => {
        expect(formatTicketHour()).toBe('');
    });
    it('Return the timestamp hour ref 00:00 UTC in local time then 01:00', () => {
        const _01_january_1970_At_00_00 = 0;
        expect(formatTicketHour(_01_january_1970_At_00_00)).toBe('01h00');
    });
    it('Return the hour and minutes', () => {
        const _10_december_2020_At_12_30 = 1607599800000;
        expect(formatTicketHour(_10_december_2020_At_12_30)).toBe('12h30');
    });
    it('Return the hour and minutes starting with 0 if only one digit', () => {
        const _26_mars_2022_At_08_04 = 1648278262000;
        expect(formatTicketHour(_26_mars_2022_At_08_04)).toBe('08h04');
    });
});