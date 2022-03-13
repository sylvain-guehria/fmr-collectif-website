import TicketEntity from '../../modules/ticket/TicketEntity';
import { getIdOfTheNextTicketEvent } from './ticketUtil';


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
